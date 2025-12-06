import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Flutter Developer Intern",
    desc: `Started my development journey by building UI-heavy Flutter applications.
Learned state management, widget trees, animations and mobile-first design.`,
    tech: "Flutter, Dart"
  },
  {
    year: "2024 – 2025",
    title: "Full-Stack Developer Intern — PI Pascal’s Institute",
    desc: `Engineered a scalable LMS for 5000+ students using Angular + Supabase.
Improved load speed by 38%, built SEO landing pages increasing conversions by 57%.
Implemented role-based auth, dashboards and optimized database performance.`,
    tech: "Angular, Supabase, CI/CD, PostgreSQL"
  },
  {
    year: "2025 – Present",
    title: "CTO — PI Pascal’s Institute",
    desc: `Promoted to CTO for owning architecture decisions, product design and engineering workflows.
Lead development teams, build scalable systems and ensure smooth product deployment cycles.`,
    tech: "System Design, Leadership, Architecture"
  },
  {
    year: "2024",
    title: "Hackathon — 7th Rank (Cybersecurity CTF)",
    desc: `Secured 7th rank independently by solving OSINT, crypto and exploit challenges.`,
    tech: "CTF, Cybersecurity"
  },
  {
    year: "2023 – Present",
    title: "B.Tech CSE — Lovely Professional University",
    desc: "Current CGPA: 8.21. Strong foundation in DS, OS, DBMS, Networking & Algorithms.",
    tech: "Computer Science Engineering"
  }
];

export default function Experience() {
  return (
    <section id="exp" className="py-20">
      <h2 className="text-2xl neon-text font-semibold text-center">Experience & Education</h2>

      <div className="relative mt-16 max-w-4xl mx-auto">

        {/* CENTER TIMELINE LINE */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-neon via-electric to-hot rounded-full opacity-70"></div>

        <div className="flex flex-col gap-16">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* CARD */}
                <div className="card p-6 rounded-xl w-[90%] md:w-[45%]">
                  <div className="text-neon font-mono text-sm">{item.year}</div>
                  <div className="text-xl text-slate-200 font-semibold">{item.title}</div>
                  <p className="text-slate-300 mt-2 whitespace-pre-line">{item.desc}</p>
                  <div className="text-electric text-sm mt-3">{item.tech}</div>
                </div>

                {/* GLOW DOT */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-5 h-5 bg-neon rounded-full shadow-[0_0_20px_rgba(0,255,213,0.8)]"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
