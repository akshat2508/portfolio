"use client";

import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

export default function GitHubWrapped() {
  const stats = [
    {
      label: "GitHub Stats",
      img: "https://github-readme-stats-phi-ten.vercel.app/api?username=akshat2508&show_icons=true&theme=tokyonight&hide_border=true&count_private=true",
    },
    {
      label: "Top Languages",
      img: "https://github-readme-stats-phi-ten.vercel.app/api/top-langs/?username=akshat2508&layout=compact&theme=tokyonight&hide_border=true&langs_count=8",
    },
    {
      label: "Commit Streak",
      img: "https://streak-stats.demolab.com?user=akshat2508&theme=tokyonight&hide_border=true&cache_seconds=3600",
    },
    {
      label: "Activity Graph",
      img: "https://github-readme-activity-graph-r2.vercel.app/graph?username=akshat2508&bg_color=1a1b27&color=38bdae&line=70a5fd&point=bf91f3&area=true&hide_border=true",
    },
  ];

  return (
    <section id="github" className="py-20">
      <h2 className="text-4xl neon-text font-semibold text-center mb-10">
        GitHub Wrapped 
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={cardVariants}
            className="
              card px-4 py-6 rounded-2xl bg-[#0a0f18]/70 border border-[#113045]
              hover:shadow-[0_0_25px_rgba(0,255,213,0.2)]
              hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm
            "
          >
            <h3 className="text-lg font-semibold neon-text mb-4 text-center">
              {s.label}
            </h3>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={s.img}
                alt={s.label}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Small footer label */}
      <p className="text-center text-slate-500 text-sm mt-8">
        ✨ Always up-to-date — auto-fetched from GitHub APIs
      </p>
    </section>
  );
}
