/**
 * Secure Token Storage Utility
 * Replaces insecure localStorage usage with proper validation and sanitization
 */

interface TokenValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates Mapbox public token format
 */
export function validateMapboxToken(token: string): TokenValidationResult {
  if (!token || typeof token !== 'string') {
    return { isValid: false, error: 'Token is required and must be a string' };
  }

  // Trim whitespace and check basic format
  const trimmedToken = token.trim();
  
  // Mapbox public tokens start with 'pk.'
  if (!trimmedToken.startsWith('pk.')) {
    return { isValid: false, error: 'Invalid token format. Mapbox public tokens must start with "pk."' };
  }

  // Basic length check (Mapbox tokens are typically around 70+ characters)
  if (trimmedToken.length < 50) {
    return { isValid: false, error: 'Token appears to be too short' };
  }

  // Check for valid base64-like characters after 'pk.'
  const tokenBody = trimmedToken.slice(3);
  const validTokenPattern = /^[A-Za-z0-9+/=._-]+$/;
  
  if (!validTokenPattern.test(tokenBody)) {
    return { isValid: false, error: 'Token contains invalid characters' };
  }

  return { isValid: true };
}

/**
 * Sanitizes token input to prevent XSS
 */
export function sanitizeToken(token: string): string {
  if (!token || typeof token !== 'string') {
    return '';
  }

  // Remove any HTML tags, scripts, or dangerous characters
  const sanitized = token
    .trim()
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/[<>"'&]/g, ''); // Remove dangerous characters

  return sanitized;
}

/**
 * Secure token storage with validation
 */
export class SecureTokenStorage {
  private static readonly TOKEN_KEY = 'mapbox_token';
  private static readonly TOKEN_TIMESTAMP_KEY = 'mapbox_token_timestamp';
  private static readonly TOKEN_EXPIRY_HOURS = 24; // Token expires after 24 hours

  /**
   * Store token securely with validation
   */
  static setToken(token: string): { success: boolean; error?: string } {
    try {
      // Sanitize input
      const sanitizedToken = sanitizeToken(token);
      
      // Validate token format
      const validation = validateMapboxToken(sanitizedToken);
      if (!validation.isValid) {
        return { success: false, error: validation.error };
      }

      // Store with timestamp for expiry
      const timestamp = Date.now();
      localStorage.setItem(this.TOKEN_KEY, sanitizedToken);
      localStorage.setItem(this.TOKEN_TIMESTAMP_KEY, timestamp.toString());

      return { success: true };
    } catch (error) {
      console.error('Failed to store token:', error);
      return { success: false, error: 'Failed to store token securely' };
    }
  }

  /**
   * Retrieve token with expiry check
   */
  static getToken(): string | null {
    try {
      const token = localStorage.getItem(this.TOKEN_KEY);
      const timestampStr = localStorage.getItem(this.TOKEN_TIMESTAMP_KEY);

      if (!token || !timestampStr) {
        return null;
      }

      // Check if token has expired
      const timestamp = parseInt(timestampStr, 10);
      const now = Date.now();
      const expiryTime = timestamp + (this.TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);

      if (now > expiryTime) {
        // Token expired, remove it
        this.removeToken();
        return null;
      }

      // Re-validate token before returning
      const validation = validateMapboxToken(token);
      if (!validation.isValid) {
        this.removeToken();
        return null;
      }

      return token;
    } catch (error) {
      console.error('Failed to retrieve token:', error);
      return null;
    }
  }

  /**
   * Remove token securely
   */
  static removeToken(): void {
    try {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.TOKEN_TIMESTAMP_KEY);
    } catch (error) {
      console.error('Failed to remove token:', error);
    }
  }

  /**
   * Check if token exists and is valid
   */
  static hasValidToken(): boolean {
    return this.getToken() !== null;
  }
}

/**
 * Input sanitization utility for general use
 */
export function sanitizeInput(input: string, maxLength = 1000): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  return input
    .slice(0, maxLength) // Prevent excessively long input
    .trim()
    .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/[<>"'&]/g, (char) => { // Escape dangerous characters
      const escapeMap: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return escapeMap[char] || char;
    });
}