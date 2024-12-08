import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (href: string) => void;
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  const handleClick = (href?: string) => {
    if (href && onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <nav className="bg-white border-b shadow-sm sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-12 text-sm">
          <button 
            onClick={() => handleClick('/')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="ml-1">Home</span>
          </button>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              {item.href ? (
                <button 
                  onClick={() => handleClick(item.href)}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-900 font-medium">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}