import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  Camera, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Star,
  MapPin,
  Clock
} from "lucide-react";

const ForBusiness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Grow Your Restaurant with
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              DiscoverEat
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with diners looking for the perfect dining experience for their special occasions. 
            Showcase your restaurant's unique atmosphere and build lasting customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-lg px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose DiscoverEat?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of restaurants that trust DiscoverEat to showcase their unique dining experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Reach More Diners",
                description: "Connect with customers searching for restaurants by occasion and atmosphere"
              },
              {
                icon: Camera,
                title: "Showcase Your Space",
                description: "Upload photos and videos that highlight your restaurant's unique ambiance"
              },
              {
                icon: BarChart3,
                title: "Track Performance",
                description: "Get insights on views, engagement, and customer interest in your restaurant"
              },
              {
                icon: TrendingUp,
                title: "Increase Bookings",
                description: "Drive more reservations with occasion-based marketing and visibility"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Getting Started is Simple
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From registration to your first customer connection - we make it easy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Create Your Profile",
                description: "Sign up and add your restaurant details, photos, and occasion tags"
              },
              {
                step: "2",
                title: "Upload Media",
                description: "Showcase your space with high-quality photos and videos"
              },
              {
                step: "3",
                title: "Get Discovered",
                description: "Start appearing in searches and connecting with diners"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login/Signup Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join DiscoverEat Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Get started with your restaurant profile or log in to manage your existing account
              </p>
            </div>

            <Tabs defaultValue="signup" className="max-w-2xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="login">Log In</TabsTrigger>
              </TabsList>

              <TabsContent value="signup" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Your Restaurant Account</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="restaurantName">Restaurant Name</Label>
                        <Input id="restaurantName" placeholder="Your Restaurant Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ownerName">Owner/Manager Name</Label>
                        <Input id="ownerName" placeholder="Your Full Name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="restaurant@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Restaurant Address</Label>
                      <Textarea id="address" placeholder="Full restaurant address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Create a strong password" />
                    </div>
                    <Button className="w-full bg-gradient-primary">
                      Create Restaurant Account
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="login" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Log In to Your Account</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="loginEmail">Email Address</Label>
                      <Input id="loginEmail" type="email" placeholder="restaurant@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loginPassword">Password</Label>
                      <Input id="loginPassword" type="password" placeholder="Your password" />
                    </div>
                    <Button className="w-full bg-gradient-primary">
                      Log In
                    </Button>
                    <div className="text-center">
                      <Button variant="link" className="text-muted-foreground">
                        Forgot your password?
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Analytics Preview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Track Your Restaurant's Performance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get valuable insights to help grow your business and understand your customers better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2,847</div>
                <div className="text-muted-foreground">Profile Views</div>
                <div className="text-green-600 text-sm mt-1">+12% this month</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                <div className="text-muted-foreground">Average Rating</div>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">156</div>
                <div className="text-muted-foreground">Favorites Added</div>
                <div className="text-green-600 text-sm mt-1">+8% this month</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBusiness;