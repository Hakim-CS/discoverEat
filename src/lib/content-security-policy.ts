/**
 * Content Security Policy utilities for enhanced security
 * Helps prevent XSS and other injection attacks
 */

export const generateCSPHeader = (): string => {
  const policies = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Vite dev needs unsafe-eval
    "style-src 'self' 'unsafe-inline'", // Tailwind needs unsafe-inline
    "img-src 'self' data: https: blob:",
    "font-src 'self' data:",
    "connect-src 'self' ws: wss: https://api.mapbox.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests"
  ];

  return policies.join('; ');
};

/**
 * Security headers for better protection
 */
export const securityHeaders = {
  'Content-Security-Policy': generateCSPHeader(),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-XSS-Protection': '1; mode=block'
};

/**
 * Apply security headers to HTML meta tags (for static sites)
 */
export const generateSecurityMetaTags = (): string => {
  return `
    <meta http-equiv="Content-Security-Policy" content="${generateCSPHeader()}">
    <meta http-equiv="X-Frame-Options" content="DENY">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta name="referrer" content="strict-origin-when-cross-origin">
  `;
};