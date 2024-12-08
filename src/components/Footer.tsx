import React from 'react';
import { Users } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Contact', 'Careers', 'Press'],
  },
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Case Studies', 'Resources'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold text-white ml-2">
                Marketly
              </h3>
            </div>
            <p className="text-gray-400">
              Where Customer Needs Meet Compelling Offers
            </p>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Marketly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}