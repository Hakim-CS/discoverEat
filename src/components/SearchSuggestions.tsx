import { Card } from "@/components/ui/card";
import { Search, MapPin, Utensils, Calendar } from "lucide-react";

interface Suggestion {
  type: string;
  value: string;
  data: any;
}

interface SearchSuggestionsProps {
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
  isVisible: boolean;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'restaurant':
      return <Search className="h-4 w-4" />;
    case 'location':
      return <MapPin className="h-4 w-4" />;
    case 'cuisine':
      return <Utensils className="h-4 w-4" />;
    case 'occasion':
      return <Calendar className="h-4 w-4" />;
    default:
      return <Search className="h-4 w-4" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'restaurant':
      return 'Restaurant';
    case 'location':
      return 'Location';
    case 'cuisine':
      return 'Cuisine';
    case 'occasion':
      return 'Occasion';
    default:
      return '';
  }
};

export const SearchSuggestions = ({ suggestions, onSuggestionClick, isVisible }: SearchSuggestionsProps) => {
  if (!isVisible || suggestions.length === 0) return null;

  return (
    <Card className="absolute top-full left-0 right-0 mt-2 bg-background border shadow-lg z-50 max-h-80 overflow-y-auto">
      <div className="p-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={`${suggestion.type}-${suggestion.value}-${index}`}
            className="w-full flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors text-left"
            onClick={() => onSuggestionClick(suggestion)}
          >
            <div className="text-muted-foreground">
              {getIcon(suggestion.type)}
            </div>
            <div className="flex-1">
              <div className="font-medium">{suggestion.value}</div>
              <div className="text-sm text-muted-foreground">{getTypeLabel(suggestion.type)}</div>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
};