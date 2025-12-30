import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
      <div className="mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center">
          <div className="text-white text-lg sm:text-xl">{icon}</div>
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mb-6">{description}</p>
      <a
        href="#"
        className="text-blue-600 font-medium flex items-center text-sm sm:text-base"
      >
        Learn more <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
      </a>
    </div>
  );
}
