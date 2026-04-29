# DiscoverEat - Restaurant Discovery Application

A modern, responsive web application for discovering and exploring restaurants.

## Getting Started

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone https://github.com/Hakim-CS/discoverEat

# Step 2: Navigate to the project directory
cd discoverEat

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will open at `http://localhost:8080`

## Development

To build for production:

```sh
npm run build
```

To preview the production build:

```sh
npm run preview
```

To lint the code:

```sh
npm run lint
```

## Technologies

This project is built with:

- **Vite** - Fast build tool and development server
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **shadcn-ui** - High-quality React components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Mapbox GL** - Interactive maps
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching
- **Sonner** - Toast notifications

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── assets/           # Static assets
```

## Contributing

When making changes to the codebase, please ensure:

1. Code is properly typed with TypeScript
2. Components follow the shadcn-ui patterns
3. Styles use Tailwind CSS classes
4. Code passes ESLint checks: `npm run lint`
