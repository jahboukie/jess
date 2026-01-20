import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package, Truck, Database, Bot, Wrench } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Point-of-Sale Systems",
    description: "Modern POS solutions with AI-powered analytics, inventory sync, and offline-first architecture for uninterrupted business operations.",
    tags: ["AI-Ready", "Offline-First"],
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time inventory tracking with predictive restocking, multi-location support, and seamless integration with existing systems.",
    tags: ["Predictive AI", "Multi-Location"],
  },
  {
    icon: Truck,
    title: "Logistics Management",
    description: "End-to-end logistics solutions with route optimization, real-time tracking, and automated dispatch for maximum efficiency.",
    tags: ["Route Optimization", "Real-Time"],
  },
  {
    icon: Database,
    title: "Data Normalization Tools",
    description: "Transform messy, inconsistent data into clean, structured formats ready for analysis and AI workflows.",
    tags: ["ETL Pipeline", "Data Quality"],
  },
  {
    icon: Bot,
    title: "AI Workflow Automation",
    description: "Intelligent automation that integrates with your existing tools. Minimal effort, maximum impact with easy implementation.",
    tags: ["LLM Integration", "No-Code Ready"],
  },
  {
    icon: Wrench,
    title: "Legacy Modernization",
    description: "Breathe new life into 30+ year old systems. Middleware solutions that bridge legacy infrastructure with modern capabilities.",
    tags: ["Rust-Powered", "Zero Downtime"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Enterprise Software Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every solution is built with AI-readiness in mind. Flexible architecture 
            that grows with your business and integrates seamlessly with automation workflows.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="bg-card border-border hover:border-accent/30 transition-colors group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-border text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
