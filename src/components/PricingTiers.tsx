import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for exploring offer creation',
    features: [
      'Create one type of offer',
      'Access to 3 industry best practices',
      'Basic analytics',
      'Email support'
    ],
    cta: 'Start Free',
    highlighted: false
  },
  {
    name: 'Growth',
    price: '$49/mo',
    description: 'For growing businesses',
    features: [
      'Create any two types of offers',
      'Access to 10 industry best practices',
      'Cross-industry insights',
      'Priority support',
      'Advanced analytics'
    ],
    cta: 'Start 14-Day Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '$99/mo',
    description: 'For scaling organizations',
    features: [
      'Create all types of offers',
      'Access to all industry best practices',
      'Custom AI recommendations',
      'Dedicated success manager',
      'Advanced analytics & reporting',
      'API access'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export function PricingTiers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Choose the plan that best fits your needs
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm p-8 ${
                tier.highlighted
                  ? 'ring-2 ring-blue-600 shadow-lg scale-105'
                  : ''
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold mb-4">{tier.price}</div>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}