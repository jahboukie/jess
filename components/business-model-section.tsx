import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, FileKey, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Source Code Ownership",
    description: "You receive the complete source code. No vendor lock-in, full transparency, and the freedom to modify as needed.",
  },
  {
    icon: FileKey,
    title: "Service Level Agreements",
    description: "Where applicable, SLAs ensure guaranteed uptime, response times, and support for mission-critical systems.",
  },
  {
    icon: Shield,
    title: "Local-Only Deployment",
    description: "For regulated industries, deploy entirely on-premises. Your data stays within your infrastructure.",
  },
  {
    icon: Clock,
    title: "Future-Ready Architecture",
    description: "Built for AI integration from day one. When automation is ready, your systems are ready.",
  },
];

export function BusinessModelSection() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
            Business Model
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            An Unorthodox Approach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Traditional software vendors keep you dependent. We believe in empowering 
            our clients with full ownership and control over their technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title}
              className="bg-card border-border hover:border-accent/30 transition-colors"
            >
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
