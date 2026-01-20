"use client";

import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-accent" />
          </div>
          <span className="font-bold text-foreground">SecuraMem</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>
        
        <Button 
          size="sm" 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <a href="mailto:securamem@gmail.com">
            Get in Touch
          </a>
        </Button>
      </div>
    </header>
  );
}
