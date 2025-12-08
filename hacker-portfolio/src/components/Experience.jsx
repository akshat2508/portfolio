"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";

/* ===========================================
   WORK EXPERIENCE (Chronological)
   =========================================== */
const workExp = [
  {
    year: "2023",
    title: "Flutter Developer Intern",
    desc: `Built UI-rich apps, animations, and responsive layouts.
Perfected fundamentals of Dart, widgets, and mobile-first design.`,
    tech: "Flutter, Dart"
  },
  {
    year: "2024 – 2025",
    title: "Full-Stack Developer Intern — PI Pascal’s Institute",
    desc: `Developed LMS for 5000+ users.
↑ Boosted load speed by 38%, ↑ conversions by 57%.
Implemented dashboards, RBAC, SEO pages, and DB optimization.`,
    tech: "Angular, Supabase, PostgreSQL, CI/CD"
  },
  {
    year: "2025 – Present",
    title: "CTO — PI Pascal’s Institute",
    desc: `Lead engineering, infrastructure and product development.
Design scalable systems, guide teams, streamline development workflows.`,
    tech: "Leadership, System Design, Architecture"
  }
];

/* ===========================================
   EDUCATION
   =========================================== */
const education = [
  {
    year: "2023 – Present",
    title: "B.Tech in Computer Science — Lovely Professional University",
    desc: `CGPA: 8.21  
Core Courses: OS, DBMS, CN, OOP, Data Structures, Algorithms, Distributed Systems.`,
    tech: "Computer Science Engineering"
  },
  {
    year: "2020 – 2022",
    title: "Higher Secondary Education — Ramisht Higher Secondary School, Basohli",
    desc: `Completed 10th & 12th with strong foundations in Mathematics, Physics, and Computer Science.`,
    tech: "Science Stream"
  }
];

/* ===========================================
   PERFECT TILT CARD
   =========================================== */
function TiltCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 16 }}
      className="card rounded-2xl px-6 py-5 shadow-xl backdrop-blur-md border border-[#1a2833]"
    >
      {children}
    </motion.div>
  );
}

/* ===========================================
   TIMELINE ENTRY (Left/Right aligned)
   =========================================== */
function Entry({ item, index, type }) {
  const Icon = type === "work" ? FaBriefcase : FaUserGraduate;
  const isLeft = index % 2 === 0;
  const themeColor = type === "work" ? "var(--color-neon)" : "var(--color-electric)";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative flex w-full ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`
          w-full md:w-[44%] 
          ${isLeft ? "md:pr-12" : "md:pl-12"} 
          /* pushes card AWAY from timeline */
        `}
      >
        <TiltCard>
          <div className="flex items-center gap-3 mb-2">
            <Icon style={{ color: themeColor }} className="text-xl" />
            <div className="font-mono text-sm text-neon">{item.year}</div>
          </div>

          <div className="text-xl font-semibold text-slate-200">{item.title}</div>
          <p className="text-slate-300 mt-2 whitespace-pre-line">{item.desc}</p>
          <div className="text-electric text-sm mt-3">{item.tech}</div>
        </TiltCard>
      </div>

      {/* Perfectly centered pulsing node */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="
          absolute 
          left-1/2 -translate-x-1/2 
          top-1/2 -translate-y-1/2 
          w-5 h-5 rounded-full bg-neon 
          shadow-[0_0_20px_rgba(0,255,213,0.8)]
          z-20
        "
      />
    </motion.div>
  );
}


/* ===========================================
   MAIN COMPONENT
   =========================================== */
export default function Experience() {
  const [section, setSection] = useState("work");

  return (
    <section id="experience" className="py-24 relative">

      {/* Heading */}
      <h2 className="text-4xl neon-text font-semibold text-center">Experience</h2>
      <p className="text-center text-slate-400 mt-2">
        A timeline of my journey — both professional and academic.
      </p>

      {/* Toggle Buttons */}
      <div className="mt-10 flex justify-center gap-4">
        <button
          className={`px-6 py-2 rounded-full text-sm transition-all ${
            section === "work" ? "neon-text border border-neon" : "text-slate-400 border border-transparent"
          }`}
          onClick={() => setSection("work")}
        >
          Work Experience
        </button>

        <button
          className={`px-6 py-2 rounded-full text-sm transition-all ${
            section === "edu" ? "text-electric border border-electric" : "text-slate-400 border border-transparent"
          }`}
          onClick={() => setSection("edu")}
        >
          Education
        </button>
      </div>

      {/* Timeline Container */}
      <div className="relative mt-20 max-w-4xl mx-auto">

        {/* Perfect Center Spine */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.8 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-1
                     bg-linear-to-b from-neon via-electric to-hot rounded-full opacity-80"
        />

        {/* Entries */}
        <div className="flex flex-col gap-20">
          {(section === "work" ? workExp : education).map((item, index) => (
            <Entry key={index} item={item} index={index} type={section === "work" ? "work" : "edu"} />
          ))}
        </div>

      </div>
    </section>
  );
}
