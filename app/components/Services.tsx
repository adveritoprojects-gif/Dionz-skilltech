'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Briefcase, Users, CheckCircle, Star, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      title: "Executive Search",
      description: "Finding top-tier leadership talent for strategic roles",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Permanent Staffing",
      description: "Long-term placement solutions for businesses of all sizes",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Contract Staffing",
      description: "Flexible workforce solutions for project-based needs",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Talent Consulting",
      description: "Strategic HR advisory and workforce planning services",
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">Premium Services</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tailored staffing solutions designed to meet the unique needs of your business
          </motion.p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Looking for custom staffing solutions? We tailor our services to your specific requirements.
          </p>
          <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Services <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}