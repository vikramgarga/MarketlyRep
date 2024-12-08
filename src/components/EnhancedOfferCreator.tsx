import React, { useState, useEffect } from 'react';
import { ArrowRight, Building2, Target, Sparkles, Network } from 'lucide-react';
import { getIndustryRecommendations } from '../services/aiRecommendations';

export function EnhancedOfferCreator() {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [formData, setFormData] = useState({
    industry: '',
    painPoints: [] as string[],
    offerType: '',
  });

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'painPoints' && value.length > 0) {
      setIsAnalyzing(true);
      // Simulate AI analysis
      setTimeout(() => setIsAnalyzing(false), 3000);
    }
  };

  const steps = [
    {
      num: 1,
      label: 'Industry',
      icon: <Building2 className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <select
            value={formData.industry}
            onChange={(e) => updateForm('industry', e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
          >
            <option value="">Select your industry...</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
            <option value="Education">Education</option>
          </select>
        </div>
      )
    },
    {
      num: 2,
      label: 'Challenges',
      icon: <Target className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <textarea
            placeholder="What are your customers' main pain points?"
            className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
            value={formData.painPoints.join('\n')}
            onChange={(e) => updateForm('painPoints', e.target.value.split('\n').filter(p => p.trim()))}
          />
          
          {isAnalyzing && (
            <div className="mt-8 relative">
              <div className="text-center mb-4">
                <Network className="w-6 h-6 text-primary-600 mx-auto animate-spin" />
                <p className="text-sm text-gray-600 mt-2">Analyzing cross-industry patterns...</p>
              </div>
              
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-100/50 rounded-full animate-blob" />
                  <div className="w-20 h-20 bg-purple-100/50 rounded-full animate-blob animation-delay-2000" />
                  <div className="w-20 h-20 bg-indigo-100/50 rounded-full animate-blob animation-delay-4000" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">
                      Discovering relevant solutions across industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isAnalyzing && formData.painPoints.length > 0 && (
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Recommended Industries for Inspiration:
              </h4>
              <div className="flex flex-wrap gap-2">
                {getIndustryRecommendations(formData.industry, formData.painPoints)
                  .map((rec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm flex items-center"
                    >
                      {rec.industry}
                      <span className="ml-2 text-xs text-primary-600">
                        {Math.round(rec.relevanceScore)}% match
                      </span>
                    </span>
                  ))}
              </div>
            </div>
          )}
        </div>
      )
    },
    {
      num: 3,
      label: 'Offer Type',
      icon: <Sparkles className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-2 gap-4">
          {['Product Demo', 'Customer Event', 'Loyalty Program', 'Service Package'].map((type) => (
            <button
              key={type}
              onClick={() => updateForm('offerType', type)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                formData.offerType === type
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Create Your Strategic Offer
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Our AI analyzes patterns across industries to help you develop innovative solutions
          </p>

          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((s) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      step >= s.num ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {s.icon}
                    </div>
                    <span className="text-sm text-gray-600 whitespace-nowrap">{s.label}</span>
                  </div>
                  {s.num < 3 && (
                    <div className={`w-16 h-1 mx-4 ${
                      step > s.num ? 'bg-primary-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {steps[step - 1].content}
            
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  onClick={() => setStep(prev => prev - 1)}
                  className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={() => setStep(prev => prev + 1)}
                  className="ml-auto px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-500 transition-colors"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={() => console.log('Generate offer:', formData)}
                  className="ml-auto flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-500 transition-colors"
                >
                  Generate Strategic Offer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}