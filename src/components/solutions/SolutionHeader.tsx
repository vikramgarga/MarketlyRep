import React from 'react';
import { Gift, Users, Briefcase } from 'lucide-react';
import { solutionTypes } from '../../data/solutionTypes';

interface SolutionHeaderProps {
  type: string;
}

export function SolutionHeader({ type }: SolutionHeaderProps) {
  const Icon = solutionTypes[type]?.icon;
  
  if (!Icon) return null;
  
  return (
    <div className="flex items-center mb-8">
      <Icon className="w-6 h-6 text-blue-600" />
      <h2 className="text-2xl font-bold ml-3">{type} Solutions</h2>
    </div>
  );
}