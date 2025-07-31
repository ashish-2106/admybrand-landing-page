import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "AI Content Generation (1,000 pieces/month)",
      "Basic Analytics Dashboard",
      "Email Campaign Automation",
      "Social Media Scheduling",
      "24/7 Customer Support",
      "Basic Brand Monitoring"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "149",
    period: "month",
    description: "Ideal for growing businesses and agencies",
    features: [
      "AI Content Generation (10,000 pieces/month)",
      "Advanced Predictive Analytics",
      "Multi-Channel Campaign Management",
      "Customer Journey Mapping",
      "A/B Testing & Optimization",
      "Advanced Brand Protection",
      "API Access",
      "Priority Support"
    ],
    popular: true,
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    price: "449",
    period: "month",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited AI Content Generation",
      "Custom AI Model Training",
      "Enterprise Analytics Suite",
      "White-label Solutions",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Advanced Security & Compliance",
      "24/7 Premium Support"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export function Pricing() {
  return (
    <>
      <style>
        {`
          @keyframes pricing-glow {
            0% {
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
              transform: translateY(0) scale(1);
            }
            100% {
              box-shadow: 0 0 60px hsl(217 91% 60% / 0.3), 0 8px 32px rgba(0, 0, 0, 0.8);
              transform: translateY(-6px) scale(1.03);
            }
          }
          .pricing-card {
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          .pricing-card:hover {
            animation: pricing-glow 0.3s ease forwards;
          }
          .popular-glow {
            box-shadow: 0 0 40px hsl(217 91% 60% / 0.4), 0 8px 32px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
      <section className="py-32 relative overflow-hidden bg-gray-950">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-1/3 left-1/6 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'hsl(217 91% 60% / 0.2)' }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/6 w-80 h-80 rounded-full blur-3xl"
            style={{ background: 'hsl(200 98% 60% / 0.2)' }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">
                Simple, Transparent
                <span
                  className="block bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(200 98% 60%) 50%, hsl(240 91% 60%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include a 14-day free trial
                with no credit card required.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`pricing-card relative p-8 rounded-2xl ${plan.popular ? 'popular-glow ring-2 ring-blue-500' : ''}`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: plan.popular ?
                      '0 0 40px hsl(217 91% 60% / 0.4), 0 8px 32px rgba(0, 0, 0, 0.5)' :
                      '0 8px 32px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div
                        className="text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center"
                        style={{
                          background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(200 98% 60%))'
                        }}
                      >
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold text-cyan-400">${plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <GradientButton
                    variant={plan.popular ? "primary" : "outline"}
                    className={`w-full text-white rounded-full cursor-pointer ${plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                        : 'border border-white/20 hover:text-white hover:bg-transparent hover:border-white/40'
                      }`}
                    size="lg"
                  >
                    {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                    {plan.cta}
                  </GradientButton>


                </div>
              ))}
            </div>

            {/* Enterprise CTA */}
            <div className="text-center mt-16">
              <div
                className="inline-block p-8 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">Need a custom solution?</h3>
                <p className="text-gray-400 mb-4">
                  Let's discuss how we can tailor ADmyBRAND AI Suite to your specific needs.
                </p>
                <div className="rounded-full text-white  " style={{
                  // background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(200 98% 60%))'
                }}>
                  <GradientButton variant="outline" className="text-white rounded-full cursor-pointer">
                    Schedule a Call
                  </GradientButton>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}