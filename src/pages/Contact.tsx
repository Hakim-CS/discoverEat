import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We'd love to hear from you! Whether you're a diner with feedback, a restaurant owner interested 
            in joining, or you just want to say hello - we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What's this about?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="restaurant">Restaurant Partnership</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary text-lg">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hello@discovereat.com</p>
                      <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground text-sm">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">123 Foodie Street</p>
                      <p className="text-muted-foreground">Culinary District, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 6pm EST</p>
                      <p className="text-muted-foreground">Weekend: 10am - 4pm EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Need Quick Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    For immediate assistance, check out our FAQ section or reach out through these channels:
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Live Chat (9am-6pm EST)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      support@discovereat.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Before reaching out, you might find your answer in our frequently asked questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How do I list my restaurant?",
                answer: "Visit our For Business page and sign up for a free account to get started."
              },
              {
                question: "Is DiscoverEat free to use?",
                answer: "Yes! DiscoverEat is completely free for diners. Restaurants have free and premium options."
              },
              {
                question: "How do you verify restaurant information?",
                answer: "We work directly with restaurant owners to ensure all information is accurate and up-to-date."
              },
              {
                question: "Can I make reservations through DiscoverEat?",
                answer: "DiscoverEat focuses on discovery. Reservations are handled directly with the restaurant."
              },
              {
                question: "How do I update my restaurant profile?",
                answer: "Log into your business account to update photos, information, and occasion tags anytime."
              },
              {
                question: "Do you offer customer support?",
                answer: "Yes! We provide support through email, phone, and live chat during business hours."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;