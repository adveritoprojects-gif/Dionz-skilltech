// app/components/MissionVision.tsx
'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Globe, Leaf, Users, Award } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-blue-100 leading-relaxed">
                  At DIONZ Skilltech Agency, our mission is to empower individuals with the right career paths 
                  while helping businesses grow with reliable Skilltech solutions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-blue-100">
                      We believe in transparency, professionalism, and ethical recruitment practices.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-blue-100">
                      Whether you are a job seeker looking for opportunities or an employer searching 
                      for the right workforce, we are here to provide dependable and result-driven services.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mission Features */}
              <div className="mt-8 pt-8 border-t border-blue-500/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100 text-sm">Empowerment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100 text-sm">Professionalism</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Leaf className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100 text-sm">Ethical Practices</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100 text-sm">Global Reach</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Our vision is to become the most trusted and preferred Skilltech solutions provider, 
                  recognized for our integrity, quality service, and commitment to excellence.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <p className="text-gray-600">
                      To be the bridge that connects talent with opportunity, creating meaningful careers 
                      and successful businesses.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <p className="text-gray-600">
                      To build lasting relationships based on trust, transparency, and mutual success.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Vision Goals */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Future Goals</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-600 text-sm">Expand global reach</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-600 text-sm">Innovate recruitment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-600 text-sm">Digital transformation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-600 text-sm">Community impact</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}