import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OccasionFilter from "@/components/OccasionFilter";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";

const Index = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OccasionFilter 
        selectedOccasion={selectedOccasion}
        onOccasionChange={setSelectedOccasion}
      />
      <FeaturedRestaurants />
    </div>
  );
};

export default Index;
