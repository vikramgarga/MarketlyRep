import React, { useState } from 'react';
import { Menu, X, Users, ChevronDown, LogIn, Gift, Briefcase, Brain } from 'lucide-react';
import { GetStartedPopup } from './GetStartedPopup';
import { SolutionsExplorer } from './solutions/SolutionsExplorer';

const navigationItems = [
  {
    label: 'Solutions',
    items: [
      { id: 'product', name: 'Product-Focused', icon: <Gift className="w-5 h-5" />, description: 'Create compelling product offers and bundles' },
      { id: 'service', name: 'Service-Focused', icon: <Briefcase className="w-5 h-5" />, description: 'Design innovative service packages' },
      { id: 'experience', name: 'Experience-Focused', icon: <Users className="w-5 h-5" />, description: 'Build engaging customer experiences' }
    ]
  },
  {
    label: 'Resources',
    items: [
      { id: 'case-studies', name: 'Case Studies', icon: <Brain className="w-5 h-5" /> },
      { id: 'blog', name: 'Blog', icon: <Users className="w-5 h-5" /> }
    ]
  }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const handleSolutionClick = (solutionName: string) => {
    setSelectedSolution(solutionName);
    setOpenDropdown(null);
    setIsOpen(false);
  };

  const handleBackToHome = () => {
    setSelectedSolution(null);
  };

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <button 
              onClick={handleBackToHome}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Marketly</span>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 w-72 mt-2 bg-white rounded-xl shadow-lg py-3 animate-fadeIn">
                      {item.items.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSolutionClick(subItem.name)}
                          className="flex items-start w-full px-4 py-3 text-left hover:bg-gray-50 group"
                        >
                          <div className="flex-shrink-0 mt-1">
                            {subItem.icon}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{subItem.name}</p>
                            {subItem.description && (
                              <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button className="text-gray-600 hover:text-gray-900">Pricing</button>

              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 w-full text-left">
                    {item.label}
                  </button>
                  <div className="pl-4">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSolutionClick(subItem.name)}
                        className="flex items-center w-full px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {subItem.icon}
                        <span className="ml-2">{subItem.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 w-full text-left">
                Pricing
              </button>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="block w-full px-3 py-2 text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Solutions Explorer */}
      {selectedSolution && (
        <div className="pt-16">
          <SolutionsExplorer 
            selectedType={selectedSolution} 
            onBack={handleBackToHome}
          />
        </div>
      )}

      {/* Get Started Popup */}
      <GetStartedPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}