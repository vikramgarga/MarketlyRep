import React, { useState } from 'react';
import { Brain, ArrowRight, Sparkles } from 'lucide-react';
import { GetStartedPopup } from './GetStartedPopup';

export function CMOHeader() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto pt-20 pb-24 px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-8">
            <Brain className="w-12 h-12 text-blue-300" />
            <h1 className="text-5xl font-bold">Marketly</h1>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Where Customer Needs Meet
            <span className="text-blue-300 block mt-2">Compelling Offers</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Transform your understanding of customer needs into strategic offers that drive results.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 text-blue-200 text-lg">
              <Sparkles className="w-5 h-5" />
              <span>Define Needs</span>
              <ArrowRight className="w-5 h-5" />
              <span>Get Insights</span>
              <ArrowRight className="w-5 h-5" />
              <span>Create Offers</span>
            </div>
            
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
            >
              Start Creating Strategic Offers
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      <GetStartedPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </header>
  );
}