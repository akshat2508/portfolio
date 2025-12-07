import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  { 
    id: 1, 
    title: "AnonTalk — Anonymous Chat & Mood Matching",
    desc: "Privacy-first real-time chat app with 28 chat rooms, encrypted mood-based matching, instant deletion, and OTA updates.",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
    img: "/projects/anontalk.png",
    link: "https://anon-talk-web.vercel.app/",  // add live link if you deploy
    github: "https://github.com/akshat2508/AnonTalk"
  },

  { 
    id: 2, 
    title: "DingDingGO — Multiplayer Gaming Platform",
    desc: "A scalable real-time gaming app featuring matchmaking, lobbies, chat, and multiple mini-games powered by Socket.io.",
    tags: ["React", "Socket.io", "Supabase", "Node.js"],
    img: "/projects/dingdinggo.png",
    link: "https://dingdinggo.vercel.app/",  // live link (optional)
    github: "https://github.com/akshat2508/DingDingGo"
  },

  { 
    id: 3, 
    title: "PI Pascals Institute LMS",
    desc: "Full-scale LMS for 5000+ users with SEO-optimized pages, real-time dashboards, role-based access, and 38% faster load speeds.",
    tags: ["Angular", "Supabase", "PostgreSQL", "CI/CD"],
    img: "/projects/lms.png",
    link: "https://www.pascalsinstitute.com/",  // if deployed anywhere
    github: "https://github.com/akshat2508/pascals-institute"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl neon-text font-semibold text-center">Projects</h2>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 * i, duration: 0.5 }}
            viewport={{ once: true }}
            className="card rounded-xl overflow-hidden hover:scale-[1.02] transition-all shadow-lg"
          >
            {/* IMAGE PREVIEW */}
            <div className="overflow-hidden">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-40 object-cover hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg font-semibold neon-text">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.desc}</p>

              {/* TAGS */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-2 py-1 rounded bg-[#071018] border border-[#0f1a23] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex gap-4">

                {p.link && (
                  <a 
                    href={p.link}
                    target="_blank"
                    className="text-neon text-sm flex items-center gap-2 hover:underline"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}

                {p.github && (
                  <a 
                    href={p.github}
                    target="_blank"
                    className="text-electric text-sm flex items-center gap-2 hover:underline"
                  >
                    <FiGithub /> GitHub
                  </a>
                )}

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
