"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiX } from "react-icons/fi";
import chatgptEss from "../certs/chatgpt-essentials.png"
import cssJS from "../certs/css-js-complete.png"
import flutterDart from "../certs/flutter-dart-complete.png"
import genAi from "../certs/generative-ai-tools.png"
import hackerRank from "../certs/hackerrank-problem-solving.png"
import noCode from "../certs/no-code-ai.png"
import webFrame from "../certs/web-frameworks.png"
/* ---------------- FILTER CATEGORIES ---------------- */
const categories = ["All", "Development", "AI",  "Mobile" , "Other"];

/* ---------------- CERTIFICATE DATA ---------------- */
const certificates = [
  {
    id: 1,
    cat: "Development",
    title: "Fundamental Course in Web Frameworks",
    provider: "Udemy",
    hours: "1h",
    level: "Beginner",
    img: webFrame,
    link: "#"
   
  },
  {
    id: 2,
    
    cat: "Mobile",
    title: "Flutter & Dart — The Complete Guide",
    provider: "Udemy",
    hours: "30h",
    level: "Intermediate",
    img: flutterDart,
    link: "#"
  },
  {
    id: 3,
    cat: "AI",
    title: "Build Generative AI Apps & Solutions (No-Code Tools)",
    provider: "Udemy",
    hours: "5.5h",
    level: "Beginner",
    img: noCode,
    link: "#"
  },
  {
    id: 4,
    cat: "Other",
    title: "Certificate of Accomplishment — Problem Solving (Basic)",
    provider: "HackerRank",
    hours: "—",
    level: "Beginner",
    img: hackerRank,
    link: "#"
  },
  {
    id: 5,
     cat: "AI",
    title: "ChatGPT Made Easy: AI Essentials for Beginners",
    provider: "Udemy",
    hours: "37h",
    level: "Beginner",
    img: chatgptEss,
    link: "#"

    
  },
  {
    id: 6,
    cat: "Development",
    title: "CSS & JavaScript Complete Course for Beginners",
    provider: "Udemy",
    hours: "4h",
    level: "Beginner",
    img: cssJS,
    link: "#"
  },
  {
    id: 7,
    cat: "AI",
    title: "Master Generative AI & AI Tools (ChatGPT and More)",
    provider: "Udemy",
    hours: "14h",
    level: "Intermediate",
    img: genAi,
    link: "#"
    
  }
];


export default function Certifications() {
  const [modal, setModal] = useState(null);
  const [filter, setFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);

  /* -------- FILTERED DATA -------- */
  const filtered =
    filter === "All"
      ? certificates
      : certificates.filter((c) => c.cat === filter);

  /* -------- APPLY SHOW MORE LIMIT -------- */
  const visibleList = showMore ? filtered : filtered.slice(0, 3);

  /* -------- KEYBOARD NAV INSIDE MODAL -------- */
  useEffect(() => {
    const handleKey = (e) => {
      if (!modal) return;
      const list = filtered;
      const index = list.findIndex((c) => c.id === modal.id);

      if (e.key === "Escape") setModal(null);
      if (e.key === "ArrowRight") setModal(list[(index + 1) % list.length]);
      if (e.key === "ArrowLeft")
        setModal(list[(index - 1 + list.length) % list.length]);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modal, filtered]);

  return (
    <section id="certifications" className="py-24">
      <h2 className="text-4xl neon-text font-semibold text-center">
        Certifications
      </h2>

      {/* ---------------- FILTER BUTTONS ---------------- */}
      <div className="flex justify-center mt-8">
        <div className="relative flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowMore(false); // reset when category changes
              }}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                filter === cat
                  ? "neon-text"
                  : "text-slate-400 hover:text-neon"
              }`}
            >
              {cat}
            </button>
          ))}

          {/* MOVING UNDERLINE */}
          <motion.div
            className="absolute -bottom-1 h-[3px] rounded-full bg-linear-to-r from-neon to-electric"
            layout
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            style={{
              width: "85px",
              left: `${categories.indexOf(filter) * 95}px`,
            }}
          />
        </div>
      </div>

      {/* ---------------- GRID ---------------- */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 max-w-6xl mx-auto px-4">
        {visibleList.map((c) => (
          <motion.div
            key={c.id}
            onClick={() => setModal(c)}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, rotateX: 6, rotateY: -6 }}
            transition={{ duration: 0.4 }}
            className="relative cursor-pointer rounded-xl overflow-hidden border border-[#1b2631]
                       bg-black/40 backdrop-blur-md p-0.5 group"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                            transition-all duration-700 bg-[conic-gradient(var(--color-neon),transparent,transparent)] 
                            animate-[spin_6s_linear_infinite]" />

            <div className="relative rounded-xl bg-[#05070b] p-5 h-full">
              {/* Ribbon */}
              <div className="absolute top-3 left-3 px-3 py-1 text-xs font-bold bg-hot text-black rounded-full shadow">
                Verified
              </div>

              <img
                src={c.img}
                alt={c.title}
                className="rounded-lg w-full h-44 object-cover group-hover:scale-110 transition-all duration-500"
              />

              <h3 className="text-lg font-semibold mt-4 bg-linear-to-r from-neon to-electric 
                             bg-clip-text text-transparent">
                {c.title}
              </h3>

              <p className="text-slate-300 text-sm mt-1">{c.provider}</p>

              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="px-2 py-1 rounded-full bg-[#071018] border border-[#123] text-xs text-slate-300">
                  {c.hours}
                </span>
                <span className="px-2 py-1 rounded-full bg-[#071018] border border-[#123] text-xs text-slate-300">
                  {c.level}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ---------------- SHOW MORE BUTTON ---------------- */}
      {filtered.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 rounded-full neon-text glow-btn text-sm hover:scale-110 transition-all"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* ---------------- MODAL ---------------- */}
      <AnimatePresence>
        {modal && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 cursor-pointer px-4"
          >
            <motion.div
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              className="relative max-w-3xl w-full bg-[#05070b]/80 rounded-xl border border-[#1b2631] p-6 card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 text-neon text-xl"
              >
                <FiX />
              </button>

              <img
                src={modal.img}
                alt={modal.title}
                className="rounded-lg mx-auto max-h-[70vh] mb-6 shadow-[0_0_25px_rgba(0,255,213,0.3)]"
              />

              <h3 className="text-2xl neon-text font-semibold text-center">
                {modal.title}
              </h3>
              <p className="text-center text-slate-400 mt-2">{modal.provider}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
