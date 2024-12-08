import React, { useState } from 'react';
import { X, ArrowRight, Building2, Target, Briefcase, Upload, Youtube, FileText, Link } from 'lucide-react';

interface GetStartedPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InspirationSource {
  type: 'youtube' | 'link' | 'description';
  content: string;
}

export function GetStartedPopup({ isOpen, onClose }: GetStartedPopupProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    customIndustry: '',
    inspirationSources: [] as InspirationSource[],
    painPoints: [] as string[],
    customPainPoints: '',
    successFactors: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && !formData.industry && !formData.customIndustry) {
      alert('Please select or enter an industry');
      return;
    }
    if (step < 4) {
      setStep(step + 1);
    } else {
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  const addInspirationSource = (type: 'youtube' | 'link' | 'description') => {
    const content = prompt(`Enter ${type === 'youtube' ? 'YouTube URL' : type === 'link' ? 'URL' : 'description'}:`);
    if (content) {
      setFormData({
        ...formData,
        inspirationSources: [...formData.inspirationSources, { type, content }]
      });
    }
  };

  const removeInspirationSource = (index: number) => {
    setFormData({
      ...formData,
      inspirationSources: formData.inspirationSources.filter((_, i) => i !== index)
    });
  };

  const commonIndustries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Education'
  ];

  const commonPainPoints = [
    'High Costs',
    'Complex Processes',
    'Time Constraints',
    'Quality Issues'
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 max-h-[60vh] overflow-y-auto px-2">
            <div className="sticky top-0 bg-white py-4 z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Your Industry</h3>
              <p className="text-gray-700">Choose from common industries or enter your own</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {commonIndustries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => {
                    setFormData({ 
                      ...formData, 
                      industry,
                      customIndustry: '' 
                    });
                  }}
                  className={`p-4 rounded-lg border-2 transition-all text-left flex items-center space-x-2
                    ${formData.industry === industry 
                      ? 'border-blue-600 bg-blue-50 text-blue-700' 
                      : 'border-gray-300 hover:border-blue-300 text-gray-700'}`}
                >
                  <Building2 className={`w-5 h-5 ${
                    formData.industry === industry ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  <span className="text-base font-medium">{industry}</span>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-800 mb-2">
                Or describe your industry
              </label>
              <textarea
                value={formData.customIndustry}
                onChange={(e) => {
                  setFormData({ 
                    ...formData, 
                    customIndustry: e.target.value,
                    industry: '' 
                  });
                }}
                placeholder="Tell us about your industry and its unique characteristics..."
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 max-h-[60vh] overflow-y-auto px-2">
            <div className="sticky top-0 bg-white py-4 z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Add Inspiration Sources</h3>
              <p className="text-gray-700">Share examples of great offers you've seen</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <button
                onClick={() => addInspirationSource('youtube')}
                className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <Youtube className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Add YouTube</span>
              </button>

              <button
                onClick={() => addInspirationSource('link')}
                className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <Link className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Add URL</span>
              </button>

              <button
                onClick={() => addInspirationSource('description')}
                className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <FileText className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Add Description</span>
              </button>
            </div>

            {formData.inspirationSources.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Added Sources:</h4>
                {formData.inspirationSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      {source.type === 'youtube' && <Youtube className="w-4 h-4 text-red-600 mr-2" />}
                      {source.type === 'link' && <Link className="w-4 h-4 text-blue-600 mr-2" />}
                      {source.type === 'description' && <FileText className="w-4 h-4 text-gray-600 mr-2" />}
                      <span className="text-gray-700 truncate max-w-xs">{source.content}</span>
                    </div>
                    <button
                      onClick={() => removeInspirationSource(index)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 max-h-[60vh] overflow-y-auto px-2">
            <div className="sticky top-0 bg-white py-4 z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Pain Points</h3>
              <p className="text-gray-700">Select common challenges and add your own</p>
            </div>

            <div className="space-y-4 mb-6">
              {commonPainPoints.map((point) => (
                <label key={point} className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={formData.painPoints.includes(point)}
                    onChange={(e) => {
                      const newPainPoints = e.target.checked
                        ? [...formData.painPoints, point]
                        : formData.painPoints.filter(p => p !== point);
                      setFormData({ ...formData, painPoints: newPainPoints });
                    }}
                    className="h-5 w-5 text-blue-600 rounded border-gray-300"
                  />
                  <span className="text-gray-700 font-medium">{point}</span>
                </label>
              ))}
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-800 mb-2">
                Describe additional pain points
              </label>
              <textarea
                value={formData.customPainPoints}
                onChange={(e) => setFormData({ ...formData, customPainPoints: e.target.value })}
                placeholder="Tell us about other challenges your customers face..."
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 max-h-[60vh] overflow-y-auto px-2">
            <div className="sticky top-0 bg-white py-4 z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Success Criteria</h3>
              <p className="text-gray-700">What outcomes would make this offer successful?</p>
            </div>

            <div>
              <textarea
                value={formData.successFactors}
                onChange={(e) => setFormData({ ...formData, successFactors: e.target.value })}
                placeholder="Describe your desired outcomes in detail (e.g., specific metrics, customer feedback, business impact)..."
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {i}
                </div>
                {i < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    i < step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {renderStep()}

          <div className="mt-8 flex justify-between border-t pt-4">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="text-gray-700 hover:text-gray-900 font-medium px-6 py-3"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="ml-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center font-medium"
            >
              {step === 4 ? 'Create Strategic Offer' : 'Next'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}