import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const industries = ['Technology', 'Retail', 'Healthcare', 'Finance', 'Education'];

export function OfferCreator() {
  const [selectedIndustry, setSelectedIndustry] = useState('');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Create Your Perfect Offer
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Your Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Choose an industry...</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe Your Customer's Pain Points
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="What challenges do your customers face?"
                />
              </div>
              <div className="flex justify-center">
                <button className="flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Offer Ideas
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}