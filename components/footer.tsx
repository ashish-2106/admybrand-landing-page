import { GradientButton } from "@/components/ui/gradient-button";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Documentation", href: "#docs" },
    { name: "Integrations", href: "#integrations" },
    { name: "Security", href: "#security" }
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Press Kit", href: "#press" },
    { name: "Contact", href: "#contact" }
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "System Status", href: "#status" },
    { name: "Feature Requests", href: "#requests" },
    { name: "Bug Reports", href: "#bugs" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
    { name: "Compliance", href: "#compliance" }
  ]
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" }
];

export function Footer() {
  return (
    <>
      <style>
        {`
          .glass-card-footer {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
          }
          .social-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .social-hover:hover {
            background: linear-gradient(135deg, hsl(217 91% 60%), hsl(200 98% 60%));
            transform: translateY(-2px) scale(1.1);
          }
        `}
      </style>
      <footer className="relative py-32 overflow-hidden border-t border-gray-800/20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Newsletter Section */}
            <div className="mb-16">
              <div className="glass-card-footer p-12 text-center rounded-2xl">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Stay ahead of the curve
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get the latest insights on AI marketing trends, product updates, and exclusive tips
                  delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    style={{
                      background: 'hsl(220 13% 12%)',
                      color: 'white'
                    }}
                  />
                  <div
                    className="inline-flex rounded-full hover-glow"
                    style={{
                      background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(200 98% 60%))',
                      padding: '2px'
                    }}
                  >
                    <GradientButton
                      className=" cursor-pointer px-8 text-white rounded-full bg-transparent hover:bg-transparent w-full h-full"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </GradientButton>
                  </div>

                </div>
              </div>
            </div>

            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-6 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(200 98% 60%) 50%, hsl(240 91% 60%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    ADmyBRAND AI Suite
                  </h2>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    Revolutionizing digital marketing with intelligent automation,
                    predictive analytics, and AI-powered campaigns that drive real results.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                    San Francisco, CA 94105
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                    hello@admybrand.ai
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="social-hover p-2 rounded-full text-white group"
                        style={{
                          background: 'hsl(220 13% 12%)'
                        }}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Links Sections */}
              <div>
                <h4 className="font-semibold mb-6">Product</h4>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-6">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-6">Support</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-6">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 ADmyBRAND AI Suite. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-sm text-gray-400">
                  Built with ❤️ by Ashish
                </span>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                      animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite'
                    }}
                  ></div>
                  <span className="text-sm text-gray-400">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}