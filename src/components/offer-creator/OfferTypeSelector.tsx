import React from 'react';
import { Gift, Users, Presentation, Calendar, Star, Award } from 'lucide-react';

const offerTypes = [
  {
    id: 'product',
    icon: <Gift className="w-6 h-6" />,
    name: 'Product Offers',
    description: 'Special discounts, bundles, and limited-time deals',
  },
  {
    id: 'experience',
    icon: <Users className="w-6 h-6" />,
    name: 'Customer Experience Events',
    description: 'Exclusive workshops, webinars, and VIP experiences',
  },
  {
    id: 'demo',
    icon: <Presentation className="w-6 h-6" />,
    name: 'Product Demos',
    description: 'Interactive demonstrations and guided tours',
  },
  {
    id: 'loyalty',
    icon: <Calendar className="w-6 h-6" />,
    name: 'Loyalty Programs',
    description: 'Rewards, points systems, and membership benefits',
  },
  {
    id: 'early-access',
    icon: <Star className="w-6 h-6" />,
    name: 'Early Access',
    description: 'Preview access to new features and products',
  },
  {
    id: 'service',
    icon: <Award className="w-6 h-6" />,
    name: 'Service Packages',
    description: 'Bundled services and premium support offerings',
  },
] as const;

interface OfferTypeSelectorProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export function OfferTypeSelector({ selectedType, onTypeChange }: OfferTypeSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-4">
        Select Offer Type
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {offerTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.id)}
            className={`flex items-start p-4 rounded-lg border-2 transition-all ${
              selectedType === type.id
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
          >
            <div className={`${
              selectedType === type.id ? 'text-indigo-600' : 'text-gray-400'
            } mr-3 mt-1`}>
              {type.icon}
            </div>
            <div className="text-left">
              <h3 className="font-medium mb-1">{type.name}</h3>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}