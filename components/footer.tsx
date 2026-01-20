import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-accent" />
            </div>
            <span className="font-bold text-foreground">SecuraMem</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Custom Software Development · Jamaica
            </p>
            <a 
              href="mailto:securamem@gmail.com" 
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              securamem@gmail.com
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SecuraMem. Bridging Jamaica&apos;s Technology Gap.
          </p>
        </div>
      </div>
    </footer>
  );
}
