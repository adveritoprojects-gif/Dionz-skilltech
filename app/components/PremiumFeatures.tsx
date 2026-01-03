// app/components/PremiumFeatures.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, Home, Plane, Users, Briefcase, Heart } from "lucide-react";

const features = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Premium Salary Packages",
    description: "Competitive salaries starting at ₹1.5L with overtime benefits and performance bonuses",
    gradient: "from-green-500 to-emerald-600",
    stat: "₹1.5L+"
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Luxury Accommodation",
    description: "Fully furnished apartments with modern amenities and transportation services",
    gradient: "from-blue-500 to-cyan-600",
    stat: "4★ Housing"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Complete Visa Support",
    description: "End-to-end visa processing with legal assistance and document preparation",
    gradient: "from-purple-500 to-pink-600",
    stat: "100% Success"
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Flight Arrangements",
    description: "Round-trip flight bookings with airport pickup and drop services",
    gradient: "from-orange-500 to-red-600",
    stat: "Free Tickets"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Dedicated Support Team",
    description: "24/7 multilingual support team for all your needs during employment",
    gradient: "from-indigo-500 to-blue-600",
    stat: "24/7 Help"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Career Growth",
    description: "Skill development programs and promotion opportunities",
    gradient: "from-yellow-500 to-amber-600",
    stat: "Growth Path"
  }
];

export default function PremiumFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 mb-6">
            <Heart className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-semibold text-cyan-600">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Premium Benefits Package
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience world-class employment benefits designed for your comfort and success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-300" />
              <div className="relative bg-white rounded-3xl border border-gray-200 p-8 h-full overflow-hidden">
                {/* Gradient Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${feature.gradient} opacity-5 rounded-full transform translate-x-12 -translate-y-12`} />
                
                {/* Icon Container */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6`}>
                  <div className="text-white">{feature.icon}</div>
                </div>

                {/* Stat Badge */}
                <div className={`absolute top-6 right-6 px-4 py-1.5 bg-gradient-to-r ${feature.gradient} text-white text-sm font-bold rounded-full`}>
                  {feature.stat}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "5000+", label: "Successful Placements" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24h", label: "Response Time" },
                { value: "20+", label: "Countries Served" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}