import { cn } from "@/lib/utils";

interface FloatingElementProps {
  className?: string;
  children?: React.ReactNode;
  delay?: string;
}

export function FloatingElement({ className, children, delay = "0s" }: FloatingElementProps) {
  return (
    <div 
      className={cn("animate-float", className)}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

export function FloatingDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '-1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '-0.5s' }}></div>
    </div>
  );
}

export function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
    </div>
  );
}