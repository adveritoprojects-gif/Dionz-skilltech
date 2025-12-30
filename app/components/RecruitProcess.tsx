// app/components/RecruitProcess.tsx
"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Phone,
  Calendar,
  Briefcase,
  Plane,
  CheckCircle,
} from "lucide-react";

const processSteps = [
  {
    step: 1,
    title: "Application Submission",
    description:
      "Submit your application with required documents through our online portal",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    step: 2,
    title: "Initial Screening",
    description:
      "Our team reviews your application and contacts you for initial screening",
    icon: <Phone className="w-8 h-8" />,
    color: "bg-blue-600",
  },
  {
    step: 3,
    title: "Walk-in Interview",
    description: "Attend in-person interview at our office on scheduled dates",
    icon: <Calendar className="w-8 h-8" />,
    color: "bg-blue-700",
  },
  {
    step: 4,
    title: "Document Processing",
    description: "We handle all visa and document processing requirements",
    icon: <Briefcase className="w-8 h-8" />,
    color: "bg-blue-800",
  },
  {
    step: 5,
    title: "Pre-departure Orientation",
    description: "Complete training and orientation before departure",
    icon: <Plane className="w-8 h-8" />,
    color: "bg-blue-900",
  },
  {
    step: 6,
    title: "Job Placement",
    description: "Begin your international career with full support from DIONZ",
    icon: <CheckCircle className="w-8 h-8" />,
    color: "bg-green-600",
  },
];

export default function RecruitProcess() {
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
            Our <span className="text-blue-600">Recruitment Process</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transparent and efficient process from application to international
            placement
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-green-600 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Step Number */}
                  <div
                    className={`${step.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <div className="text-2xl font-bold text-white">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-white rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <div className="text-blue-600">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-800 text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24-48 HOURS</div>
                <div className="text-blue-200">Initial Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-200">Visa Processing Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹0</div>
                <div className="text-blue-200">Application Fee</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-500/30">
              <h4 className="text-xl font-bold mb-4">
                Need Immediate Assistance?
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      Call our Recruitment Team
                    </div>
                    <div className="text-blue-200">
                      RIYA: +91 96331 50030 | +972 55 9419714
                    </div>
                  </div>
                </div>
                <div className="text-sm text-blue-200">
                  Office Hours: Mon-Sat, 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
