import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';

interface AuthRequiredProps {
  title: string;
  description: string;
  onLogin: () => void;
  onRegister: () => void;
}

export function AuthRequired({ title, description, onLogin, onRegister }: AuthRequiredProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 animate-fadeIn">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 rounded-full p-3">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
        <p className="text-gray-600 text-center mb-8">{description}</p>

        <div className="space-y-4">
          <button
            onClick={onLogin}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-medium"
          >
            Log In
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>

          <button
            onClick={onRegister}
            className="w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center font-medium"
          >
            Create Account
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}