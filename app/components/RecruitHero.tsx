// app/components/RecruitHero.tsx
"use client";

import { motion } from "framer-motion";
import { Globe, Briefcase, Users, MapPin } from "lucide-react";

export default function RecruitHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Globe className="w-5 h-5" />
            <span className="font-semibold">International Recruitment</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Build Your Career in{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Israel
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Join our international workforce program with premium opportunities
            in construction and hospitality sectors
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-100">Premium Salaries</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-100">Work Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-100">Accommodation Provided</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center space-x-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="font-semibold">
              Currently Hiring - Walk-in Interviews Available
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}