import React from 'react';
import { Users, Briefcase, LineChart } from 'lucide-react';

const stats = [
  {
    icon: <LineChart className="w-8 h-8" />,
    value: '25,000+',
    label: 'Ideas Generated',
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    value: '50+',
    label: 'Industries Served',
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: '10,000+',
    label: 'Customer Offers Implemented',
  },
];

export function Stats() {
  return (
    <section className="py-12 bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-indigo-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}