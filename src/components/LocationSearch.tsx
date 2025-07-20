import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Loader2, AlertCircle } from 'lucide-react';
import { useGeolocation } from '@/hooks/useGeolocation';
import { Map } from './Map';
import RestaurantCard from './RestaurantCard';

// Mock function to calculate distance (in real app, use proper geolocation library)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Mock nearby restaurants data
const getNearbyRestaurants = (userLat: number, userLon: number) => {
  const mockRestaurants = [
    {
      id: "1",
      name: "Bella Vista Italian",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      rating: 4.8,
      reviewCount: 324,
      cuisine: "Italian",
      priceRange: "$$$",
      location: "123 Main Street",
      occasions: ["Date Night", "Family Friendly"],
      coordinates: { latitude: userLat + 0.001, longitude: userLon + 0.001 }
    },
    {
      id: "2", 
      name: "Tokyo Sushi Bar",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      rating: 4.6,
      reviewCount: 189,
      cuisine: "Japanese",
      priceRange: "$$",
      location: "456 Oak Avenue",
      occasions: ["Date Night", "Quick Bite"],
      coordinates: { latitude: userLat + 0.002, longitude: userLon - 0.001 }
    },
    {
      id: "3",
      name: "The Garden Bistro",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      rating: 4.5,
      reviewCount: 267,
      cuisine: "French",
      priceRange: "$$$$",
      location: "789 Park Lane",
      occasions: ["Business Meetings", "Special Occasions"],
      coordinates: { latitude: userLat - 0.001, longitude: userLon + 0.002 }
    }
  ];

  return mockRestaurants.map(restaurant => ({
    ...restaurant,
    distance: calculateDistance(
      userLat, 
      userLon, 
      restaurant.coordinates.latitude, 
      restaurant.coordinates.longitude
    )
  })).sort((a, b) => a.distance - b.distance);
};

export const LocationSearch: React.FC = () => {
  const { latitude, longitude, error, loading, getCurrentLocation } = useGeolocation();
  const [nearbyRestaurants, setNearbyRestaurants] = useState<any[]>([]);
  const [showMap, setShowMap] = useState(false);

  const handleLocationSearch = () => {
    getCurrentLocation();
  };

  React.useEffect(() => {
    if (latitude && longitude) {
      const restaurants = getNearbyRestaurants(latitude, longitude);
      setNearbyRestaurants(restaurants);
    }
  }, [latitude, longitude]);

  const mapMarkers = nearbyRestaurants.map(restaurant => ({
    longitude: restaurant.coordinates.longitude,
    latitude: restaurant.coordinates.latitude,
    title: restaurant.name,
    description: `${restaurant.cuisine} • ${restaurant.priceRange} • ${restaurant.distance.toFixed(1)}km away`
  }));

  if (latitude && longitude) {
    mapMarkers.push({
      longitude: longitude,
      latitude: latitude,
      title: "Your Location",
      description: "You are here"
    });
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5" />
            Find Restaurants Near Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button 
              onClick={handleLocationSearch}
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <MapPin className="h-4 w-4 mr-2" />
              )}
              {loading ? 'Getting Location...' : 'Search My Location'}
            </Button>

            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            {latitude && longitude && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-sm">
                    Found {nearbyRestaurants.length} restaurants nearby
                  </Badge>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowMap(!showMap)}
                  >
                    {showMap ? 'Hide Map' : 'Show Map'}
                  </Button>
                </div>

                {showMap && (
                  <Map
                    latitude={latitude}
                    longitude={longitude}
                    zoom={14}
                    markers={mapMarkers}
                    className="w-full h-80"
                  />
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {nearbyRestaurants.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Restaurants Near You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyRestaurants.map(restaurant => (
              <div key={restaurant.id} className="relative">
                <RestaurantCard {...restaurant} />
                <Badge 
                  variant="secondary" 
                  className="absolute top-2 right-2 bg-background/90 backdrop-blur"
                >
                  {restaurant.distance.toFixed(1)}km away
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};