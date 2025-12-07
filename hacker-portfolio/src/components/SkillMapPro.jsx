"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

/* ————— UPDATED FULL-STACK CATEGORIES ————— */
const categories = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { n: "C / C++", p: 90 },
      { n: "SQL (Postgres)", p: 80 },
      { n: "JavaScript", p: 92 },
      { n: "TypeScript", p: 88 },
      { n: "HTML/CSS", p: 95 },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { n: "React", p: 90 },
      { n: "Angular", p: 80 },
      { n: "Node.js", p: 85 },
      { n: "Tailwind CSS", p: 92 },
      { n: "REST API", p: 88 },
      { n: "Supabase", p: 84 },
    ],
  },
  {
    id: "tools",
    label: "Developer Tools",
    skills: [
      { n: "Git", p: 90 },
      { n: "Docker", p: 75 },
      { n: "Google Analytics", p: 70 },
      { n: "VS Code", p: 95 },
      { n: "Zed Editor", p: 85 },
      { n: "Xcode", p: 80 },
      { n: "Visual Studio", p: 78 },
    ],
  },
  {
    id: "database",
    label: "Database & Cloud",
    skills: [
      { n: "PostgreSQL", p: 82 },
      { n: "Supabase Auth", p: 78 },
      { n: "Supabase Edge Functions", p: 75 },
    ],
  },
  {
    id: "platforms",
    label: "Platforms",
    skills: [
      { n: "Vercel", p: 90 },
      { n: "Netlify", p: 82 },
      { n: "Cloudflare", p: 75 },
      { n: "Docker Deployments", p: 78 },
    ],
  },
];

/* ————— MATH UTILS ————— */
function polarToXY(cx, cy, r, angle) {
  const rad = (angle * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

/* ————— COMPONENT ————— */
export default function SkillMapPro() {
  const [active, setActive] = useState(null);
  const size = 520;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 160;

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl neon-text font-semibold text-center">
        Full-Stack Skill Map
      </h2>

      <div className="mt-10 flex flex-col items-center">
        <svg width={size} height={size} className="max-w-full">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#00ffd5" />
              <stop offset="100%" stopColor="#7df9ff" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* CENTER NODE */}
          <circle
            cx={cx}
            cy={cy}
            r={52}
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(0,255,213,0.08)"
          />
          <text
            x={cx}
            y={cy + 4}
            textAnchor="middle"
            fontSize="13"
            fill="#7df9ff"
            className="font-mono"
          >
            AKSHAT • PRO DEV
          </text>

          {/* CONNECTORS */}
          {categories.map((cat, i) => {
            const angle = (360 / categories.length) * i - 90;
            const [x, y] = polarToXY(cx, cy, radius, angle);
            return (
              <line
                key={cat.id}
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="rgba(0,255,213,0.05)"
                strokeWidth="1.2"
              />
            );
          })}

          {/* CATEGORY NODES */}
          {categories.map((cat, i) => {
            const angle = (360 / categories.length) * i - 90;
            const [x, y] = polarToXY(cx, cy, radius, angle);
            const isActive = active === cat.id;

            return (
              <g
                key={cat.id}
                transform={`translate(${x}, ${y})`}
                style={{ cursor: "pointer" }}
                onClick={() => setActive(isActive ? null : cat.id)}
              >
                <circle
                  r={isActive ? 40 : 30}
                  fill={isActive ? "url(#g1)" : "rgba(255,255,255,0.03)"}
                  stroke={isActive ? "#00ffd5" : "rgba(255,255,255,0.06)"}
                  strokeWidth="1.5"
                  filter={isActive ? "url(#glow)" : ""}
                />
                <text
                  x={0}
                  y={5}
                  textAnchor="middle"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 16, // increased size
                    fontWeight: 700, // bold
                    fill: isActive ? "#071018" : "#9aa6b2",
                  }}
                >
                  {cat.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* DETAILS PANEL */}
        <motion.div layout className="mt-8 w-full max-w-3xl">
          <div className="card p-6 rounded-xl">
            {active ? (
              <>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg neon-text font-semibold">
                    {categories.find((c) => c.id === active).label}
                  </h3>
                  <button
                    onClick={() => setActive(null)}
                    className="text-slate-400 text-sm hover:text-electric"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {categories
                    .find((c) => c.id === active)
                    .skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-slate-200 text-sm">
                          <span>{skill.n}</span>
                          <span className="text-electric">{skill.p}%</span>
                        </div>

                        {/* BAR */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.p}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-2 rounded bg-[#071018] mt-1 overflow-hidden"
                        >
                          <div className="h-full w-full bg-electric/60 rounded"></div>
                        </motion.div>
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <p className="text-slate-400 text-center">
                Click a category to view detailed skills.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
