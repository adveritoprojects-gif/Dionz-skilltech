"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  Target,
  Zap,
  Users,
  Cpu,
  Globe,
  Lock,
  TrendingUp,
} from "lucide-react";

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI-Powered Matching",
      description:
        "Advanced algorithms that analyze 200+ data points for precision placement.",
      gradient: "from-teal to-gold",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Talent Network",
      description:
        "Access to curated talent across 50+ countries and industries.",
      gradient: "from-gold to-teal",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Speed to Value",
      description:
        "Average placement time reduced by 60% through streamlined processes.",
      gradient: "from-teal to-gold",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Security",
      description:
        "Enterprise-grade encryption protecting all candidate and client data.",
      gradient: "from-gold to-teal",
    },
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 bg-gradient-to-b from-deep via-navy to-deep"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with scroll effects */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal/10 to-gold/10 border border-teal/20 mb-6"
          >
            <Zap className="h-4 w-4 text-gold mr-2" />
            <span className="text-sm font-medium text-teal">
              The DIONZ Difference
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-lightest-slate to-teal bg-clip-text text-transparent">
              Beyond Traditional
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold to-teal-dark bg-clip-text text-transparent">
              Recruitment
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-light-slate"
          >
            We've reimagined talent acquisition as a strategic partnership,
            leveraging technology and human insight to deliver exceptional
            results.
          </motion.p>
        </div>

        {/* Interactive feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-navy to-deep border border-slate/20 group-hover:border-teal/30 transition-all duration-300 overflow-hidden">
                {/* Animated gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Floating icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                >
                  <div className="text-white">{feature.icon}</div>
                </motion.div>

                <h3 className="text-xl font-bold text-lightest-slate mb-3">
                  {feature.title}
                </h3>
                <p className="text-light-slate">{feature.description}</p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal to-gold"
                />
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* Animated metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-navy to-deep border border-slate/20 rounded-3xl p-8 sm:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                value: "78%",
                label: "Faster hiring cycles",
                desc: "Compared to industry average",
              },
              {
                value: "94%",
                label: "Retention rate",
                desc: "After 12 months placement",
              },
              {
                value: "5x",
                label: "ROI delivered",
                desc: "For every recruitment dollar spent",
              },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-teal to-gold bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-xl font-semibold text-lightest-slate mb-1">
                  {metric.label}
                </div>
                <div className="text-light-slate">{metric.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
