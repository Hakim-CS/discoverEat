import { useState, useEffect, useMemo } from 'react';

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  cuisine: string;
  priceRange: string;
  location: string;
  occasions: string[];
  coordinates?: { latitude: number; longitude: number };
  distance?: number;
}

// Expanded mock data for search functionality
const allRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Bella Vista Italian",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 324,
    cuisine: "Italian",
    priceRange: "$$$",
    location: "Downtown District",
    occasions: ["Date Night", "Family"],
    coordinates: { latitude: 40.7128, longitude: -74.0060 }
  },
  {
    id: "2",
    name: "Sunset Terrace",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 267,
    cuisine: "Mediterranean",
    priceRange: "$$$$",
    location: "Rooftop District",
    occasions: ["Date Night", "Special Events"],
    coordinates: { latitude: 40.7589, longitude: -73.9851 }
  },
  {
    id: "3",
    name: "Family Garden Bistro",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 189,
    cuisine: "American",
    priceRange: "$$",
    location: "Suburbs",
    occasions: ["Family", "Friends"],
    coordinates: { latitude: 40.6892, longitude: -74.0445 }
  },
  {
    id: "4",
    name: "Business Hub Steakhouse",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    rating: 4.9,
    reviewCount: 412,
    cuisine: "Steakhouse",
    priceRange: "$$$$",
    location: "Financial District",
    occasions: ["Business", "Special Events"],
    coordinates: { latitude: 40.7074, longitude: -74.0113 }
  },
  {
    id: "5",
    name: "Casual Corner Cafe",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&h=300&fit=crop",
    rating: 4.5,
    reviewCount: 156,
    cuisine: "Cafe",
    priceRange: "$",
    location: "Midtown",
    occasions: ["Friends", "Casual"],
    coordinates: { latitude: 40.7505, longitude: -73.9934 }
  },
  {
    id: "6",
    name: "Tokyo Sushi Bar",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 298,
    cuisine: "Japanese",
    priceRange: "$$$",
    location: "Little Tokyo",
    occasions: ["Date Night", "Business"],
    coordinates: { latitude: 40.7282, longitude: -73.9942 }
  },
  {
    id: "7",
    name: "Grandma's Kitchen",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 203,
    cuisine: "Home Cooking",
    priceRange: "$$",
    location: "Old Town",
    occasions: ["Family", "Comfort Food"],
    coordinates: { latitude: 40.7411, longitude: -74.0097 }
  }
];

const locations = ["Downtown District", "Rooftop District", "Suburbs", "Financial District", "Midtown", "Little Tokyo", "Old Town"];
const cuisines = ["Italian", "Mediterranean", "American", "Steakhouse", "Cafe", "Japanese", "Home Cooking"];
const occasions = ["Date Night", "Family", "Friends", "Business", "Special Events", "Casual", "Comfort Food"];

export const useRestaurantSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [results, setResults] = useState<Restaurant[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  // Calculate distance between two points
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Get live suggestions based on current query
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const restaurantSuggestions = allRestaurants
      .filter(r => r.name.toLowerCase().includes(query))
      .map(r => ({ type: 'restaurant', value: r.name, data: r }));
    
    const locationSuggestions = locations
      .filter(l => l.toLowerCase().includes(query))
      .map(l => ({ type: 'location', value: l, data: null }));
    
    const cuisineSuggestions = cuisines
      .filter(c => c.toLowerCase().includes(query))
      .map(c => ({ type: 'cuisine', value: c, data: null }));
    
    const occasionSuggestions = occasions
      .filter(o => o.toLowerCase().includes(query))
      .map(o => ({ type: 'occasion', value: o, data: null }));

    return [...restaurantSuggestions, ...locationSuggestions, ...cuisineSuggestions, ...occasionSuggestions]
      .slice(0, 8); // Limit to 8 suggestions
  }, [searchQuery]);

  // Perform search
  const performSearch = (query: string = searchQuery, location: string = locationQuery) => {
    setIsSearching(true);
    
    setTimeout(() => {
      let filtered = allRestaurants;
      
      if (query.trim()) {
        const searchTerm = query.toLowerCase();
        filtered = filtered.filter(restaurant => 
          restaurant.name.toLowerCase().includes(searchTerm) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm) ||
          restaurant.location.toLowerCase().includes(searchTerm) ||
          restaurant.occasions.some(occasion => occasion.toLowerCase().includes(searchTerm))
        );
      }
      
      if (location.trim()) {
        const locationTerm = location.toLowerCase();
        filtered = filtered.filter(restaurant => 
          restaurant.location.toLowerCase().includes(locationTerm)
        );
      }

      // Add distance if user location is available
      if (userLocation) {
        filtered = filtered.map(restaurant => {
          if (restaurant.coordinates) {
            const distance = calculateDistance(
              userLocation.latitude,
              userLocation.longitude,
              restaurant.coordinates.latitude,
              restaurant.coordinates.longitude
            );
            return { ...restaurant, distance };
          }
          return restaurant;
        }).sort((a, b) => (a.distance || 999) - (b.distance || 999));
      }
      
      setResults(filtered);
      setIsSearching(false);
    }, 300); // Simulate API delay
  };

  // Search by current location
  const searchByLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser');
      return;
    }

    setIsSearching(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        
        // Find nearby restaurants
        const nearby = allRestaurants.map(restaurant => {
          if (restaurant.coordinates) {
            const distance = calculateDistance(
              latitude,
              longitude,
              restaurant.coordinates.latitude,
              restaurant.coordinates.longitude
            );
            return { ...restaurant, distance };
          }
          return restaurant;
        }).sort((a, b) => (a.distance || 999) - (b.distance || 999));
        
        setResults(nearby);
        setLocationQuery("Current Location");
        setIsSearching(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Unable to get your location. Please try again.');
        setIsSearching(false);
      }
    );
  };

  return {
    searchQuery,
    setSearchQuery,
    locationQuery,
    setLocationQuery,
    results,
    suggestions,
    isSearching,
    userLocation,
    performSearch,
    searchByLocation,
    allRestaurants
  };
};