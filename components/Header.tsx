"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Premium Minimalist Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Gradient Top Border */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <div
          className={`
          relative transition-all duration-500
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-b border-blue-50/30 shadow-[0_8px_32px_rgba(59,130,246,0.08)]"
              : "bg-white/90 backdrop-blur-lg"
          }
        `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo - Centered Modern Design */}
              <div className="flex-1 flex items-center">
                <Link href="/" className="group relative flex items-center">
                  {/* Logo Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Logo Container */}
                  <div className="relative z-10">
                    <div className="relative w-[180px] h-[45px] md:w-[220px] md:h-[55px]">
                      <Image
                        src="/dionz.png"
                        alt="DIONZ Manpower Agency"
                        fill
                        className="object-contain object-left"
                        sizes="(max-width: 768px) 180px, 220px"
                        priority
                      />
                    </div>

                    {/* Subtle Accent Line */}
                    <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-700 mt-1" />
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation - Minimalist */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative"
                  >
                    <span
                      className={`
                      text-sm font-medium tracking-wide transition-all duration-300
                      ${
                        pathname === item.href
                          ? "text-blue-600"
                          : "text-gray-600 group-hover:text-blue-500"
                      }
                    `}
                    >
                      {item.label}
                    </span>

                    {/* Animated Underline */}
                    <div
                      className={`
                      absolute -bottom-1 left-0 h-[1px] transition-all duration-300
                      ${
                        pathname === item.href
                          ? "w-full bg-gradient-to-r from-blue-600 to-blue-400"
                          : "w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-blue-300"
                      }
                    `}
                    />
                  </Link>
                ))}

                {/* Premium CTA Button */}
                <Link
                  href="/recruit"
                  className="ml-4 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative px-6 py-2.5 flex items-center space-x-2">
                    <span className="text-sm font-semibold text-white tracking-wide">
                      Our Recruits
                    </span>
                    <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </nav>

              {/* Mobile Menu Button - Classic 3 Line Hamburger */}
              <div className="lg:hidden flex-1 flex justify-end">
                <button
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  className="relative group p-3 rounded-lg"
                >
                  {/* Background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Classic 3-line hamburger icon */}
                  <div className="relative z-10 flex flex-col items-center justify-center w-6 h-5 space-y-1.5">
                    <motion.span
                      animate={
                        isMobileOpen
                          ? { rotate: 45, y: 8 }
                          : { rotate: 0, y: 0 }
                      }
                      className="block w-6 h-0.5 bg-blue-600 rounded-full transition-all duration-300"
                    />
                    <motion.span
                      animate={
                        isMobileOpen
                          ? { opacity: 0, scale: 0 }
                          : { opacity: 1, scale: 1 }
                      }
                      className="block w-6 h-0.5 bg-blue-600 rounded-full transition-all duration-300"
                    />
                    <motion.span
                      animate={
                        isMobileOpen
                          ? { rotate: -45, y: -8 }
                          : { rotate: 0, y: 0 }
                      }
                      className="block w-6 h-0.5 bg-blue-600 rounded-full transition-all duration-300"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Premium Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Side Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl shadow-blue-500/10 z-50 lg:hidden"
            >
              {/* Menu Header */}
              <div className="p-8 border-b border-blue-50">
                <div className="flex items-center justify-between">
                  <Link href="/" onClick={() => setIsMobileOpen(false)}>
                    <div className="relative w-[160px] h-[40px]">
                      <Image
                        src="/dionz.png"
                        alt="DIONZ Manpower Agency"
                        fill
                        className="object-contain object-left"
                        sizes="160px"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-3 hover:bg-blue-50 rounded-lg transition-colors relative group"
                  >
                    {/* X icon with 4 lines for premium feel */}
                    <div className="relative w-5 h-5">
                      <motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 45 }}
                        className="absolute top-1/2 left-0 w-5 h-0.5 bg-blue-600 rounded-full"
                      />
                      <motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -45 }}
                        className="absolute top-1/2 left-0 w-5 h-0.5 bg-blue-600 rounded-full"
                      />
                    </div>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-8">
                <div className="space-y-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`
                          group flex items-center justify-between py-4 px-3 rounded-xl
                          ${
                            pathname === item.href
                              ? "bg-blue-50/50"
                              : "hover:bg-blue-50/30"
                          }
                        `}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              pathname === item.href
                                ? "bg-blue-500"
                                : "bg-blue-200"
                            }`}
                          />
                          <span
                            className={`
                            text-lg font-medium tracking-wide
                            ${
                              pathname === item.href
                                ? "text-blue-600"
                                : "text-gray-700"
                            }
                          `}
                          >
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 ${
                            pathname === item.href
                              ? "text-blue-500"
                              : "text-gray-400"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12"
                >
                  <Link
                    href="/recruit"
                    onClick={() => setIsMobileOpen(false)}
                    className="block w-full py-4 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                  >
                    Our Recruits
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 pt-8 border-t border-blue-50"
                >
                  
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}
