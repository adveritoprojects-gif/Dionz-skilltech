// app/components/BlogGrid.tsx
'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Briefcase, Users, Globe } from 'lucide-react';

const blogPosts = [
  {
    title: "DIONZ Manpower Agency – Bridging Talent and Opportunities",
    description: "DIONZ Manpower Agency introduces its trusted recruitment and staffing solutions in Kollam, Kerala. Specializing in international and domestic placements for skilled and unskilled workers. Focused on ethical recruitment, transparency, and career empowerment.",
    date: "2025-10-03",
    author: "Admin",
    category: "Company News",
    readTime: "3 min read",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Project Manager",
    description: "We are looking for a skilled Project Manager to plan, coordinate, and deliver projects on time and within scope. You will work closely with cross-functional teams to ensure smooth execution and successful project outcomes.",
    date: "2025-10-03",
    author: "Admin",
    category: "Job Opening",
    readTime: "2 min read",
    icon: <Briefcase className="w-6 h-6" />,
    gradient: "from-blue-600 to-blue-700"
  },
  {
    title: "UI/UX Designer",
    description: "We are seeking a creative and detail-oriented UI/UX Designer who is passionate about crafting intuitive, user-friendly, and visually appealing digital experiences. In this role, you will design engaging interfaces, improve user flows.",
    date: "2025-10-03",
    author: "Admin",
    category: "Job Opening",
    readTime: "2 min read",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-blue-700 to-blue-800"
  },
  {
    title: "International Recruitment Trends 2025",
    description: "Explore the latest trends in international recruitment and how DIONZ is adapting to global market changes.",
    date: "2025-10-02",
    author: "Admin",
    category: "Industry Insights",
    readTime: "4 min read",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-blue-500 to-blue-700"
  },
  {
    title: "Career Guidance for Overseas Jobs",
    description: "Essential tips and guidance for professionals seeking international career opportunities.",
    date: "2025-10-01",
    author: "Admin",
    category: "Career Advice",
    readTime: "5 min read",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-blue-600 to-blue-800"
  },
  {
    title: "Staffing Solutions for Modern Businesses",
    description: "How DIONZ provides flexible staffing solutions to meet evolving business needs.",
    date: "2025-09-30",
    author: "Admin",
    category: "Business Solutions",
    readTime: "3 min read",
    icon: <Briefcase className="w-6 h-6" />,
    gradient: "from-blue-700 to-blue-900"
  }
];

export default function BlogGrid() {
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
            Latest <span className="text-blue-600">Articles & Updates</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Stay informed with our latest posts covering industry trends, job opportunities, and career advice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r ${post.gradient} text-white text-xs font-bold rounded-full`}>
                    <div className="w-3 h-3 bg-white rounded-full" />
                    <span>{post.category}</span>
                  </div>
                </div>
                
                {/* Icon Section */}
                <div className={`p-8 bg-gradient-to-br ${post.gradient}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                    <div className="text-white">
                      {post.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <span className="text-blue-500 font-medium">{post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  
                  {/* Read More Button */}
                  <button className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
            <span>Load More Articles</span>
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}