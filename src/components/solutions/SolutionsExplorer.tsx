import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { SolutionInput } from './SolutionInput';
import { SolutionCard } from './SolutionCard';
import { SolutionHeader } from './SolutionHeader';
import { Breadcrumbs } from '../Breadcrumbs';
import { AuthRequired } from '../AuthRequired';
import { solutionTypes } from '../../data/solutionTypes';

interface SolutionsExplorerProps {
  selectedType: string;
  onBack?: () => void;
}

export function SolutionsExplorer({ selectedType, onBack }: SolutionsExplorerProps) {
  const [showInput, setShowInput] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const solution = solutionTypes[selectedType];

  if (!solution) return null;

  const handleCreateClick = () => {
    setShowAuth(true);
  };

  const handleLogin = () => {
    setShowAuth(false);
    setShowInput(true);
  };

  const handleRegister = () => {
    setShowAuth(false);
    setShowInput(true);
  };

  const handleBreadcrumbNavigate = (href: string) => {
    if (href === '/' && onBack) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen animate-fadeIn">
      <Breadcrumbs 
        items={[
          { label: 'Solutions', href: '/' },
          { label: selectedType }
        ]} 
        onNavigate={handleBreadcrumbNavigate}
      />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Solutions
              </button>
            )}

            <SolutionHeader type={selectedType} />

            {/* Examples Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {solution.examples.map((example, index) => (
                <SolutionCard key={index} {...example} />
              ))}
            </div>

            {/* Call to Action */}
            {!showInput && (
              <div className="text-center">
                <button
                  onClick={handleCreateClick}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center text-lg font-semibold"
                >
                  Create Your Own Solution
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            )}

            {showInput && <SolutionInput solutionType={selectedType} />}

            {showAuth && (
              <AuthRequired
                title="Create Your Solution"
                description="Log in or create an account to start building your custom solution"
                onLogin={handleLogin}
                onRegister={handleRegister}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}