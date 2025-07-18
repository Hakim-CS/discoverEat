import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Clock, Filter } from "lucide-react";
import restaurantImage1 from "@/assets/restaurant-1.jpg";
import restaurantImage2 from "@/assets/restaurant-2.jpg";
import restaurantImage3 from "@/assets/restaurant-3.jpg";

const featuredRestaurants = [
  {
    id: 1,
    name: "Sunset Terrace",
    image: restaurantImage1,
    rating: 4.8,
    occasion: "Date Night",
    location: "Downtown",
    description: "Romantic rooftop dining with city views"
  },
  {
    id: 2,
    name: "Family Garden",
    image: restaurantImage2,
    rating: 4.6,
    occasion: "Family",
    location: "Suburbs",
    description: "Spacious family restaurant with kids menu"
  },
  {
    id: 3,
    name: "Business Hub",
    image: restaurantImage3,
    rating: 4.7,
    occasion: "Business",
    location: "Financial District",
    description: "Professional atmosphere for meetings"
  }
];

const allRestaurants = [
  ...featuredRestaurants,
  {
    id: 4,
    name: "Casual Corner",
    image: restaurantImage1,
    rating: 4.5,
    occasion: "Friends",
    location: "Midtown",
    description: "Laid-back spot perfect for hanging out"
  },
  {
    id: 5,
    name: "Celebration Hall",
    image: restaurantImage2,
    rating: 4.9,
    occasion: "Special Events",
    location: "Uptown",
    description: "Elegant venue for special occasions"
  }
];

const Discover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedOccasion, setSelectedOccasion] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredRestaurants = allRestaurants.filter(restaurant => 
    selectedOccasion === "all" || restaurant.occasion.toLowerCase().includes(selectedOccasion)
  );

  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Carousel Section */}
      <section className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Discover Amazing Restaurants
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore trending restaurants and find your next perfect dining experience
            </p>
          </div>

          {/* Featured Carousel */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredRestaurants.map((restaurant) => (
                  <div key={restaurant.id} className="w-full flex-shrink-0 relative">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <Badge className="mb-2 bg-primary">{restaurant.occasion}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{restaurant.name}</h3>
                      <p className="text-white/90">{restaurant.description}</p>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-white/90">{restaurant.rating}</span>
                        <MapPin className="h-4 w-4 text-white/90 ml-4 mr-1" />
                        <span className="text-white/90">{restaurant.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center space-x-2 mt-4">
              {featuredRestaurants.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Restaurant List */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Filters */}
            <div className="md:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Occasion
                      </label>
                      <Tabs value={selectedOccasion} onValueChange={setSelectedOccasion}>
                        <TabsList className="grid grid-cols-1 gap-1 h-auto bg-transparent">
                          <TabsTrigger value="all" className="justify-start">All</TabsTrigger>
                          <TabsTrigger value="date" className="justify-start">Date Night</TabsTrigger>
                          <TabsTrigger value="family" className="justify-start">Family</TabsTrigger>
                          <TabsTrigger value="business" className="justify-start">Business</TabsTrigger>
                          <TabsTrigger value="friends" className="justify-start">Friends</TabsTrigger>
                          <TabsTrigger value="special" className="justify-start">Special Events</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Sort By
                      </label>
                      <Tabs value={sortBy} onValueChange={setSortBy}>
                        <TabsList className="grid grid-cols-1 gap-1 h-auto bg-transparent">
                          <TabsTrigger value="rating" className="justify-start">Rating</TabsTrigger>
                          <TabsTrigger value="name" className="justify-start">Name</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Restaurant Grid */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedRestaurants.map((restaurant) => (
                  <Card key={restaurant.id} className="overflow-hidden hover:shadow-warm transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={restaurant.image} 
                        alt={restaurant.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary">
                        {restaurant.occasion}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{restaurant.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{restaurant.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{restaurant.rating}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {restaurant.location}
                        </div>
                      </div>
                      
                      <Button className="w-full mt-3" variant="outline">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discover;