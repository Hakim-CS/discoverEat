import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, MapPin, Clock, Filter } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
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
          <div className="max-w-4xl mx-auto mb-12">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3500,
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {featuredRestaurants.map((restaurant) => (
                  <CarouselItem key={restaurant.id}>
                    <div className="relative rounded-2xl overflow-hidden">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
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
                  <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id.toString()}
                    name={restaurant.name}
                    image={restaurant.image}
                    rating={restaurant.rating}
                    reviewCount={145}
                    cuisine="Italian"
                    priceRange="$$$"
                    location={restaurant.location}
                    openHours="5:00 PM - 11:00 PM"
                    occasions={[restaurant.occasion]}
                  />
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