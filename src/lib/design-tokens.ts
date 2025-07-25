/**
 * Design Tokens - Centralized color and theme management
 * Replaces hardcoded color values with semantic tokens
 */

export const designTokens = {
  colors: {
    // State colors with semantic meaning
    danger: {
      50: 'rgb(254 242 242)', // bg-red-50
      100: 'rgb(254 226 226)', // bg-red-100
      200: 'rgb(252 165 165)', // bg-red-200
      500: 'rgb(239 68 68)', // text-red-500 / bg-red-500
      600: 'rgb(220 38 38)', // hover:text-red-600
      900: 'rgb(127 29 29)', // text-red-900
    },
    // Favorite/love semantic colors
    favorite: {
      background: 'rgb(239 68 68 / 0.2)', // bg-red-500/20
      text: 'rgb(239 68 68)', // text-red-500
      hoverBackground: 'rgb(239 68 68 / 0.3)', // hover:bg-red-500/30
      hoverText: 'rgb(220 38 38)', // hover:text-red-600
    },
    // Occasion colors for better semantic meaning
    occasion: {
      dateNight: 'rgb(239 68 68)', // text-red-500
      family: 'rgb(59 130 246)', // text-blue-500
      business: 'hsl(var(--secondary))', // text-secondary
      friends: 'hsl(var(--accent))', // text-accent
      special: 'hsl(var(--primary))', // text-primary
    }
  },
  // Accessibility patterns for colorblind users
  patterns: {
    favorite: '♥',
    unfavorite: '♡',
    dateNight: '💕',
    family: '👨‍👩‍👧‍👦',
    business: '💼',
    friends: '🎉',
    special: '⭐'
  },
  // ARIA labels for better accessibility
  ariaLabels: {
    favoriteButton: 'Add to favorites',
    unfavoriteButton: 'Remove from favorites',
    dateNightOccasion: 'Suitable for romantic dates',
    familyOccasion: 'Family-friendly dining',
    businessOccasion: 'Professional atmosphere',
    friendsOccasion: 'Casual dining with friends',
    specialOccasion: 'Special event dining'
  }
} as const;

/**
 * Type-safe color utilities
 */
export type ColorToken = keyof typeof designTokens.colors.danger | 
                        keyof typeof designTokens.colors.favorite |
                        keyof typeof designTokens.colors.occasion;

/**
 * Get color value with fallback
 */
export function getColorToken(path: string, fallback = 'hsl(var(--foreground))'): string {
  try {
    const parts = path.split('.');
    let value: any = designTokens.colors;
    
    for (const part of parts) {
      value = value[part];
      if (!value) return fallback;
    }
    
    return typeof value === 'string' ? value : fallback;
  } catch {
    return fallback;
  }
}

/**
 * CSS custom properties for theming
 */
export const cssCustomProperties = `
  :root {
    --color-danger-50: 254 242 242;
    --color-danger-500: 239 68 68;
    --color-danger-600: 220 38 38;
    
    --color-favorite-bg: rgb(239 68 68 / 0.2);
    --color-favorite-text: rgb(239 68 68);
    --color-favorite-hover-bg: rgb(239 68 68 / 0.3);
    --color-favorite-hover-text: rgb(220 38 38);
  }
  
  /* Dark theme adjustments */
  @media (prefers-color-scheme: dark) {
    :root {
      --color-favorite-bg: rgb(185 28 28 / 0.3);
      --color-favorite-text: rgb(248 113 113);
      --color-favorite-hover-bg: rgb(185 28 28 / 0.4);
      --color-favorite-hover-text: rgb(252 165 165);
    }
  }
  
  /* High contrast mode for accessibility */
  @media (prefers-contrast: high) {
    :root {
      --color-favorite-text: rgb(220 38 38);
      --color-favorite-hover-text: rgb(127 29 29);
    }
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .favorite-button {
      transition: none !important;
    }
  }
`;