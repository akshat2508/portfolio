"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";

/* IMPORT IMAGES from src/projects */
import anontalkImg from "../projects/anontalk.png";
import dingImg from "../projects/dingdinggo.png";
import lmsImg from "../projects/lms.png";
import mygitImg from "../projects/mygit.png";
import telegramImg from "../projects/telegrambot.png";

/* CATEGORIES */
const CATEGORIES = ["All", "Realtime", "Mobile", "Systems", "Tools"];

const projects = [
  {
    id: 1,
    cat: "Mobile",
    title: "AnonTalk — Anonymous Chat",
    desc: "Privacy-first chat with mood matching & auto-deleting sessions.",
    details: `Real-time Supabase channels, mood-based matching, secure sessions and OTA updates.`,
    tags: ["React Native", "Expo", "Supabase"],
    img: anontalkImg,
    link: "https://anon-talk-web.vercel.app/",
    github: "https://github.com/akshat2508/AnonTalk",
    year: 2024,
    stars: 42
  },
  {
    id: 2,
    cat: "Realtime",
    title: "DingDingGO — Multiplayer Hub",
    desc: "Socket.io powered mini-games with matchmaking & lobbies.",
    details: `Matchmaking engine, lobbies, presence & reconnection handling.`,
    tags: ["React", "Socket.io"],
    img: dingImg,
    link: "https://dingdinggo.vercel.app/",
    github: "https://github.com/akshat2508/DingDingGo",
    year: 2025,
    stars: 128
  },
  {
    id: 3,
    cat: "Realtime",
    title: "PI Pascal’s Institute LMS",
    desc: "LMS for 5000+ users with dashboards & SEO pages.",
    details: `Role-based auth, real-time dashboards, SSR landing pages.`,
    tags: ["Angular", "Postgres", "Supabase"],
    img: lmsImg,
    link: "https://www.pascalsinstitute.com/",
    github: "https://github.com/akshat2508/pascals-institute",
    year: 2025,
    stars: 210
  },
  {
    id: 4,
    cat: "Systems",
    title: "MyGit — Lightweight VCS (C++)",
    desc: "Custom Git-like VCS supporting commit, add, log & checkout.",
    details: `init, add, commit, log, status, checkout. Makefile based build.`,
    tags: ["C++", "CLI", "FileSystem"],
    img: mygitImg,
    github: "https://github.com/akshat2508/mygit",
    year: 2024,
    stars: 36
  },
  {
    id: 5,
    cat: "Tools",
    title: "API Health Telegram Bot",
    desc: "Monitors API health & alerts via Telegram.",
    details: `Periodic checks, latency analysis & alerts in Telegram.`,
    tags: ["Node", "Express", "Telegram API"],
    img: telegramImg,
    github: "https://github.com/akshat2508",
    year: 2025,
    stars: 19
  },
];

export default function ProjectsEnhanced() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [cursorVisible, setCursorVisible] = useState(true);
  const containerRef = useRef(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMouse({ x, y });
    };
    const onEnter = () => setCursorVisible(true);
    const onLeave = () => {
      setCursorVisible(false);
      setMouse({ x: -9999, y: -9999 });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // keyboard nav for modal
  useEffect(() => {
    const onKey = (e) => {
      if (!active) return;
      const currentIndex = filtered.findIndex((p) => p.id === active.id);
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") {
        const next = filtered[(currentIndex + 1) % filtered.length];
        if (next) setActive(next);
      }
      if (e.key === "ArrowLeft") {
        const prev = filtered[(currentIndex - 1 + filtered.length) % filtered.length];
        if (prev) setActive(prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, filtered]);

  return (
    <section id="projects" className="py-24 relative" ref={containerRef}>
      {/* PARALLAX LAYERS (optional decorative) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ transform: `translate3d(${(mouse.x - 400) * 0.02}px, ${(mouse.y - 300) * 0.02}px, 0)` }}
          className="absolute -left-40 -top-40 w-[480px] h-[480px] rounded-full bg-linear-to-br from-[#001420] to-[#002a3a] opacity-40 blur-3xl"
        />
        <motion.div
          style={{ transform: `translate3d(${(mouse.x - 400) * -0.02}px, ${(mouse.y - 300) * -0.02}px, 0)` }}
          className="absolute right-[-120px] bottom-[-120px] w-[680px] h-[680px] rounded-full bg-linear-to-tr from-[#050a1a] to-[#003344] opacity-30 blur-3xl"
        />
        <motion.div
          style={{ transform: `translate3d(${(mouse.x - 400) * 0.01}px, ${(mouse.y - 300) * 0.01}px, 0)` }}
          className="absolute inset-0"
        />
      </div>

      {/* SPOTLIGHT CURSOR */}
      <div
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-50 transition-opacity ${cursorVisible ? "opacity-100" : "opacity-0"}`}
        style={{ transform: `translate3d(${mouse.x - 40}px, ${mouse.y - 40}px, 0)` }}
      >
        <div className="w-20 h-20 rounded-full mix-blend-screen" style={{
          background: "radial-gradient(circle at 35% 30%, rgba(0,255,213,0.18), rgba(0,255,213,0.06) 30%, transparent 60%)"
        }} />
      </div>

      {/* Heading + filters */}
      <motion.h2 initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-4xl neon-text font-semibold text-center">
        Projects
      </motion.h2>

      <div className="mt-8 flex justify-center items-center gap-4">
        <div className="relative">
          <div className="flex gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === cat ? "neon-text" : "text-slate-400 hover:text-neon"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            className="absolute -bottom-2 h-0.5 rounded-full bg-linear-to-r from-neon to-electric"
            layout
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            style={{
              width: 60,
              left: (() => {
                const i = CATEGORIES.indexOf(filter);
                return `${i * 86}px`;
              })(),
            }}
          />
        </div>
      </div>

      {/* grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {filtered.map((p) => (
          <motion.article
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setActive(p)}
            whileHover={{ translateY: -8 }}
            className="relative cursor-pointer rounded-xl border border-[#0f1a23] overflow-hidden shadow-2xl bg-black/30"
          >
            <div className="relative overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover transition-transform duration-500" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <div className="px-2 py-1 rounded-full bg-[#071018]/80 text-xs text-slate-200 flex items-center gap-2">
                  <FiStar /> <span className="text-xs">{p.stars}</span>
                </div>
                <div className="px-2 py-1 rounded-full bg-[#071018]/80 text-xs text-slate-200">
                  {p.year}
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold neon-text">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm line-clamp-2">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-[#071018] border border-[#123] text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-slate-400">Click to open</div>
                <div className="flex gap-3">
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-neon text-sm flex items-center gap-2"><FiExternalLink /></a>}
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-electric text-sm flex items-center gap-2"><FiGithub /></a>}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={`card-${active.id}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="max-w-3xl w-full card rounded-2xl p-6 border border-[#123] bg-linear-to-b from-black/70 to-black/60"
            >
              <div className="flex gap-6 items-start">
                {/* use the active's img */}
                <img src={active.img} alt={active.title} className="w-40 h-28 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-2xl neon-text font-semibold">{active.title}</h3>
                  <p className="mt-3 text-slate-300 whitespace-pre-line">{active.details}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tags.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-[#071018] border border-[#123] text-xs text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    {active.link && (
                      <a href={active.link} target="_blank" rel="noreferrer" className="neon-text flex items-center gap-2">
                        <FiExternalLink /> Live
                      </a>
                    )}
                    {active.github && (
                      <a href={active.github} target="_blank" rel="noreferrer" className="text-electric flex items-center gap-2">
                        <FiGithub /> Repo
                      </a>
                    )}
                  </div>
                </div>
                <div>
                  <button onClick={() => setActive(null)} className="ml-auto px-3 py-2 rounded-md glow-btn neon-text">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
