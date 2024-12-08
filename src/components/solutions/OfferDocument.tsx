import React, { useState } from 'react';
import { Mail, Download, Copy, Check, X } from 'lucide-react';

interface OfferDocumentProps {
  offer: {
    title: string;
    industry: string;
    customerType: string;
    painPoints: string[];
    solution: {
      description: string;
      benefits: string[];
      implementation: string[];
    };
    impact: {
      metrics: string[];
      timeline: string;
    };
  };
  onClose: () => void;
}

export function OfferDocument({ offer, onClose }: OfferDocumentProps) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSending(false);
    setShowEmailForm(false);
    // Here you would integrate with your email service
  };

  const handleCopyToClipboard = async () => {
    const content = `
      ${offer.title}
      
      Industry: ${offer.industry}
      Customer Type: ${offer.customerType}
      
      Pain Points:
      ${offer.painPoints.map(point => `• ${point}`).join('\n')}
      
      Solution:
      ${offer.solution.description}
      
      Benefits:
      ${offer.solution.benefits.map(benefit => `• ${benefit}`).join('\n')}
      
      Implementation Steps:
      ${offer.solution.implementation.map((step, i) => `${i + 1}. ${step}`).join('\n')}
      
      Expected Impact:
      ${offer.impact.metrics.map(metric => `• ${metric}`).join('\n')}
      
      Timeline: ${offer.impact.timeline}
    `;

    await navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Strategic Offer Recommendation</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyToClipboard}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
              title="Copy to clipboard"
            >
              {isCopied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setShowEmailForm(true)}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
              title="Share via email"
            >
              <Mail className="w-5 h-5" />
            </button>
            <button
              onClick={() => window.print()}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
              title="Download PDF"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Header Section */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{offer.title}</h1>
              <div className="flex space-x-4 text-gray-600">
                <span>Industry: {offer.industry}</span>
                <span>•</span>
                <span>Customer Type: {offer.customerType}</span>
              </div>
            </div>

            {/* Pain Points */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Addressing Key Pain Points</h3>
              <ul className="space-y-2">
                {offer.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-red-100 text-red-700 rounded-full text-sm flex items-center justify-center mr-2 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Recommended Solution</h3>
              <p className="text-gray-700 mb-6">{offer.solution.description}</p>
              
              <h4 className="font-semibold mb-3">Key Benefits</h4>
              <ul className="space-y-2 mb-6">
                {offer.solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-sm flex items-center justify-center mr-2 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-3">Implementation Steps</h4>
              <ol className="space-y-4">
                {offer.solution.implementation.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center justify-center mr-2 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Impact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Expected Impact</h3>
              <ul className="space-y-2 mb-4">
                {offer.impact.metrics.map((metric, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center justify-center mr-2 mt-0.5">
                      📈
                    </span>
                    <span className="text-gray-700">{metric}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600">
                <strong>Implementation Timeline:</strong> {offer.impact.timeline}
              </p>
            </div>
          </div>
        </div>

        {/* Email Form */}
        {showEmailForm && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Share via Email</h3>
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Recipient Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {isSending ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}