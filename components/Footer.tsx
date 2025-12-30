"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Calendar,
  Users,
  Briefcase,
  Shield,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    console.log("Subscribed:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Talent", href: "/employers" },
    { label: "Jobs", href: "/candidates" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  const popularBlogs = [
    { title: "UI/UX Designer Trends 2024", href: "/blog/ui-ux-trends" },
    {
      title: "Project Manager Roles & Responsibilities",
      href: "/blog/project-manager",
    },
    {
      title: "DIONZ Manpower Agency – Bridging Talent and Opportunities",
      href: "/blog/bridging-talent",
    },
    {
      title: "Hiring Best Practices in 2024",
      href: "/blog/hiring-best-practices",
    },
  ];

  const services = [
    { icon: <Users className="w-5 h-5" />, label: "Talent Acquisition" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Job Placement" },
    { icon: <Calendar className="w-5 h-5" />, label: "Staffing Solutions" },
    { icon: <Shield className="w-5 h-5" />, label: "HR Consulting" },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/dionz",
      label: "Facebook",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/dionz",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/company/dionz",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/dionz",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                  DIONZ
                </h2>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-400">
                  Manpower Agency
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                At DIONZ Manpower Agency, we specialize in providing reliable
                and efficient manpower solutions tailored to the unique needs of
                employers and job seekers.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-blue-600">{service.icon}</div>
                    <span className="text-sm font-medium text-gray-700">
                      {service.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 group">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Door No 109
                    <br />
                    Chakirikadayil Tower
                    <br />
                    Pallimukku, Kollam
                    <br />
                    Kerala, Pin 691011
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 group">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                  <a
                    href="tel:+91963315003"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-lg"
                  >
                    +91 96331 50003
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 group">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                    <br />
                    <span className="text-gray-500">Sunday: Off</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                  <a
                    href="mailto:info@dionz.com"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    info@dionz.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Quick Links */}
          <div className="space-y-8">
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Subscribe to our newsletter for the latest job opportunities and
                industry insights.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Subscribe Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Blogs */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Latest Blogs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularBlogs.map((blog, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                        {blog.title}
                      </h4>
                      <Link
                        href={blog.href}
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200 group"
                  aria-label={social.label}
                >
                  <div className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Company Info */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                <strong>Dionz Skilltech Private Limited</strong>
                <br />
                Registered in Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Dionz Skilltech Private Limited. All
              Rights Reserved.
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link
                href="/terms"
                className="hover:text-blue-600 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-blue-600 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
