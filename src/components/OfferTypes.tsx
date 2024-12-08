import React from 'react';
import { Gift, Users, Briefcase } from 'lucide-react';

const offerTypes = [
  {
    icon: <Gift className="w-6 h-6" />,
    name: 'Product Solutions',
    description: 'Create compelling product bundles, pricing strategies, and value propositions that address specific market needs.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: 'Customer Experience Solutions',
    description: 'Design immersive customer journeys and engagement programs that build lasting relationships.',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    name: 'Service Excellence Solutions',
    description: 'Develop comprehensive service packages that deliver exceptional value and support.',
  },
];

export function OfferTypes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Types of Offers
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Select the solution type that aligns with your business objectives
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {offerTypes.map((type, index) => (
            <button
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all text-left border border-gray-200 hover:border-blue-500 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
              <p className="text-gray-600">{type.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}