import React from 'react';

interface CustomPainPointProps {
  value: string;
  onChange: (value: string) => void;
}

export function CustomPainPoint({ value, onChange }: CustomPainPointProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Additional Pain Points
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Describe any specific challenges your customers face..."
      />
    </div>
  );
}