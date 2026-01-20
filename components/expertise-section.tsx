import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "Python", category: "Language" },
  { name: "Rust", category: "Language" },
  { name: "C/C++", category: "Language" },
  { name: "Machine Learning", category: "AI/ML" },
  { name: "AI-Powered Apps", category: "AI/ML" },
  { name: "Workflow Automation", category: "AI/ML" },
];

const compliance = [
  { name: "JDPA", description: "Jamaica Data Protection Act" },
  { name: "GDPR", description: "EU Data Protection" },
  { name: "HIPAA", description: "Healthcare Compliance" },
  { name: "SOC2", description: "Security Certification" },
];

const industries = [
  "Financial Institutions",
  "Healthcare & Medical",
  "Government Organizations",
  "Insurance Industry",
  "Manufacturing",
];

export function ExpertiseSection() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Expertise */}
          <div>
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Technical Stack
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Built with Performance in Mind
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Deep expertise in systems programming and AI integration. 
              From low-level optimization to high-level automation, 
              every tool is crafted for reliability and speed.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <span className="text-foreground font-medium">{tech.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Compliance & Industries */}
          <div>
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Compliance Ready
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              For Regulated Industries
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Local-only Rust-powered tools for organizations that require 
              strict data sovereignty and regulatory compliance. 
              Your data never leaves your premises.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {compliance.map((item) => (
                <div 
                  key={item.name}
                  className="p-4 rounded-lg bg-card border border-border"
                >
                  <div className="text-lg font-bold text-accent">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Badge 
                  key={industry}
                  variant="outline"
                  className="border-border text-muted-foreground"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
