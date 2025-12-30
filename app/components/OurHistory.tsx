// app/components/OurHistory.tsx
'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Award, MapPin, TrendingUp } from 'lucide-react';

export default function OurHistory() {
  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "DIONZ journey began in 2018, and since then we have been able to become a support and shelter for many families.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      year: "2020",
      title: "Historic Achievement",
      description: "First & largest group visa from South India in 2020 - a golden feather in our history, widely covered by media.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "Present",
      title: "Expanding Reach",
      description: "Operating in Construction, Agriculture, Commerce and similar fields with hundreds of successful placements.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      year: "Future",
      title: "Continuing Journey",
      description: "This journey does not end... We continue to grow and support more families and candidates.",
      icon: <Users className="w-6 h-6" />
    }
  ];

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
            Our <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A timeline of dedication, support, and remarkable achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Year Badge */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="inline-flex items-center space-x-3 mb-4 md:mb-0">
                    <div className="hidden md:block w-8 h-8 bg-blue-600 rounded-full border-4 border-white" />
                    <div className="text-2xl font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl">
                      {milestone.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mt-4 md:mt-0`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <div className="text-white">
                          {milestone.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Difference Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What Sets Us Apart</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  What sets us apart is that we do this work not just for money, but as a means of genuine support. 
                  DIONZ group has stood beside hundreds of candidates as a pillar of strength, helping them to find suitable jobs. 
                  We primarily operate in sectors such as Construction, Agriculture, Commerce and similar fields.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  As we continue this journey, we hope the candidate stays with us in trust & fields. 
                  This journey does not end.....
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}