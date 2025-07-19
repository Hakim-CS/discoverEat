import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import SearchBar from "@/components/SearchBar";

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
          <SearchBar 
            variant="hero" 
            onSearch={(query, location) => {
              console.log('Searching for:', query, 'in', location);
              // Handle search logic here
            }} 
          />

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