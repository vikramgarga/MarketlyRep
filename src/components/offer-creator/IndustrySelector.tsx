import React from 'react';
import { industries } from '../../data/industries';

interface IndustrySelectorProps {
  selectedIndustry: string;
  onIndustryChange: (industry: string) => void;
}

export function IndustrySelector({ selectedIndustry, onIndustryChange }: IndustrySelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Your Industry
      </label>
      <select
        value={selectedIndustry}
        onChange={(e) => onIndustryChange(e.target.value)}
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
  );
}