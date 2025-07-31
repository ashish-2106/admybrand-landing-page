"use client";
import { useState } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @keyframes glow-hover {
            0% {
              box-shadow: 0 0 20px hsl(217 91% 60% / 0.3);
              transform: translateY(0);
            }
            100% {
              box-shadow: 0 0 40px hsl(217 91% 60% / 0.6);
              transform: translateY(-4px);
            }
          }
        `}
      </style>
      <nav
        className="fixed top-0 w-full z-50 border-b border-gray-800/20"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div
                className="p-2 rounded-xl text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(200 98% 60%))',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.animation = 'glow-hover 0.3s ease forwards';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animation = '';
                }}
              >
                <Sparkles className="w-6 h-6" />
              </div>
              <span
                className="text-xl font-bold bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(200 98% 60%) 50%, hsl(240 91% 60%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                ADmyBRAND AI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Sign In
              </button>
              <div
                className=" inline-flex p-[2px] rounded-full text-white hover-glow"
                style={{
                  background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(200 98% 60%))'
                }}
              >
                <GradientButton size="sm" className="cursor-pointer rounded-full bg-transparent hover:bg-transparent w-full h-full">
                  Start Free Trial
                </GradientButton>
              </div>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-800/20">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-medium px-4 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-800/20">
                  <button className="text-left text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                    Sign In
                  </button>
                  <GradientButton size="sm" className="w-full">
                    Start Free Trial
                  </GradientButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}