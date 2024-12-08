import React from 'react';
import { Lightbulb } from 'lucide-react';
import { inspirationSources } from '../../data/inspiration-sources';

interface InspirationSourcesProps {
  selectedIndustry: string;
}

export function InspirationSources({ selectedIndustry }: InspirationSourcesProps) {
  if (!selectedIndustry) return null;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Recommended Inspiration Sources
      </label>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex items-center mb-2">
          <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
          <span className="font-medium">Companies to Learn From:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {inspirationSources[selectedIndustry as keyof typeof inspirationSources]?.map(
            (company) => (
              <span
                key={company}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {company}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}