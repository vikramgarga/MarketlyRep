import React from 'react';
import { Lightbulb, TrendingUp } from 'lucide-react';
import { getIndustryRecommendations, getInspirationalCompanies } from '../../services/aiRecommendations';

interface IndustryInsightsProps {
  selectedIndustry: string;
  painPoints: string[];
}

export function IndustryInsights({ selectedIndustry, painPoints }: IndustryInsightsProps) {
  if (!selectedIndustry || painPoints.length === 0) return null;

  const recommendations = getIndustryRecommendations(selectedIndustry, painPoints);
  const companies = getInspirationalCompanies(recommendations);

  return (
    <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold flex items-center mb-4">
        <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
        AI-Powered Industry Insights
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3 flex items-center">
            <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
            Cross-Industry Innovation Opportunities
          </h4>
          
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-medium">{rec.industry}</h5>
                    <p className="text-sm text-gray-600 mt-1">{rec.reason}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">
                    {Math.round(rec.relevanceScore)}% match
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {companies.length > 0 && (
          <div>
            <h4 className="font-medium mb-3">Companies to Learn From:</h4>
            <div className="flex flex-wrap gap-2">
              {companies.map((company, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}