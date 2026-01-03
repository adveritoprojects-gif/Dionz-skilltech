// app/components/BlogCategories.tsx
"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Globe,
  BookOpen,
  TrendingUp,
  HelpCircle,
  Target,
  FileText,
  Calendar,
  User,
} from "lucide-react";

const categories = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    name: "Job Openings",
    count: "12",
    color: "bg-blue-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: "Career Advice",
    count: "8",
    color: "bg-blue-600",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: "International Jobs",
    count: "15",
    color: "bg-blue-700",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    name: "Industry Insights",
    count: "10",
    color: "bg-blue-800",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    name: "Business Solutions",
    count: "7",
    color: "bg-blue-900",
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    name: "Recruitment Tips",
    count: "9",
    color: "bg-blue-500",
  },
  {
    icon: <Target className="w-6 h-6" />,
    name: "Training Programs",
    count: "6",
    color: "bg-blue-600",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    name: "Document Guidance",
    count: "5",
    color: "bg-blue-700",
  },
];

const popularPosts = [
  { title: "How to Prepare for International Job Interviews", views: "1.2k" },
  { title: "Top Skills in Demand for 2025", views: "980" },
  { title: "Understanding Work Visas: A Complete Guide", views: "1.5k" },
  { title: "Building a Strong Professional Resume", views: "890" },
  { title: "Remote Work Opportunities in Tech", views: "1.1k" },
];

export default function BlogCategories() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Categories */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Browse Categories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}
                        >
                          <div className="text-white">{category.icon}</div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">
                          {category.count}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        {category.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-blue-200 font-semibold">
                    Featured Article
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  DIONZ Skilltech Pvt Ltd – Bridging Talent and Opportunities
                </h3>

                <p className="text-blue-100 mb-6 leading-relaxed">
                  DIONZ Skilltech Pvt Ltd introduces its trusted recruitment and
                  staffing solutions in Kollam, Kerala. Specializing in
                  international and domestic placements for skilled and
                  unskilled workers. Focused on ethical recruitment,
                  transparency, and career empowerment.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-blue-200">
                      <Calendar className="w-4 h-4" />
                      <span>2025-10-03</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-200">
                      <User className="w-4 h-4" />
                      <span>Admin</span>
                    </div>
                  </div>
                  <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Read Full Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Popular Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Popular Posts
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <div className="text-blue-600 font-bold">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-sm text-gray-500">
                            {post.views} views
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100 text-sm mb-6">
                Get the latest job alerts and career advice directly in your
                inbox
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder:text-blue-200 text-white outline-none focus:border-white/40"
                />
                <button className="w-full bg-white text-blue-700 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
