import { useState } from "react";
import { Heart, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";

// Mock data for favorites
const mockFavorites = [
  {
    id: 1,
    name: "The Garden Bistro",
    location: "Downtown",
    rating: 4.8,
    occasion: "Date Night",
    image: "/src/assets/restaurant-1.jpg",
    description: "Romantic atmosphere with garden views"
  },
  {
    id: 2,
    name: "Family Table",
    location: "Suburbia",
    rating: 4.6,
    occasion: "Family Dinner",
    image: "/src/assets/restaurant-2.jpg",
    description: "Kid-friendly with spacious dining"
  },
  {
    id: 3,
    name: "Executive Lounge",
    location: "Business District",
    rating: 4.9,
    occasion: "Business Meeting",
    image: "/src/assets/restaurant-3.jpg",
    description: "Professional setting with private rooms"
  }
];

const Favorites = () => {
  const [favorites, setFavorites] = useState(mockFavorites);
  const [sortBy, setSortBy] = useState("rating");

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const sortedFavorites = [...favorites].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "occasion") return a.occasion.localeCompare(b.occasion);
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Favorite Restaurants
            </h1>
            <p className="text-muted-foreground text-lg">
              Keep track of your most loved dining spots
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="text-sm text-muted-foreground">
              {favorites.length} restaurant{favorites.length !== 1 ? 's' : ''} saved
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="occasion">Occasion</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Favorites Grid */}
          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No favorites yet</h3>
              <p className="text-muted-foreground mb-6">Start exploring restaurants and save your favorites</p>
              <Button asChild>
                <a href="/discover">Discover Restaurants</a>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedFavorites.map((restaurant) => (
                <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-48 object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                      onClick={() => removeFavorite(restaurant.id)}
                    >
                      <Heart className="h-5 w-5 fill-destructive text-destructive" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      {restaurant.location}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {restaurant.occasion}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {restaurant.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;