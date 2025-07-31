import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlassCard } from "@/components/ui/glass-card";

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI uses advanced natural language processing and machine learning models trained on millions of high-performing marketing campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate content that aligns with your brand and resonates with your audience."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing tools?",
    answer: "Absolutely! ADmyBRAND AI Suite offers robust API integrations with 200+ popular marketing tools including HubSpot, Salesforce, Google Analytics, Facebook Ads, LinkedIn, Mailchimp, and many more. We also provide custom integration support for enterprise clients."
  },
  {
    question: "How accurate are the predictive analytics?",
    answer: "Our predictive analytics achieve 95%+ accuracy rates across various metrics including customer behavior, campaign performance, and market trends. The AI continuously learns from your data and improves predictions over time, making them increasingly accurate for your specific business context."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Security is our top priority. We use enterprise-grade encryption (AES-256), SOC 2 Type II compliance, GDPR compliance, and maintain strict data privacy protocols. Your data is never shared with third parties and you maintain full ownership and control of your information."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 customer support across all plans, with email and chat support for Starter, priority support for Professional, and dedicated account management for Enterprise clients. We also provide comprehensive documentation, video tutorials, and regular training webinars."
  },
  {
    question: "Can I try ADmyBRAND before committing to a paid plan?",
    answer: "Yes! We offer a 14-day free trial for all plans with no credit card required. You'll have full access to all features during the trial period. Additionally, we provide a 30-day money-back guarantee if you're not completely satisfied with your purchase."
  },
  {
    question: "How quickly can I see results?",
    answer: "Most customers start seeing improvements within the first week of implementation. Significant results typically appear within 30-60 days, with an average ROI increase of 250% within the first quarter. The AI learns your patterns quickly and optimizes performance continuously."
  },
  {
    question: "Do you offer training and onboarding?",
    answer: "Yes! All plans include comprehensive onboarding with video tutorials and documentation. Professional and Enterprise plans include personalized onboarding sessions, and Enterprise clients receive dedicated training workshops and ongoing strategic consultation."
  }
];

export function FAQ() {
  return (
    <section className="py-32 relative overflow-hidden bg-gray-950 ">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-white">
          {/* Header */}
          <div className="text-center mb-20 ">
            <h2 className="text-5xl font-bold mb-6">
              Frequently Asked
              <span className="block bg-gradient-blue bg-clip-text text-cyan-400">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ADmyBRAND AI Suite
            </p>
          </div>

          {/* FAQ Accordion Container */}
          <div
            className="rounded-2xl p-8 border border-white/10 backdrop-blur-md bg-white/5"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            }}
          >
            <Accordion type="single" collapsible className="[&>*]:border-0 [&>*]:border-none">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="py-6 first:pt-0 last:pb-0 border-0 border-none"
                  style={{ border: 'none' }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>




          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <div className="space-x-4">
              <a href="#contact" className=" font-semibold text-cyan-400">
                Contact Support
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#demo" className=" font-semibold text-cyan-400">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}