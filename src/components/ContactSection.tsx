
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section-container" id="contact">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center gap-2">
          <Mail className="text-portfolio-primary" size={28} />
          <h3 className="section-subheading m-0">Get In Touch</h3>
        </div>
        
        <h2 className="section-heading max-w-2xl">Contact Me</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Have a project in mind or want to discuss potential collaborations? Feel free to reach out using the contact form or through any of the methods below.
            </p>
            
            <div className="space-y-4 mt-8">
              <Card className="flex p-4">
                <Phone className="h-5 w-5 text-portfolio-primary mr-4" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-sm text-muted-foreground">+1 (123) 456-7890</p>
                </div>
              </Card>
              
              <Card className="flex p-4">
                <Mail className="h-5 w-5 text-portfolio-primary mr-4" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground">hello@portfolio.com</p>
                </div>
              </Card>
              
              <Card className="flex p-4">
                <MapPin className="h-5 w-5 text-portfolio-primary mr-4" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        <Card className="p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" placeholder="your@email.com" type="email" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="How can I help you?" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message" 
                placeholder="Your message here..." 
                rows={5}
              />
            </div>
            
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
