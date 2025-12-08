import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative mt-32 pt-10 pb-8 text-center">

      {/* Soft gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-0.5 
                      bg-linear-to-r from-transparent via-neon/40 to-transparent" />

      {/* Glow behind footer */}
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 
                      w-[300px] h-[120px] bg-neon/10 blur-[90px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-slate-400 text-sm"
      >
        <p className="tracking-wide">
          <span className="text-electric ml-1 font-semibold">© {new Date().getFullYear()} Akshat Paul</span>
        </p>

        {/* Optional subtext */}
        <p className="mt-2 text-xs text-slate-500">
          Version 2025
        </p>

        {/* Scroll to top button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-5 mx-auto flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-[#071018] border border-[#123] text-neon hover:border-electric/50
                     transition-all"
        >
          Back to Top <FiArrowUpRight />
        </motion.button>
      </motion.div>
    </footer>
  );
}
