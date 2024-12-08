import React from 'react';
import { Target, Sparkles, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Define Your Market',
    description: 'Select your industry and identify customer pain points',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Get Recommendations',
    description: 'Receive AI-powered offer suggestions based on market data',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Launch Quickly',
    description: 'Deploy your optimized offer in minutes, not days',
  },
];

export function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Three Steps to Better Customer Offers
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="text-blue-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}