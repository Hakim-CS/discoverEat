import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OccasionFilter from "@/components/OccasionFilter";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import { SearchResults } from "@/components/SearchResults";

const Index = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchResults = (results: any[]) => {
    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection onSearchResults={handleSearchResults} />
      
      {hasSearched ? (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <SearchResults 
              results={searchResults}
              isSearching={false}
              searchQuery=""
              locationQuery=""
            />
          </div>
        </section>
      ) : (
        <>
          <OccasionFilter 
            selectedOccasion={selectedOccasion}
            onOccasionChange={setSelectedOccasion}
          />
          <FeaturedRestaurants />
        </>
      )}
    </div>
  );
};

export default Index;
