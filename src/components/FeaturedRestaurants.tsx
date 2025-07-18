import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";

const mockRestaurants = [
  {
    id: "1",
    name: "Bella Vista",
    image: restaurant1,
    rating: 4.8,
    reviewCount: 342,
    cuisine: "Italian",
    priceRange: "$$$",
    location: "Downtown, 0.5 mi",
    openHours: "Open until 10 PM",
    occasions: ["Date Night", "Special Events"]
  },
  {
    id: "2", 
    name: "The Family Table",
    image: restaurant2,
    rating: 4.6,
    reviewCount: 218,
    cuisine: "American",
    priceRange: "$$",
    location: "Midtown, 1.2 mi",
    openHours: "Open until 9 PM",
    occasions: ["Family", "Friends"]
  },
  {
    id: "3",
    name: "Executive Dining",
    image: restaurant3,
    rating: 4.9,
    reviewCount: 156,
    cuisine: "Contemporary",
    priceRange: "$$$$",
    location: "Business District, 0.8 mi",
    openHours: "Open until 11 PM",
    occasions: ["Business", "Special Events"]
  }
];

const FeaturedRestaurants = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleFavoriteToggle = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Restaurants
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked dining experiences that perfectly match different occasions and create 
            unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mockRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
              isFavorite={favorites.has(restaurant.id)}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;