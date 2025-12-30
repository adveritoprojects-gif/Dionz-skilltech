"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // 1️⃣ Mount check
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2️⃣ Scroll listener (safe)
  useEffect(() => {
    if (!mounted) return;

    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  // 3️⃣ Body scroll lock (safe)
  useEffect(() => {
    if (!mounted) return;

    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen, mounted]);

  // ⛔ RETURN ONLY AFTER ALL HOOKS
  if (!mounted) return null;

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Employers", href: "/employers" },
    { label: "Candidates", href: "/candidates" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white/90 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-blue-700">
          DIONZ
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setIsMobileOpen(true)} className="md:hidden">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex justify-between items-center px-4 h-20 border-b">
              <span className="font-bold">DIONZ</span>
              <button onClick={() => setIsMobileOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 px-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-lg font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
