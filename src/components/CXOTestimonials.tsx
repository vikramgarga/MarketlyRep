import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Chief Marketing Officer',
    company: 'TechGlobal Solutions',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150',
    quote: "Marketly transformed how we approach B2B offers. The AI-driven insights helped us create a service package that increased our enterprise client conversion by 40%."
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Revenue Officer',
    company: 'IndustrialTech Corp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
    quote: "The cross-industry inspiration feature is brilliant. We adapted retail loyalty concepts to our B2B manufacturing business, resulting in a 25% increase in repeat orders."
  },
  {
    name: 'Rajesh Patel',
    role: 'Chief Strategy Officer',
    company: 'GlobalTrade Systems',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150',
    quote: "Marketly's data-driven approach helped us develop unique value propositions for different market segments. Our customer acquisition costs dropped by 30% within quarters."
  }
];

export function CXOTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          See how global enterprises are transforming their customer offerings with Marketly
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="w-10 h-10 text-blue-600 mb-6" />
              
              <p className="text-gray-700 mb-6 min-h-[120px]">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-blue-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}