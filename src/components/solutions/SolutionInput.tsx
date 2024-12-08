import React, { useState } from 'react';
import { Building2, Users, Target, Sparkles } from 'lucide-react';
import { OfferDocument } from './OfferDocument';

interface SolutionInputProps {
  solutionType: string;
}

export function SolutionInput({ solutionType }: SolutionInputProps) {
  const [formData, setFormData] = useState({
    industry: '',
    customerType: '',
    painPoints: '',
    goals: ''
  });
  const [showOffer, setShowOffer] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOffer(true);
  };

  // Sample generated offer (in real app, this would come from your AI/backend)
  const generatedOffer = {
    title: `Strategic ${solutionType} Solution`,
    industry: formData.industry,
    customerType: formData.customerType,
    painPoints: formData.painPoints.split('\n').filter(p => p.trim()),
    solution: {
      description: "AI-powered solution that combines industry best practices with innovative approaches from parallel industries.",
      benefits: [
        "Immediate cost reduction through optimized processes",
        "Enhanced customer satisfaction via personalized experiences",
        "Improved operational efficiency with automated workflows"
      ],
      implementation: [
        "Initial assessment and customization",
        "Phased rollout with pilot program",
        "Full deployment with continuous monitoring"
      ]
    },
    impact: {
      metrics: [
        "30% reduction in operational costs",
        "25% increase in customer satisfaction",
        "40% improvement in process efficiency"
      ],
      timeline: "3-6 months for full implementation"
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl p-8 shadow-md">
        <h3 className="text-xl font-bold mb-6">Create Your {solutionType} Solution</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Industry
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Healthcare, Technology"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Customer
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={formData.customerType}
                  onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Enterprise businesses"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Customer Pain Points
            </label>
            <div className="relative">
              <Target className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                value={formData.painPoints}
                onChange={(e) => setFormData({ ...formData, painPoints: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                placeholder="List the challenges your customers face (one per line)..."
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Desired Outcomes
            </label>
            <div className="relative">
              <Sparkles className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                placeholder="What results do you want to achieve?"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Generate Solution Ideas
            <Sparkles className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>

      {showOffer && (
        <OfferDocument 
          offer={generatedOffer}
          onClose={() => setShowOffer(false)}
        />
      )}
    </>
  );
}