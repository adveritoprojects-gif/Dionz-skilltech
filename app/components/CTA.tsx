'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Connect with DIONZ today and discover how our premium staffing solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Employer Solutions <Briefcase className="ml-3 h-5 w-5" />
            </button>
            <button className="bg-white text-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Job Seeker Portal <Users className="ml-3 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}