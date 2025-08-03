import {
  Brain,
  BarChart3,
  Target,
  Zap,
  Users,
  Shield,
  TrendingUp,
  MessageSquare
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling copy, visuals, and campaigns powered by advanced machine learning algorithms.",
    color: "text-purple-400"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends and customer behavior with 95% accuracy using our proprietary AI models.",
    color: "text-blue-400"
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Reach the right audience at the perfect moment with intelligent segmentation and timing.",
    color: "text-cyan-400"
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Streamline workflows and eliminate repetitive tasks with intelligent automation.",
    color: "text-yellow-400"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuously improve campaigns with real-time AI-driven optimization and A/B testing.",
    color: "text-green-400"
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Monitor and protect your brand reputation across all digital channels with AI vigilance.",
    color: "text-red-400"
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description: "Visualize and optimize every touchpoint in your customer's experience journey.",
    color: "text-pink-400"
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Engage customers 24/7 with intelligent chatbots that understand context and intent.",
    color: "text-indigo-400"
  }
];

export function Features() {
  return (
    <>
      <style>
        {`
          @keyframes interactive-hover {
            0% {
              transform: translateY(0) scale(1);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            }
            100% {
              transform: translateY(-6px) scale(1.03);
              box-shadow: 0 0 40px hsl(217 91% 60% / 0.4);
            }
          }
          .feature-card {
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          .feature-card:hover {
            animation: interactive-hover 0.3s ease forwards;
          }
        `}
      </style>
      <section className="py-32 relative overflow-hidden bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20" >
              <h2 className="text-5xl font-bold mb-6 text-white">
                Powerful AI Features for
                <span
                  className="block bg-clip-text text-transparent "
                  style={{
                    background: 'linear-gradient(135deg, hsl(217 100% 65%) 0%, hsl(200 100% 65%) 50%, hsl(240 100% 65%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Modern Marketing
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the comprehensive suite of AI-powered tools designed to transform
                your marketing strategy and drive unprecedented growth.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="feature-card group relative overflow-hidden p-6 rounded-2xl "
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <div className="relative z-10">
                      <div className="mb-6">
                        <div
                          className={`inline-flex p-3 rounded-2xl ${feature.color}`}
                          style={{
                            background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.1), hsl(200 98% 60% / 0.1))'
                          }}
                        >
                          <IconComponent className="w-8 h-8" />
                        </div>
                      </div>

                      <h3 className="text-xl text-white font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.05), hsl(200 98% 60% / 0.05))'
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}