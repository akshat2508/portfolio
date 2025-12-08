import React from "react";
import { FaLaptopCode, FaServer, FaDatabase, FaBolt, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { icon: <FaLaptopCode />, name: "Frontend — React, Angular, Tailwind, Vite" },
    { icon: <FaServer />, name: "Backend — Node.js, Express, Flask, Supabase" },
    { icon: <FaDatabase />, name: "Databases — PostgreSQL, Supabase Auth & Storage" },
    { icon: <FaBolt />, name: "Real-Time Systems — Socket.io, Event-Driven APIs" },
    { icon: <FaUserTie />, name: "Leadership — CTO at PI Pascal’s Institute" },
  ];

  const stats = [
    "2+ Years Full-Stack Experience",
    "Built LMS for 5000+ Students",
    "Shipped 10+ Real Projects",
    "Ranked 7th in Cybersecurity CTF",
  ];

  return (
    <section id="about" className="py-24 mt-10 flex flex-col items-center">
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-semibold neon-text text-center"
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="mt-10 grid lg:grid-cols-2 gap-10 max-w-5xl">

        {/* LEFT — Text */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-300 space-y-4"
        >
          <p className="leading-relaxed text-lg">
            Hey, I’m <span className="text-electric font-semibold">Akshat</span> — 
            a full-stack engineer who loves building fast, reliable and beautiful digital experiences.
          </p>

          <p className="leading-relaxed">
            I specialize in <span className="text-neon">real-time systems</span>, 
            <span className="text-neon"> full-stack engineering</span>, and 
            <span className="text-neon"> scalable education platforms</span>.
            I’ve shipped production systems used by thousands and designed 
            architectures that balance performance, UX, and maintainability.
          </p>

          <p className="leading-relaxed">
            Currently serving as <span className="text-electric font-semibold">CTO at PI Pascal’s Institute</span>, 
            where I build learning systems, automation tools, and high-scale dashboards.
          </p>

          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-lg card border border-[#0f1a20] text-center"
              >
                <p className="text-slate-200">{s}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Skills Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4"
        >
          {skills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, boxShadow: "0 0 18px rgba(0,255,213,0.15)" }}
              className="p-4 card rounded-xl flex items-center gap-4 cursor-pointer border border-[#112226]"
            >
              <div className="text-neon text-2xl">{s.icon}</div>
              <div className="text-slate-200 text-sm md:text-base">{s.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
