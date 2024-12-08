import React from 'react';
import { LineChart, Users, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: <LineChart className="w-6 h-6" />,
    value: "25,000+",
    label: "Offers Generated"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "50+",
    label: "Industries Served"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    value: "10,000+",
    label: "Successful Implementations"
  }
];

export function StatsTicker() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-2">
              {stat.icon}
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}