import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Restaurant discovery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Discover Perfect
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Dining Experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find the ideal restaurant for every occasion - romantic dates, family gatherings, 
              business meetings, or nights out with friends.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-warm max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="What type of dining experience?" 
                    className="pl-10 h-12 border-2 focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Location" 
                    className="pl-10 h-12 border-2 focus:border-primary"
                  />
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                Discover Restaurants
              </Button>
            </div>
          </div>

          {/* Occasion Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {["Date Night", "Family Dinner", "Business Meeting", "Friends Hangout", "Special Celebration"].map((occasion) => (
              <Button 
                key={occasion}
                variant="outline" 
                className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                {occasion}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;