import React from 'react';
import { Sparkles, LineChart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <LineChart className="w-10 h-10 text-blue-400" />
            <h1 className="text-4xl font-bold">Marketly</h1>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            Transform Market Intelligence into
            <span className="text-blue-400 block mt-2">Winning Customer Offers</span>
          </h2>
          
          <p className="text-xl mb-12 text-gray-200 max-w-2xl mx-auto">
            Leverage data-driven insights and industry expertise to create compelling offers 
            that resonate with your target audience and drive measurable results.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Creating Offers
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}