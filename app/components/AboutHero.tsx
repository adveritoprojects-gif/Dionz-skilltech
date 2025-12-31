// app/components/AboutHero.tsx
"use client";

import { motion } from "framer-motion";
import { Users, Target, Globe, Award } from "lucide-react";

export default function AboutHero() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "1000+",
      label: "Families Supported",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: "7+",
      label: "Years Experience",
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: "4+",
      label: "Industry Sectors",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "Largest",
      label: "Group Visa 2020",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />{" "}
        {/* Overlay for better text readability */}
        <img
          src="/images/about-hero.jpg"
          alt="About DIONZ"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 via-blue-600/60 to-blue-900/80 z-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                DIONZ
              </span>
            </h1>

            <div className="space-y-6">
              <p className="text-lg text-blue-100 leading-relaxed">
                DIONZ journey began in 2018, and since then we have been able to
                become a support and shelter for many families. It has been more
                than seven years since we started sending people for work to the
                Holy Land of Israel. Among our milestones, the first & largest
                group visa from South India in 2020 remains a golden feather in
                our history - something widely covered by the media at that
                time. What sets us apart is that we do this work not just for
                money, but as a means of genuine support. DIONZ group has stood
                beside hundreds of candidates as a pillar of strength, helping
                them to find suitable jobs. We primarily operate in sectors such
                as Construction, Agriculture, Commerce and similar fields. As we
                continue this journey, we hope the candidate stays with us in
                trust & fields. This journey does not end.....
              </p>

              <p className="text-lg text-blue-100 leading-relaxed">
                With years of expertise in international recruitment, corporate
                staffing, training, career guidance, and document assistance, we
                aim to bridge the gap between talent and opportunity.
              </p>

              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-white font-semibold">
                  Trusted Since 2018
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-800/90 to-blue-900/90 backdrop-blur-sm rounded-3xl p-8 text-white border border-white/20 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Our Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl mb-3 backdrop-blur-sm">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold mb-1 text-white">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-blue-100 text-sm">
                Trusted partner for hundreds of candidates as a pillar of
                strength
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
