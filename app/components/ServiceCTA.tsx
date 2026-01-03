// app/components/ServiceCTA.tsx
'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Workforce?
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Whether you're looking for skilled professionals or seeking employment opportunities, 
                  DIONZ Skilltech Agency is your trusted partner for all staffing needs.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-4 text-white">
                    <Phone className="w-6 h-6 text-blue-200" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <a href="tel:+919633150003" className="text-blue-100 hover:text-white transition-colors">
                        0474 2782 6529
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-white">
                    <Mail className="w-6 h-6 text-blue-200" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <a href="mailto:info@dionz.com" className="text-blue-100 hover:text-white transition-colors">
                        info@dionz.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Link
                  href="/employers"
                  className="group block w-full bg-white text-blue-700 font-bold text-lg py-4 px-8 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Employer Solutions</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link
                  href="/candidates"
                  className="group block w-full bg-blue-500 text-white font-bold text-lg py-4 px-8 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Job Seeker Portal</span>
                  <MessageSquare className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Bottom Text */}
            <div className="mt-12 pt-8 border-t border-blue-500/30">
              <p className="text-blue-200 text-center text-sm">
                We also assist job seekers through training, career guidance, and documentation support 
                such as visa processing and work permits.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}