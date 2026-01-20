"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255_/_0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">Custom Software Development · Jamaica</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Closing Jamaica&apos;s
          <span className="block text-accent">Technology Gap</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          Enterprise-grade software built with forward-thinking architecture. 
          AI-powered tools, legacy modernization, and compliance-ready infrastructure 
          for regulated industries. You own the source code.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border text-foreground hover:bg-card px-8 bg-transparent"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Services
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Mail className="w-4 h-4" />
          <a 
            href="mailto:securamem@gmail.com" 
            className="text-sm hover:text-accent transition-colors"
          >
            securamem@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
