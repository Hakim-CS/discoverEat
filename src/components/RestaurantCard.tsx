import { Heart, Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  cuisine: string;
  priceRange: string;
  location: string;
  openHours: string;
  occasions: string[];
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
}

const RestaurantCard = ({
  id,
  name,
  image,
  rating,
  reviewCount,
  cuisine,
  priceRange,
  location,
  openHours,
  occasions,
  isFavorite = false,
  onFavoriteToggle
}: RestaurantCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-card" />
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 rounded-full backdrop-blur-sm transition-colors ${
            isFavorite 
              ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' 
              : 'bg-background/20 text-white hover:bg-background/30'
          }`}
          onClick={() => onFavoriteToggle?.(id)}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>

        {/* Occasion Badges */}
        <div className="absolute bottom-3 left-3">
          <div className="flex flex-wrap gap-1">
            {occasions.slice(0, 2).map((occasion) => (
              <Badge 
                key={occasion}
                variant="secondary" 
                className="text-xs bg-background/80 backdrop-blur-sm"
              >
                {occasion}
              </Badge>
            ))}
            {occasions.length > 2 && (
              <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                +{occasions.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-muted-foreground">{cuisine}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground font-medium">{priceRange}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">{rating}</span>
          </div>
          <span className="text-muted-foreground">({reviewCount} reviews)</span>
        </div>

        {/* Location & Hours */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{openHours}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default RestaurantCard;