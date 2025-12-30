import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
        <div className="text-blue-700">
          {icon}
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
}