import React from 'react';
import { Building2 } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  industry: string;
  description: string;
  impact: string;
}

export function SolutionCard({ title, industry, description, impact }: SolutionCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <span className="text-sm text-gray-500">{industry}</span>
        </div>
        <Building2 className="w-5 h-5 text-blue-500" />
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full inline-block">
        {impact}
      </div>
    </div>
  );
}