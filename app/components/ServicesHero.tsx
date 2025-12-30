// app/components/ServicesHero.tsx
'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            DIONZ Manpower Agency provides a wide range of manpower and recruitment services 
            to meet diverse industry needs. Our offerings include domestic and international 
            recruitment, skilled and unskilled labour supply, corporate staffing solutions, 
            housekeeping, and facility management services.
          </p>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-100 rounded-full">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-blue-700 font-semibold">
              Professional & Customer-First Approach
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}