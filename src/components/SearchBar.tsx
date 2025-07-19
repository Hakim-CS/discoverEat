import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  variant?: "hero" | "navbar";
  onSearch?: (query: string, location: string) => void;
}

const SearchBar = ({ variant = "hero", onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch?.(query, location);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (variant === "navbar") {
    return (
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search restaurants..." 
          className="pl-10 h-9"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    );
  }

  return (
    <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-warm max-w-2xl mx-auto">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="What type of dining experience?" 
              className="pl-10 h-12 border-2 focus:border-primary"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Location" 
              className="pl-10 h-12 border-2 focus:border-primary"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
        <Button 
          size="lg" 
          className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity text-lg font-semibold"
          onClick={handleSearch}
        >
          Discover Restaurants
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;