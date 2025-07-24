import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Map } from "./Map";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapIcon, List, Loader2 } from "lucide-react";
import type { Restaurant } from "@/hooks/useRestaurantSearch";

interface SearchResultsProps {
  results: Restaurant[];
  isSearching: boolean;
  userLocation?: { latitude: number; longitude: number } | null;
  searchQuery: string;
  locationQuery: string;
}

export const SearchResults = ({ 
  results, 
  isSearching, 
  userLocation, 
  searchQuery, 
  locationQuery 
}: SearchResultsProps) => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  if (isSearching) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Searching restaurants...</span>
        </div>
      </div>
    );
  }

  if (results.length === 0 && (searchQuery || locationQuery)) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">No restaurants found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or location
          </p>
        </CardContent>
      </Card>
    );
  }

  if (results.length === 0) {
    return null;
  }

  const mapMarkers = [
    ...(userLocation ? [{
      longitude: userLocation.longitude,
      latitude: userLocation.latitude,
      title: "Your Location",
      description: "You are here"
    }] : []),
    ...results
      .filter(r => r.coordinates)
      .map(restaurant => ({
        longitude: restaurant.coordinates!.longitude,
        latitude: restaurant.coordinates!.latitude,
        title: restaurant.name,
        description: `${restaurant.cuisine} • ${restaurant.priceRange} • ⭐ ${restaurant.rating}`
      }))
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              Search Results ({results.length})
            </CardTitle>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('map')}
              >
                <MapIcon className="h-4 w-4 mr-2" />
                Map
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'list' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((restaurant) => (
                <div key={restaurant.id} className="relative">
                  <RestaurantCard
                    id={restaurant.id}
                    name={restaurant.name}
                    image={restaurant.image}
                    rating={restaurant.rating}
                    reviewCount={restaurant.reviewCount}
                    cuisine={restaurant.cuisine}
                    priceRange={restaurant.priceRange}
                    location={restaurant.location}
                    openHours="5:00 PM - 11:00 PM"
                    occasions={restaurant.occasions}
                  />
                  {restaurant.distance && (
                    <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                      {restaurant.distance.toFixed(1)} km
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="h-96 rounded-lg overflow-hidden">
              <Map
                longitude={userLocation?.longitude || results[0]?.coordinates?.longitude || -74.0060}
                latitude={userLocation?.latitude || results[0]?.coordinates?.latitude || 40.7128}
                zoom={12}
                markers={mapMarkers}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};