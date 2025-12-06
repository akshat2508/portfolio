import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT TEXT SECTION */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title font-extrabold neon-text leading-tight"
          >
            Akshat Paul  
            <br />
            <span className="text-electric">Full-Stack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-slate-300 max-w-xl"
          >
            I build high-performance, scalable and user-focused applications.
            Currently working at <span className="text-neon font-semibold">PI Pascal's Institute</span> 
            as a Full-Stack Developer Intern, where I engineered a scalable LMS for 
            <span className="text-electric font-semibold"> 5000+ users</span>, improved page performance by 
            <span className="text-hot font-semibold"> 35%</span>, and helped boost user acquisition by 
            <span className="text-hot font-semibold"> 57%</span>.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 space-y-2 text-slate-400 text-sm"
          >
            <li>:) Scalable LMS, real-time dashboards, Supabase, CI/CD</li>
            <li>🔐 Anonymous Chat App with encrypted matching & OTA updates</li>
            <li>🏆 7th Rank in University Cybersecurity Hackathon</li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex gap-4"
          >
            <a href="#projects" className="px-5 py-3 rounded-md neon-text glow-btn hover:scale-115 duration-200">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-[#1b2630] text-slate-200 hover:scale-115 duration-200" >
              Contact Me
            </a>
          </motion.div>
        </div>


        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-100 h-130 rounded-2xl card neon-ring p-4 animate-[pulseNeon_3s_ease-in-out_infinite]">
            <img 
              src={avatar} 
              alt="Akshat Paul" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
