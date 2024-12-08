import React from 'react';
import { Sparkles, Download, Share2 } from 'lucide-react';

interface ResultsPreviewProps {
  isVisible: boolean;
  selectedIndustry: string;
  selectedType: string;
  painPoints: string[];
}

export function ResultsPreview({
  isVisible,
  selectedIndustry,
  selectedType,
  painPoints,
}: ResultsPreviewProps) {
  if (!isVisible) return null;

  return (
    <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold flex items-center">
          <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
          Generated Offer Ideas
        </h3>
        <div className="flex gap-2">
          <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50">
            <Download className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="p-4 bg-indigo-50 rounded-lg">
          <h4 className="font-medium mb-2">Primary Offer Recommendation</h4>
          <p className="text-gray-700">
            Based on your {selectedIndustry.toLowerCase()} industry focus and selected pain points,
            we recommend a {selectedType.replace('-', ' ')} approach targeting key challenges.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Addressing Key Pain Points:</h4>
          <ul className="space-y-2">
            {painPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-6 h-6 bg-green-100 text-green-800 rounded-full text-sm flex items-center justify-center mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}