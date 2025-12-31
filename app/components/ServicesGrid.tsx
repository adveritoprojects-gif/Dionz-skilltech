// app/components/ServicesGrid.tsx
"use client";

import { motion } from "framer-motion";
import {
  Globe,
  GraduationCap,
  Users,
  FileText,
  Building,
  Home,
} from "lucide-react";

const services = [
  {
    title: "International Recruitment",
    description:
      "DIONZ Skilltech Agency provides trusted international recruitment services for skilled and semi-skilled workers. We connect professionals with global employers in industries like construction, healthcare, hospitality, and logistics. Our transparent process ensures legal and safe overseas employment.",
    icon: <Globe className="w-8 h-8" />,
    features: [
      "Global placement",
      "Legal compliance",
      "Industry-specific recruitment",
      "Safe employment process",
    ],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Training & Career Guidance",
    description:
      "We provide training and career guidance to job seekers, preparing them with the right skills and confidence. Our services include interview preparation, soft skills, and overseas job readiness support.",
    icon: <GraduationCap className="w-8 h-8" />,
    features: [
      "Interview preparation",
      "Soft skills training",
      "Overseas job readiness",
      "Career counseling",
    ],
    gradient: "from-blue-600 to-blue-700",
  },
  {
    title: "Skilled & Unskilled Labour Supply",
    description:
      "We provide skilled and unskilled labour supply for industries like construction, healthcare, hospitality, and logistics. Our Skilltech solutions are reliable, affordable, and timely, ensuring the right workforce for every business need.",
    icon: <Users className="w-8 h-8" />,
    features: [
      "Industry-specific labor",
      "Reliable workforce",
      "Affordable solutions",
      "Timely delivery",
    ],
    gradient: "from-blue-700 to-blue-800",
  },
  {
    title: "Document Assistance",
    description:
      "Our team offers complete document assistance for job seekers, including visa processing, work permits, attestation, and travel guidance. We ensure a smooth and hassle-free process for employment abroad.",
    icon: <FileText className="w-8 h-8" />,
    features: [
      "Visa processing",
      "Work permits",
      "Document attestation",
      "Travel guidance",
    ],
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Corporate Staffing Solutions",
    description:
      "Our corporate staffing services provide businesses with the right talent for temporary and permanent roles. We help organizations find professionals who match their culture, goals, and growth plans.",
    icon: <Building className="w-8 h-8" />,
    features: [
      "Temporary staffing",
      "Permanent placement",
      "Cultural fit matching",
      "Growth planning",
    ],
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Housekeeping & Facility Management",
    description:
      "We provide trained housekeeping staff and facility management services for offices, hotels, hospitals, and commercial establishments.",
    icon: <Home className="w-8 h-8" />,
    features: [
      "Trained housekeeping staff",
      "Office facility management",
      "Hospitality services",
      "Commercial establishment support",
    ],
    gradient: "from-blue-700 to-blue-900",
    badge: "New Service",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive{" "}
            <span className="text-blue-600">Skilltech Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Every service is delivered with professionalism and a customer-first
            approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Badge for New Service */}
                {service.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Icon with gradient background */}
                <div className={`p-6 bg-gradient-to-br ${service.gradient}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <button className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    <span>Read More</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
