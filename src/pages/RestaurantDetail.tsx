import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Star, MapPin, Clock, Phone, Globe, Calendar, X, Map as MapIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Map } from "@/components/Map";
import { designTokens } from "@/lib/design-tokens";

// Mock data for restaurant details - in real app this would come from API
const getRestaurantData = (id: string) => ({
  id,
  name: "Bella Vista Italian",
  image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
  rating: 4.8,
  reviewCount: 324,
  cuisine: "Italian",
  priceRange: "$$$",
  location: "123 Main Street, Downtown District",
  coordinates: { latitude: 40.7128, longitude: -74.0060 },
  openHours: "5:00 PM - 11:00 PM",
  phone: "(555) 123-4567",
  website: "www.bellavista.com",
  occasions: ["Date Night", "Family Friendly", "Business Meetings"],
  description: "Experience authentic Italian cuisine in an elegant atmosphere. Our chefs bring traditional recipes with a modern twist, using only the finest imported ingredients.",
  servingStyle: "Our dishes are artfully plated and served with attention to detail. We offer both intimate table service and family-style sharing options for larger groups.",
  gallery: [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
  ],
  menu: {
    "Starters": [
      {
        name: "Bruschetta al Pomodoro",
        description: "Fresh tomatoes, basil, and mozzarella on toasted bread",
        price: "$12",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
        tags: ["Vegetarian"]
      },
      {
        name: "Antipasto Classico",
        description: "Selection of cured meats, cheeses, and marinated vegetables",
        price: "$18",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
        tags: ["Gluten-Free Options"]
      }
    ],
    "Mains": [
      {
        name: "Spaghetti Carbonara",
        description: "Traditional Roman pasta with pancetta, eggs, and pecorino",
        price: "$24",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        tags: []
      },
      {
        name: "Osso Buco Milanese",
        description: "Braised veal shanks with saffron risotto",
        price: "$36",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        tags: ["Signature Dish"]
      }
    ],
    "Desserts": [
      {
        name: "Tiramisu della Casa",
        description: "Traditional mascarpone and coffee layered dessert",
        price: "$10",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
        tags: ["House Special"]
      }
    ]
  }
});

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showMap, setShowMap] = useState(false);
  
  if (!id) return null;
  
  const restaurant = getRestaurantData(id);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Restaurants</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
              className={`rounded-full favorite-button ${
                isFavorite 
                  ? 'text-[var(--color-favorite-text)] hover:text-[var(--color-favorite-hover-text)]' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label={isFavorite ? designTokens.ariaLabels.unfavoriteButton : designTokens.ariaLabels.favoriteButton}
              aria-pressed={isFavorite}
            >
              <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} aria-hidden="true" />
              <span className="sr-only">
                {isFavorite ? designTokens.patterns.favorite : designTokens.patterns.unfavorite}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Carousel Section */}
      <div className="relative">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            })
          ]}
          className="w-full"
        >
          <CarouselContent>
            {restaurant.gallery.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${restaurant.name} gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {index === 0 && (
                    <div className="absolute bottom-6 left-6 text-white">
                      <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-5 w-5 fill-accent text-accent" />
                          <span className="font-semibold">{restaurant.rating}</span>
                          <span className="text-white/80">({restaurant.reviewCount} reviews)</span>
                        </div>
                        <span className="text-white/80">{restaurant.cuisine}</span>
                        <span className="text-white/80">{restaurant.priceRange}</span>
                      </div>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>About {restaurant.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{restaurant.description}</p>
                <div className="flex flex-wrap gap-2">
                  {restaurant.occasions.map((occasion) => (
                    <Badge key={occasion} variant="secondary">{occasion}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="Starters" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    {Object.keys(restaurant.menu).map((category) => (
                      <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                    ))}
                  </TabsList>
                  {Object.entries(restaurant.menu).map(([category, items]) => (
                    <TabsContent key={category} value={category} className="mt-6">
                      <div className="grid gap-4">
                        {items.map((item, index) => (
                          <div key={index} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => setSelectedImage(item.image)}
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold">{item.name}</h4>
                                <span className="font-bold text-primary">{item.price}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                              {item.tags.length > 0 && (
                                <div className="flex gap-1">
                                  {item.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {restaurant.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${restaurant.name} gallery ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Style */}
            <Card>
              <CardHeader>
                <CardTitle>How We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{restaurant.servingStyle}</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">{restaurant.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">{restaurant.openHours}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">{restaurant.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <a href={`https://${restaurant.website}`} className="text-sm text-primary hover:underline">
                    {restaurant.website}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                <Calendar className="h-4 w-4 mr-2" />
                Make Reservation
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Restaurant
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowMap(!showMap)}
              >
                <MapIcon className="h-4 w-4 mr-2" />
                {showMap ? 'Hide Map' : 'Show on Map'}
              </Button>
            </div>

            {/* Map */}
            {showMap && (
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <Map
                    latitude={restaurant.coordinates.latitude}
                    longitude={restaurant.coordinates.longitude}
                    zoom={15}
                    markers={[
                      {
                        latitude: restaurant.coordinates.latitude,
                        longitude: restaurant.coordinates.longitude,
                        title: restaurant.name,
                        description: restaurant.location
                      }
                    ]}
                    className="w-full h-64"
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-white/80"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img 
              src={selectedImage} 
              alt="Restaurant gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetail;