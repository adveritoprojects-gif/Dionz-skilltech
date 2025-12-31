// app/components/BlogHero.tsx
'use client';

import { motion } from 'framer-motion';
import { Calendar, User, Search } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Stay updated with the latest industry trends, recruitment insights, 
            and career opportunities from DIONZ Skilltech Agency.
          </p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, jobs, or insights..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all shadow-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Search
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}