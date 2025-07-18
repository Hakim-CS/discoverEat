import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, Users, Target, Award, MapPin, Calendar } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former restaurant industry veteran with 15 years of experience helping restaurants connect with their ideal customers.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Head of Technology",
    bio: "Tech enthusiast passionate about creating seamless experiences that bring people together around great food.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Community Manager",
    bio: "Food lover and community builder dedicated to helping restaurants and diners create meaningful connections.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "Head of Partnerships",
    bio: "Restaurant relationship specialist focused on helping businesses showcase their unique dining experiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  }
];

const faqs = [
  {
    question: "What makes DiscoverEat different from other restaurant platforms?",
    answer: "DiscoverEat focuses specifically on occasion-based dining discovery. Instead of just showing nearby restaurants, we help diners find the perfect restaurant for their specific need - whether it's a romantic date, family gathering, business meeting, or celebration with friends."
  },
  {
    question: "Is DiscoverEat free for restaurants to use?",
    answer: "Yes! We offer a free tier that includes basic profile creation, photo uploads, and occasion tagging. We also offer premium features for restaurants that want enhanced visibility and analytics."
  },
  {
    question: "How do customers discover restaurants on DiscoverEat?",
    answer: "Customers can search by occasion type, location, and specific atmosphere preferences. Our algorithm matches diners with restaurants that best fit their desired dining experience, making discovery more intentional and relevant."
  },
  {
    question: "Can restaurants manage their own profiles?",
    answer: "Absolutely! Restaurant owners and managers can create and update their profiles, upload photos and videos, manage occasion tags, and track their performance through our business dashboard."
  },
  {
    question: "Do you handle food delivery or reservations?",
    answer: "No, DiscoverEat focuses purely on restaurant discovery and showcasing. We help connect diners with the right restaurants for their occasions, but reservations and dining arrangements are handled directly between customers and restaurants."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team through the Contact page, email us at support@discovereat.com, or use the live chat feature available on our platform during business hours."
  }
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
            We believe every dining occasion deserves the perfect setting. Our mission is to connect 
            diners with restaurants that match not just their taste, but their moment.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To transform how people discover restaurants by focusing on the occasion and atmosphere, 
                  not just the food. Every moment has its perfect dining companion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where every dining experience is intentional and memorable, where restaurants 
                  and diners connect based on shared moments and meaningful occasions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Authenticity, community, and the belief that great dining experiences create lasting 
                  memories. We celebrate the unique character of every restaurant and every occasion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                DiscoverEat was born from a simple frustration: why was it so hard to find the right restaurant 
                for the right moment? Whether planning a romantic date night, organizing a family celebration, 
                or arranging a business dinner, the existing platforms focused on everything except what mattered 
                most - the occasion and atmosphere.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our founder, Sarah Johnson, spent years in the restaurant industry watching amazing establishments 
                struggle to communicate their unique character and atmosphere to potential diners. Meanwhile, 
                customers were making dining decisions based on limited information, often leading to mismatched 
                expectations and disappointing experiences.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                In 2024, we launched DiscoverEat with a revolutionary approach: organize restaurants by the 
                occasions they're perfect for. Instead of just showing ratings and menus, we showcase the 
                atmosphere, ambiance, and experience that makes each restaurant special for specific moments.
              </p>
              
              <div className="bg-card rounded-lg p-6 border-l-4 border-primary">
                <p className="text-lg italic">
                  "Every restaurant has its perfect moment. Every diner has their perfect occasion. 
                  We exist to make those connections happen."
                </p>
                <p className="text-sm text-muted-foreground mt-2">- Sarah Johnson, Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind DiscoverEat, working to transform how restaurants and diners connect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">DiscoverEat by the Numbers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "2,500+", label: "Restaurants", icon: MapPin },
              { number: "50,000+", label: "Happy Diners", icon: Users },
              { number: "15,000+", label: "Perfect Matches", icon: Heart },
              { number: "95%", label: "Satisfaction Rate", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
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
            Join thousands of diners and restaurants creating meaningful connections through DiscoverEat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-lg px-8">
              Start Discovering
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              List Your Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;