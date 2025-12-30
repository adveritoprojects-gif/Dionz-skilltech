// app/components/ServiceBenefits.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, Target, Award, Heart } from "lucide-react";

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trusted & Reliable",
    description:
      "Legal compliance and transparent processes ensure safe employment",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Timely Delivery",
    description: "Quick turnaround time for all staffing requirements",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Skilled Professionals",
    description: "Vetted and trained workforce for every industry",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Industry Expertise",
    description: "Specialized knowledge across multiple sectors",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality Assurance",
    description: "Rigorous screening and selection process",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Customer-First Approach",
    description: "Personalized solutions for unique business needs",
  },
];

export default function ServiceBenefits() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-blue-600">DIONZ</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our commitment to excellence and customer satisfaction sets us apart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all">
                  <div className="text-white">{benefit.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Industry Sectors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
