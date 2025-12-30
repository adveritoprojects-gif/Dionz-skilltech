"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const stats = [
    {
      value: "2.5K+",
      label: "Successful Placements",
      icon: <Target className="h-4 w-4" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      value: "300+",
      label: "Global Companies",
      icon: <Users className="h-4 w-4" />,
    },
    {
      value: "15+",
      label: "Years Excellence",
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background layers */}
      <motion.div
        style={{ y: springY, scale }}
        className="absolute inset-0 bg-gradient-to-br from-deep via-navy to-[#0d1b2a]"
      />

      {/* Floating gradient spheres */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal/10 to-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gold/10 to-teal/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal/10 to-gold/10 border border-teal/20 mb-8"
            >
              <Sparkles className="h-4 w-4 text-gold mr-2" />
              <span className="text-sm font-medium text-teal">
                Premium Talent Solutions Since 2010
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-teal via-gold-light to-gold bg-clip-text text-transparent">
                WHERE VISIONARY
              </span>
              <br />
              <span className="bg-gradient-to-r from-lightest-slate via-light-slate to-slate bg-clip-text text-transparent">
                TALENT MEETS
              </span>
              <br />
              <span className="bg-gradient-to-r from-gold via-teal to-teal-dark bg-clip-text text-transparent">
                PURPOSE-DRIVEN ORGANIZATIONS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-light-slate max-w-3xl mx-auto mb-12"
            >
              We architect talent ecosystems that transform ambitious companies
              and accelerate career trajectories through precision matching and
              strategic partnership.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-teal to-teal-dark text-deep font-semibold shadow-xl shadow-teal/20 hover:shadow-teal/30 transition-all duration-300 flex items-center justify-center"
              >
                <span>Begin Talent Partnership</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border-2 border-slate/30 bg-navy/50 backdrop-blur-sm text-lightest-slate font-semibold hover:border-teal/50 hover:bg-teal/10 transition-all duration-300"
              >
                Explore Elite Opportunities
              </motion.button>
            </motion.div>
          </div>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-navy to-deep border border-slate/20 group-hover:border-teal/30 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-gold">{stat.icon}</div>
                      <ChevronRight className="h-4 w-4 text-slate group-hover:text-teal transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-lightest-slate mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-light-slate">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <div className="text-sm text-slate mb-2">Scroll to explore</div>
              <div className="w-px h-12 bg-gradient-to-b from-teal via-gold to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
