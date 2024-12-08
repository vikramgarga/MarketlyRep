import React, { useState, useEffect } from 'react';
import { Users, Lightbulb, Sparkles, ArrowRight, Building2, Target } from 'lucide-react';

const demoScenarios = [
  {
    industry: 'Healthcare',
    challenge: {
      title: 'Patient Scheduling',
      description: 'Long wait times and inefficient appointment management',
      metrics: 'Average wait time: 45 minutes',
    },
    inspiration: {
      sources: ['Restaurant Industry', 'Airlines'],
      insights: [
        'Dynamic time slot pricing',
        'Real-time capacity management',
        'Automated reminders'
      ]
    },
    solution: {
      title: 'Smart Scheduling Bundle',
      description: 'AI-powered scheduling system with dynamic time slots',
      impact: '40% reduction in wait times'
    }
  },
  {
    industry: 'Manufacturing',
    challenge: {
      title: 'Equipment Maintenance',
      description: 'Reactive maintenance leading to costly downtime',
      metrics: 'Average downtime: 24 hours',
    },
    inspiration: {
      sources: ['Formula 1 Racing', 'Smart Buildings'],
      insights: [
        'Predictive analytics',
        'Real-time sensor data',
        'Mobile maintenance crews'
      ]
    },
    solution: {
      title: 'Predictive Maintenance Package',
      description: 'IoT-based predictive maintenance system',
      impact: '60% reduction in downtime'
    }
  }
];

export function OfferDemo() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const scenario = demoScenarios[activeScenario];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 2) {
          setActiveScenario((prevScenario) => 
            (prevScenario + 1) % demoScenarios.length
          );
          return 0;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            See Marketly in Action
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Watch how we transform real industry challenges into innovative solutions
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Industry Selector */}
            <div className="flex items-center justify-between p-6 bg-gray-50 border-b">
              {demoScenarios.map((s, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveScenario(index);
                    setActiveStep(0);
                  }}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                    activeScenario === index
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  {s.industry}
                </button>
              ))}
            </div>

            {/* Main Demo Area */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Challenge Analysis */}
                <div className={`transform transition-all duration-500 ${
                  activeStep >= 0 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}>
                  <div className="bg-gray-50 rounded-xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold">Challenge Analysis</h3>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">{scenario.challenge.title}</h4>
                      <p className="text-gray-600">{scenario.challenge.description}</p>
                      <div className="bg-white rounded-lg p-3 text-sm">
                        <Target className="w-4 h-4 text-red-500 inline mr-2" />
                        {scenario.challenge.metrics}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cross-Industry Insights */}
                <div className={`transform transition-all duration-500 ${
                  activeStep >= 1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}>
                  <div className="bg-blue-50 rounded-xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold">Industry Insights</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {scenario.inspiration.sources.map((source, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                          >
                            {source}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {scenario.inspiration.insights.map((insight, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Solution & Impact */}
                <div className={`transform transition-all duration-500 ${
                  activeStep >= 2 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}>
                  <div className="bg-green-50 rounded-xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <Sparkles className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold">Solution & Impact</h3>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">{scenario.solution.title}</h4>
                      <p className="text-gray-600">{scenario.solution.description}</p>
                      <div className="bg-white rounded-lg p-3 text-sm text-green-700">
                        <Target className="w-4 h-4 text-green-500 inline mr-2" />
                        {scenario.solution.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  {[0, 1, 2].map((step) => (
                    <div
                      key={step}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeStep >= step ? 'bg-blue-600 w-8' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}