import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(1deg); }
            66% { transform: translateY(-5px) rotate(-1deg); }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(60px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              filter: blur(10px);
            }
            to {
              opacity: 1;
              filter: blur(0);
            }
          }
          @keyframes gradient-shift {
            0%, 100% { 
              background-position: 0% 50%;
            }
            50% { 
              background-position: 100% 50%;
            }
          }
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px hsl(217 91% 60% / 0.3);
            }
            50% {
              box-shadow: 0 0 40px hsl(217 91% 60% / 0.6);
            }
          }
        `}
      </style>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(220 13% 5%), hsl(220 13% 8%), hsl(217 91% 15%))'
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-60"
            style={{
              background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(200 98% 60%))',
              animation: 'float 3s ease-in-out infinite'
            }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-50"
            style={{
              background: 'hsl(200 98% 60%)',
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '-1s'
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl opacity-40"
            style={{
              background: 'hsl(217 91% 60% / 0.3)',
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '-2s'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div
                className="space-y-8"
                style={{
                  animation: 'slideUp 0.6s ease-out'
                }}
              >
                <div
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium text-white">AI-Powered Marketing Suite</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-white">
                  Transform Your
                  <span
                    className="block bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(200 98% 60%) 50%, hsl(240 91% 60%) 100%)',
                      backgroundSize: '200% 200%',
                      animation: 'gradient-shift 4s ease infinite',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Brand with AI
                  </span>
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                  ADmyBRAND AI Suite revolutionizes digital marketing with intelligent automation,
                  predictive analytics, and personalized campaigns that drive real results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Start Free Trial Button with Gradient Outline */}
                  <div
                    className="inline-flex p-[2px] rounded-full button-hover"
                    style={{
                      background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(200 98% 60%))'
                    }}
                  >
                    <GradientButton
                      size="lg"
                      className="cursor-pointer group text-white rounded-full bg-transparent hover:bg-transparent focus:outline-none w-full h-full"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </GradientButton>
                  </div>

                  {/* Watch Demo Outline Button */}
                  <div className="inline-flex p-[2px] rounded-full button-hover" style={{
                    background: 'linear-gradient(135deg, hsl(217 91% 20%), hsl(200 98% 20%))' // subtle border gradient
                  }}>
                    <GradientButton
                      variant="outline"
                      size="lg"
                      className=" cursor-pointer group text-white rounded-full bg-transparent hover:bg-transparent focus:outline-none w-full h-full border-none"
                    >
                      <Play className="mr-2 w-5 h-5" />
                      Watch Demo
                    </GradientButton>
                  </div>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">10k+</div>
                    <div className="text-sm text-gray-400">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">250%</div>
                    <div className="text-sm text-gray-400">ROI Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div
                className="relative"
                style={{
                  animation: 'fadeIn 0.8s ease-out 0.3s both'
                }}
              >
                <div className="relative">
                  <img
                    src="/heroImage.jpg"
                    alt="ADmyBRAND AI Suite Dashboard"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 40px hsl(217 91% 60% / 0.4)',
                      animation: 'pulse-glow 2s ease-in-out infinite'
                    }}
                  />
                  {/* Floating Elements */}
                  <div
                    className="absolute -top-4 -right-4 p-4 rounded-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 bg-cyan-400 rounded-full"
                        style={{
                          animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite'
                        }}
                      ></div>
                      <span className="text-sm font-medium text-white">AI Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}