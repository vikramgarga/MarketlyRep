import React from 'react';
import { Users, Lightbulb, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Understand Your Customer",
    description: "We analyze your customer's pain points, industry challenges, and unique business needs to build a complete picture."
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    title: "Cross-Industry Inspiration",
    description: "Our AI discovers innovative solutions from unexpected industries facing similar challenges."
  },
  {
    icon: <Sparkles className="w-12 h-12 text-blue-600" />,
    title: "Create Winning Offers",
    description: "Blend customer insights with proven solutions to generate unique, compelling offers that resonate with your market."
  }
];

export function WhyMarketly() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How Marketly Works</h2>
          <p className="text-xl text-gray-600">
            Transform customer challenges into opportunities through cross-industry innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector Lines */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-blue-200" />
              )}
              
              {/* Step Content */}
              <div className="relative bg-white rounded-full p-4 mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Example Callout */}
        <div className="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-xl p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                Cross-Industry Innovation Example
              </h4>
              <p className="text-gray-600">
                When a healthcare provider struggled with appointment scheduling, 
                we found inspiration in restaurant booking systems and airline 
                yield management to create a dynamic scheduling solution that 
                increased efficiency by 40%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}