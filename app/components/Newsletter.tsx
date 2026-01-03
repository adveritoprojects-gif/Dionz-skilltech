// app/components/Newsletter.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Never Miss an Opportunity
                </h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Subscribe to our newsletter and be the first to know about new job openings, 
                career tips, and industry insights from DIONZ Skilltech Pvt Ltd.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Weekly job alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Exclusive career advice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Industry trend reports</span>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Join Our Community</h4>
                
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                    <option value="">I am looking for...</option>
                    <option value="job">Job Opportunities</option>
                    <option value="career">Career Advice</option>
                    <option value="employer">Employer Solutions</option>
                    <option value="updates">General Updates</option>
                  </select>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                    Subscribe Now
                  </button>
                </div>
                
                <p className="text-gray-500 text-sm mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}