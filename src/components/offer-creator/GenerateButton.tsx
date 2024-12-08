import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function GenerateButton() {
  return (
    <div className="flex justify-center">
      <button className="flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors">
        <Sparkles className="w-5 h-5 mr-2" />
        Generate Personalized Offer Ideas
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}