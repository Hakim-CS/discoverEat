# DiscoverEat - Restaurant Discovery Platform

A modern, fully-featured web application for discovering restaurants based on occasion and preferences. DiscoverEat helps diners find the perfect restaurant for romantic dates, family gatherings, business meetings, celebrations, and nights out with friends.

## About DiscoverEat

DiscoverEat is an occasion-based restaurant discovery platform that connects diners with restaurants tailored to their specific dining needs. Instead of generic location-based searches, DiscoverEat focuses on matching diners with restaurants that perfectly suit their desired dining experience.

### Key Features

- **Occasion-Based Discovery** - Search restaurants by occasion type (Date Night, Family Dinner, Business Meeting, Friends Hangout, Special Celebration)
- **Location-Based Search** - Find restaurants in your preferred location with Mapbox integration
- **Interactive Maps** - Visualize restaurant locations and explore neighborhoods
- **Featured Restaurants** - Discover trending and recommended restaurants
- **Detailed Restaurant Profiles** - View comprehensive information, ratings, photos, and atmosphere details
- **User Favorites** - Save and manage your favorite restaurants
- **User Authentication** - Secure sign-in and registration system
- **User Profiles** - Customize your dining preferences and viewing history
- **Responsive Design** - Seamless experience across all devices
- **Business Portal** - Restaurant owners can manage profiles and track performance

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- [Install Node.js with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation & Setup

```sh
# Step 1: Clone the repository
git clone https://github.com/Hakim-CS/discoverEat

# Step 2: Navigate to the project directory
cd discoverEat

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Development Commands

```sh
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview the production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## Core Technologies

This project is built with modern, industry-standard technologies:

- **Vite** - Lightning-fast build tool and development server with HMR
- **React 18** - Modern UI library with hooks and concurrent features
- **TypeScript** - Statically typed JavaScript for safer, more maintainable code
- **shadcn/ui** - High-quality, accessible React components built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router v6** - Client-side routing for seamless page navigation
- **Mapbox GL** - Interactive maps for restaurant location visualization
- **React Hook Form** - Efficient form state management with minimal re-renders
- **Zod** - TypeScript-first schema validation for data integrity
- **TanStack Query** - Powerful data fetching, caching, and synchronization library
- **Sonner** - Beautiful, accessible toast notifications
- **Radix UI Primitives** - Unstyled, accessible component library (foundation for shadcn/ui)
- **Embla Carousel** - Lightweight carousel component for featured restaurant showcases
- **Lucide React** - Comprehensive icon library
- **class-variance-authority** - Type-safe CSS component styling

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── Navigation.tsx    # Main navigation bar
│   ├── HeroSection.tsx   # Landing page hero with search
│   ├── SearchBar.tsx     # Restaurant search functionality
│   ├── SearchResults.tsx # Display search results
│   ├── FeaturedRestaurants.tsx  # Featured restaurant carousel
│   ├── RestaurantCard.tsx       # Individual restaurant display
│   ├── OccasionFilter.tsx       # Filter by occasion type
│   ├── LocationSearch.tsx       # Location-based search
│   ├── Map.tsx                  # Interactive map component
│   └── MapboxTokenInput.tsx     # Mapbox configuration
├── pages/               # Page-level components (route handlers)
│   ├── Index.tsx        # Home/landing page
│   ├── Discover.tsx     # Restaurant discovery page
│   ├── RestaurantDetail.tsx     # Individual restaurant details
│   ├── Favorites.tsx    # Saved favorite restaurants
│   ├── About.tsx        # About DiscoverEat page
│   ├── Contact.tsx      # Contact/feedback form
│   ├── ForBusiness.tsx  # Business owner portal
│   ├── Profile.tsx      # User profile management
│   ├── SignIn.tsx       # User authentication
│   ├── Register.tsx     # New user registration
│   └── NotFound.tsx     # 404 error page
├── hooks/              # Custom React hooks
│   ├── useRestaurantSearch.tsx  # Restaurant search logic
│   ├── useGeolocation.tsx       # Geolocation functionality
│   ├── use-toast.ts             # Toast notification hook
│   └── use-mobile.tsx           # Mobile device detection
├── lib/                # Utility functions and helpers
│   └── utils.ts        # Common utility functions
├── assets/             # Static assets (images, etc.)
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
```

## Page Routes

- `/` - Home page with search and featured restaurants
- `/discover` - Browse and filter all restaurants by occasion
- `/restaurant/:id` - Detailed restaurant information
- `/favorites` - User's saved favorite restaurants
- `/profile` - User account and preferences
- `/signin` - User login
- `/register` - New user registration
- `/about` - About DiscoverEat and team information
- `/contact` - Contact form and support
- `/for-business` - Restaurant owner portal
- `*` - 404 Not Found page

## Design & Styling Conventions

When contributing to the project, please follow these conventions:

- **TypeScript** - All code should be properly typed. Avoid using `any` type
- **shadcn/ui Patterns** - Use shadcn/ui components consistently and follow their composition patterns
- **Tailwind CSS** - Use Tailwind utility classes for styling. Avoid inline styles or CSS modules
- **Component Structure** - Keep components focused and single-responsibility. Extract logic into custom hooks
- **Forms** - Use React Hook Form with Zod validation for form management
- **Code Quality** - Ensure all code passes ESLint checks with `npm run lint`

## Component Guidelines

- Keep components focused and reusable
- Use TypeScript interfaces for prop types
- Extract complex logic into custom hooks
- Use shadcn/ui components as building blocks
- Style with Tailwind CSS utility classes
- Add proper error boundaries and loading states
- Follow React best practices and modern patterns

## Available UI Components

The project includes a comprehensive library of shadcn/ui components including:
- Buttons, Cards, Inputs, Labels, Textareas
- Dialogs, Alerts, Modals, Drawers
- Tabs, Accordions, Navigation Menus
- Carousels, Forms, Selects
- Toasts, Tooltips, Badges
- And many more...

## Browser Compatibility

DiscoverEat is optimized for modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The application is optimized for performance:
- Code splitting with Vite
- Efficient data fetching with TanStack Query
- Component memoization where appropriate
- Image optimization
- Lazy loading of routes

## Contributing

When making changes to the codebase:

1. Ensure all code is properly typed with TypeScript
2. Follow shadcn/ui component patterns and conventions
3. Use Tailwind CSS classes for styling
4. Write semantic HTML and maintain accessibility standards
5. Run ESLint before committing: `npm run lint`
6. Test your changes across different screen sizes
7. Keep components reusable and maintainable

## Future Enhancements

Potential features for future development:
- Advanced filtering and sorting options
- Restaurant ratings and user reviews
- Reservation integration
- Payment processing
- Mobile app development
- Real-time availability updates
- AI-powered recommendations
- Multi-language support
