"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Animated gradient orb */}
      <motion.div
        animate={{
          x: mousePosition.x * 100 - 50,
          y: mousePosition.y * 100 - 50,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
        className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-teal/5 via-gold/3 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      {/* Grid background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#112240_1px,transparent_1px),linear-gradient(180deg,#112240_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: 0,
          }}
          animate={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-1 h-1 bg-gold rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
}
