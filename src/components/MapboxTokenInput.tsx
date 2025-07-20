import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface MapboxTokenInputProps {
  onTokenSet: (token: string) => void;
  existingToken?: string;
}

export const MapboxTokenInput: React.FC<MapboxTokenInputProps> = ({ onTokenSet, existingToken }) => {
  const [token, setToken] = useState(existingToken || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      localStorage.setItem('mapbox_token', token.trim());
      onTokenSet(token.trim());
    }
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
              Get your token at: <a href="https://mapbox.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
            </p>
          </div>
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIi..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="font-mono text-sm"
          />
          <Button type="submit" className="w-full" disabled={!token.trim()}>
            Save Token
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};