import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MapPin, AlertTriangle, CheckCircle } from 'lucide-react';
import { SecureTokenStorage, sanitizeInput } from '@/lib/secure-storage';

interface MapboxTokenInputProps {
  onTokenSet: (token: string) => void;
  existingToken?: string;
}

export const MapboxTokenInput: React.FC<MapboxTokenInputProps> = ({ onTokenSet, existingToken }) => {
  const [token, setToken] = useState(existingToken || '');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      // Sanitize input to prevent XSS
      const sanitizedToken = sanitizeInput(token, 200); // Limit token length
      
      if (!sanitizedToken.trim()) {
        setError('Token is required');
        setIsLoading(false);
        return;
      }

      // Use secure storage with validation
      const result = SecureTokenStorage.setToken(sanitizedToken);
      
      if (result.success) {
        setSuccess('Token saved securely! Map features are now enabled.');
        onTokenSet(sanitizedToken);
      } else {
        setError(result.error || 'Failed to save token');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Token submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setToken(value);
    
    // Clear previous errors when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Mapbox Configuration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Please enter your Mapbox public token to enable map features.
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Get your token at: <a 
                href="https://mapbox.com/" 
                className="text-primary hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Open Mapbox website in new tab"
              >
                mapbox.com
              </a>
            </p>
          </div>
          
          {/* Error Alert */}
          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {/* Success Alert */}
          {success && (
            <Alert className="border-green-200 bg-green-50 text-green-800">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIi..."
            value={token}
            onChange={handleInputChange}
            className="font-mono text-sm"
            aria-label="Mapbox public token"
            aria-describedby="token-help"
            required
            maxLength={200}
            autoComplete="off"
            spellCheck={false}
          />
          
          <p id="token-help" className="text-xs text-muted-foreground">
            Token should start with "pk." and be around 70+ characters long
          </p>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={!token.trim() || isLoading}
            aria-label={isLoading ? 'Saving token...' : 'Save Mapbox token'}
          >
            {isLoading ? 'Saving...' : 'Save Token'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};