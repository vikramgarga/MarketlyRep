import React from 'react';
import { commonPainPoints } from '../../data/pain-points';

interface PainPointSelectorProps {
  selectedIndustry: string;
  selectedPainPoints: string[];
  onPainPointsChange: (painPoints: string[]) => void;
}

export function PainPointSelector({
  selectedIndustry,
  selectedPainPoints,
  onPainPointsChange,
}: PainPointSelectorProps) {
  if (!selectedIndustry) return null;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Common Pain Points
      </label>
      <div className="space-y-2">
        {commonPainPoints[selectedIndustry as keyof typeof commonPainPoints]?.map((point) => (
          <label key={point} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedPainPoints.includes(point)}
              onChange={(e) => {
                if (e.target.checked) {
                  onPainPointsChange([...selectedPainPoints, point]);
                } else {
                  onPainPointsChange(selectedPainPoints.filter((p) => p !== point));
                }
              }}
              className="mr-2"
            />
            {point}
          </label>
        ))}
      </div>
    </div>
  );
}