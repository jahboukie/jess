import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Left side - CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                  Ready to modernize your infrastructure?
                </h2>
                <p className="text-muted-foreground mb-8 text-pretty">
                  Let&apos;s discuss how custom software can transform your 
                  business operations and close the technology gap.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit"
                  asChild
                >
                  <a href="mailto:securamem@gmail.com">
                    Start a Conversation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
              
              {/* Right side - Contact info */}
              <div className="p-8 md:p-12 bg-secondary/30 border-l border-border flex flex-col justify-center gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a 
                      href="mailto:securamem@gmail.com" 
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      securamem@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="text-foreground font-medium">Jamaica</div>
                    <div className="text-sm text-muted-foreground">Serving Caribbean & Global Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
