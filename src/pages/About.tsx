import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, Target, Award, Code, GraduationCap, Utensils, Lightbulb, Layers, MapPin, Users } from "lucide-react";

const techStack = [
  { name: "React 18", description: "Modern UI library with hooks and concurrent features" },
  { name: "TypeScript", description: "Statically typed JavaScript for safer code" },
  { name: "Vite", description: "Lightning-fast build tool with hot module replacement" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
  { name: "shadcn/ui", description: "High-quality, accessible components built on Radix UI" },
  { name: "Mapbox GL", description: "Interactive maps for restaurant location visualization" },
  { name: "React Router v6", description: "Client-side routing for seamless navigation" },
  { name: "TanStack Query", description: "Data fetching, caching, and synchronization" },
];

const faqs = [
  {
    question: "What makes DiscoverEat different from other restaurant platforms?",
    answer: "DiscoverEat focuses specifically on occasion-based dining discovery. Instead of just showing nearby restaurants, it helps diners find the perfect restaurant for their specific need — whether it's a romantic date, family gathering, business meeting, or celebration with friends."
  },
  {
    question: "Is this a fully functional application?",
    answer: "DiscoverEat is a frontend prototype developed as a university mini-project. It showcases the UI/UX design, modern frontend architecture, and the application of web design trends. Restaurant data is mock/hardcoded and there is no backend server or database."
  },
  {
    question: "How do users discover restaurants on DiscoverEat?",
    answer: "Users can search by occasion type, location, and specific atmosphere preferences. The interface matches diners with restaurants that best fit their desired dining experience, making discovery more intentional and relevant."
  },
  {
    question: "What technologies were used to build this?",
    answer: "DiscoverEat is built with React 18, TypeScript, Vite, Tailwind CSS, and shadcn/ui. It also uses Mapbox GL for interactive maps, React Router for navigation, TanStack Query for data management, and Embla Carousel for featured restaurants."
  },
  {
    question: "Can I contribute or use this project?",
    answer: "This project was developed as an academic submission for the Web Systems Development course at the University of Maribor. Feel free to explore the code on GitHub for learning purposes."
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              DiscoverEat
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            An occasion-based restaurant discovery platform, designed and developed as a university
            mini-project for the Web Systems Development course.
          </p>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Developer Card */}
              <Card className="md:col-span-1 text-center hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-28 h-28 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">HN</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Hakim Nazari</h3>
                  <p className="text-primary font-medium mb-3">Developer & Designer</p>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Computer Science Student</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>University of Maribor</span>
                  </div>
                </CardContent>
              </Card>

              {/* About the Project */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">The Project</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    DiscoverEat was born from a simple observation: existing restaurant platforms like
                    Google Maps, TripAdvisor, and Yelp are primarily location-centric. They answer
                    "what's nearby?" but fail to answer "what's right for <em>tonight</em>?"
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A person planning a romantic anniversary dinner has completely different needs from
                    someone organizing a team business lunch. Generic filters like "cuisine type" or
                    "price range" don't capture the social context, atmosphere, or vibe of a dining
                    experience. DiscoverEat reframes restaurant discovery around the <strong>purpose of the
                    visit</strong> rather than just proximity or food type.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border-l-4 border-primary">
                  <p className="text-lg italic text-foreground">
                    "Every dining occasion deserves the perfect setting. DiscoverEat connects diners
                    with restaurants that match not just their taste, but their moment."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                <p className="text-muted-foreground">
                  Existing platforms focus on location and cuisine, ignoring the social context and
                  atmosphere that truly define a dining experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                <p className="text-muted-foreground">
                  Occasion-based filtering — users select their dining purpose first (Date Night,
                  Family, Business, Friends) and are matched with curated restaurants.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">The Result</h3>
                <p className="text-muted-foreground">
                  A modern, responsive web prototype that reduces decision fatigue and creates
                  meaningful connections between diners and restaurants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Trends Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Design Trends Applied</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three modern web design trends were intentionally selected and applied throughout the project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Responsive / Mobile-First</h3>
                <p className="text-muted-foreground text-sm">
                  Built with Tailwind CSS mobile-first breakpoints. Navigation collapses to hamburger menu,
                  card grids adapt from multi-column to single-column, and touch targets are optimized for mobile.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Microinteractions</h3>
                <p className="text-muted-foreground text-sm">
                  Hover scale effects on occasion cards, animated heart toggle on favorites, bouncing scroll
                  indicator, smooth carousel transitions, and shadow elevation on card hover.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                  <span className="text-accent font-bold text-lg">Aa</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Bold Typography</h3>
                <p className="text-muted-foreground text-sm">
                  Large hero headlines with gradient text, clear heading hierarchy, and consistent font weight
                  scaling for scannable content and a premium aesthetic.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built With</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, industry-standard technologies powering the DiscoverEat experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <Card key={index} className="hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{tech.name}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{tech.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about DiscoverEat
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Discover Your Perfect Dining Experience?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore DiscoverEat and find restaurants matched to your occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-lg px-8" asChild>
              <a href="/discover">Start Discovering</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;