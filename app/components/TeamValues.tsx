// app/components/TeamValues.tsx
'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Users, Target, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity First",
    description: "Honesty and transparency in all our dealings with clients and candidates"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Genuine Support",
    description: "We work not just for business, but to genuinely support families and careers"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "People First",
    description: "Candidates and clients are at the heart of everything we do"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excellence",
    description: "Striving for the highest standards in service delivery and results"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Professionalism",
    description: "Maintaining professional standards and ethical practices always"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth Focused",
    description: "Helping individuals and businesses grow through our services"
  }
];

export default function TeamValues() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-600">Core Values</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            The principles that guide our work and define our commitment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}