import { Heart, Users, Briefcase, PartyPopper, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { designTokens } from "@/lib/design-tokens";

const occasions = [
  { 
    id: "date", 
    label: "Date Night", 
    icon: Heart, 
    description: "Romantic and intimate",
    color: `text-[${designTokens.colors.occasion.dateNight}]`,
    pattern: designTokens.patterns.dateNight,
    ariaLabel: designTokens.ariaLabels.dateNightOccasion
  },
  { 
    id: "family", 
    label: "Family", 
    icon: Users, 
    description: "Family-friendly dining",
    color: `text-[${designTokens.colors.occasion.family}]`,
    pattern: designTokens.patterns.family,
    ariaLabel: designTokens.ariaLabels.familyOccasion
  },
  { 
    id: "business", 
    label: "Business", 
    icon: Briefcase, 
    description: "Professional atmosphere",
    color: "text-secondary",
    pattern: designTokens.patterns.business,
    ariaLabel: designTokens.ariaLabels.businessOccasion
  },
  { 
    id: "friends", 
    label: "Friends", 
    icon: PartyPopper, 
    description: "Casual and fun",
    color: "text-accent",
    pattern: designTokens.patterns.friends,
    ariaLabel: designTokens.ariaLabels.friendsOccasion
  },
  { 
    id: "special", 
    label: "Special Events", 
    icon: Star, 
    description: "Memorable celebrations",
    color: "text-primary",
    pattern: designTokens.patterns.special,
    ariaLabel: designTokens.ariaLabels.specialOccasion
  }
];

interface OccasionFilterProps {
  selectedOccasion?: string;
  onOccasionChange?: (occasion: string) => void;
}

const OccasionFilter = ({ selectedOccasion, onOccasionChange }: OccasionFilterProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Restaurants by Occasion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every moment deserves the perfect setting. Choose your occasion and discover 
            restaurants that match the mood and atmosphere you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {occasions.map((occasion) => {
            const Icon = occasion.icon;
            const isSelected = selectedOccasion === occasion.id;
            
            return (
              <Button
                key={occasion.id}
                variant="ghost"
                onClick={() => onOccasionChange?.(occasion.id)}
                className={`
                  h-auto p-6 flex flex-col items-center space-y-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105
                  ${isSelected 
                    ? 'border-primary bg-primary/10 shadow-warm' 
                    : 'border-border hover:border-primary/50 hover:bg-card shadow-card'
                  }
                `}
                aria-label={occasion.ariaLabel}
                aria-pressed={isSelected}
                role="button"
              >
                <div className={`p-4 rounded-full ${isSelected ? 'bg-primary/20' : 'bg-muted'} transition-colors`}>
                  <Icon className={`h-8 w-8 ${isSelected ? 'text-primary' : occasion.color}`} aria-hidden="true" />
                  {/* Accessibility enhancement: emoji indicator */}
                  <span className="sr-only" aria-label={`${occasion.label} - ${occasion.pattern}`}>
                    {occasion.pattern}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className={`font-semibold text-lg ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                    {occasion.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {occasion.description}
                  </p>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OccasionFilter;