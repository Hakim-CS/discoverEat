import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Navigation, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocationSearch } from "./LocationSearch";
import { SearchSuggestions } from "./SearchSuggestions";
import { useRestaurantSearch } from "@/hooks/useRestaurantSearch";

interface SearchBarProps {
  variant?: "hero" | "navbar";
  onSearch?: (query: string, location: string) => void;
  onResults?: (results: any[]) => void;
}

const SearchBar = ({ variant = "hero", onSearch, onResults }: SearchBarProps) => {
  const {
    searchQuery,
    setSearchQuery,
    locationQuery,
    setLocationQuery,
    results,
    suggestions,
    isSearching,
    performSearch,
    searchByLocation
  } = useRestaurantSearch();
  
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showLocationSearch, setShowLocationSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (results.length > 0) {
      onResults?.(results);
    }
  }, [results, onResults]);

  const handleSearch = () => {
    performSearch();
    onSearch?.(searchQuery, locationQuery);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    if (suggestion.type === 'restaurant') {
      setSearchQuery(suggestion.value);
    } else if (suggestion.type === 'location') {
      setLocationQuery(suggestion.value);
    } else {
      setSearchQuery(suggestion.value);
    }
    setShowSuggestions(false);
    performSearch(suggestion.value, locationQuery);
  };

  const handleLocationSearch = () => {
    searchByLocation();
    setShowLocationSearch(false);
  };

  if (variant === "navbar") {
    return (
      <div ref={searchRef} className="relative max-w-md">
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search restaurants..." 
              className="pl-10 pr-4 h-9"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onKeyPress={handleKeyPress}
              onFocus={() => setShowSuggestions(true)}
            />
            <SearchSuggestions
              suggestions={suggestions}
              onSuggestionClick={handleSuggestionClick}
              isVisible={showSuggestions}
            />
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="h-9 px-3"
            onClick={handleLocationSearch}
            disabled={isSearching}
          >
            {isSearching ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Navigation className="h-4 w-4" />
            )}
          </Button>
        </div>
        {showLocationSearch && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg p-4 z-50">
            <LocationSearch />
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={searchRef} className="space-y-6">
      <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-warm max-w-2xl mx-auto">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="What type of dining experience?" 
                className="pl-10 h-12 border-2 focus:border-primary"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onKeyPress={handleKeyPress}
                onFocus={() => setShowSuggestions(true)}
              />
              <SearchSuggestions
                suggestions={suggestions}
                onSuggestionClick={handleSuggestionClick}
                isVisible={showSuggestions}
              />
            </div>
            <div className="relative flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Location" 
                  className="pl-10 h-12 border-2 focus:border-primary"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-4"
                onClick={handleLocationSearch}
                disabled={isSearching}
              >
                {isSearching ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Navigation className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
          <Button 
            size="lg" 
            className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity text-lg font-semibold"
            onClick={handleSearch}
            disabled={isSearching}
          >
            {isSearching ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Searching...
              </div>
            ) : (
              "Discover Restaurants"
            )}
          </Button>
        </div>
      </div>
      
      {showLocationSearch && (
        <div className="max-w-4xl mx-auto">
          <LocationSearch />
        </div>
      )}
    </div>
  );
};

export default SearchBar;