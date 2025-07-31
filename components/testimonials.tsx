import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "ADmyBRAND AI Suite transformed our marketing ROI by 340% in just 6 months. The predictive analytics are incredibly accurate and the automation saves us 20+ hours per week.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez", 
    role: "CEO",
    company: "GrowthLabs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The AI content generation is phenomenal. It understands our brand voice perfectly and creates engaging content that converts. Our engagement rates increased by 250%.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Digital Marketing Manager", 
    company: "BrandVision",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The customer journey mapping feature revealed insights we never knew existed. We optimized our funnel and saw a 180% increase in conversion rates within 3 months.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Growth Hacker",
    company: "StartupVelocity",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "As a startup, we needed powerful tools without the enterprise price tag. ADmyBRAND gave us AI capabilities that rival Fortune 500 companies at a fraction of the cost.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Head of Marketing",
    company: "InnovateNow",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face",
    content: "The real-time optimization feature continuously improves our campaigns. We've seen consistent performance gains month over month with minimal manual intervention.",
    rating: 5
  },
  {
    name: "Alex Kumar",
    role: "CMO",
    company: "FutureScale",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "The brand protection AI caught potential reputation issues before they became problems. It's like having a 24/7 brand guardian that never sleeps.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <>
      <style>
        {`
          @keyframes testimonial-hover {
            0% {
              transform: translateY(0) scale(1);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            }
            100% {
              transform: translateY(-6px) scale(1.03);
              box-shadow: 0 0 40px hsl(217 91% 60% / 0.4);
            }
          }
          .testimonial-card {
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          .testimonial-card:hover {
            animation: testimonial-hover 0.3s ease forwards;
          }
        `}
      </style>
      <section className="py-32 relative overflow-hidden bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">
                Trusted by
                <span 
                  className="block bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(200 98% 60%) 50%, hsl(240 91% 60%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Marketing Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how industry leaders are transforming their marketing with ADmyBRAND AI Suite
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card group p-8 rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <div className="relative">
                   
                    
                    {/* Rating Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    
                    {/* Content */}
                    <p className="text-gray-200 mb-6 leading-relaxed relative z-10">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                        style={{
                          border: '2px solid hsl(200 98% 60% / 0.2)'
                        }}
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10,000+", label: "Active Users" },
                { value: "250%", label: "Average ROI Increase" },
                { value: "99.9%", label: "Uptime Guarantee" },
                { value: "4.9/5", label: "Customer Rating" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}