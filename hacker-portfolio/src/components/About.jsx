import React from "react";
import { FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";

export default function About() {
  const skills = [
    { icon: <FaLaptopCode />, name: "Frontend - React, Vite, Tailwind" },
    { icon: <FaServer />, name: "Backend - Node, Express, Flask" },
    { icon: <FaDatabase />, name: "Databases - Postgres, Supabase" },
  ];

  return (
    <section id="about" className="py-16 mt-20 flex flex-col justify-between items-center">
      <h2 className="text-2xl font-semibold neon-text">About Me</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="mt-4 text-slate-300">
          <p>I'm a full-stack engineer with a soft spot for clean UX and fast apps. I enjoy building distributed systems and delightful frontends.</p>
          <p className="mt-4">I design, develop, and deploy — from prototypes to production.</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {skills.map((s, i) => (
            <div key={i} className="p-4 card rounded-xl flex items-center gap-4">
              <div className="text-neon text-2xl">{s.icon}</div>
              <div className="text-slate-200">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
