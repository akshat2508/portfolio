import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import profile from '../assets/profile.png'
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed w-full z-50 top-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>scrollTo("home")}>
          <div className="w-10 h-10 rounded-full neon-ring flex items-center justify-center">
            {/* <span className="text-sm neon-text font-bold">AP</span> */}
            <img src={profile} alt="" className="rounded-2xl"/>
          </div>
          <div>
            <div className="text-sm text-slate-300">Akshat Paul</div>
            <div className="text-xs text-slate-400">Full-Stack Dev</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="hover:text-electric transition">
              {l.label}
            </button>
          ))}
          <a href="https://drive.google.com/file/d/1G5hX3A5rFrXOmQbWe8jCqtJITaE6UuS2/view?usp=sharing" className="ml-4 px-4 py-2 rounded-md glow-btn neon-text hover:scale-115 duration-200">Resume</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 text-slate-200">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-bg/90 backdrop-blur-sm py-4">
          <div className="flex flex-col items-center gap-4">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-slate-200">{l.label}</button>
            ))}
            <a href="https://drive.google.com/file/d/1G5hX3A5rFrXOmQbWe8jCqtJITaE6UuS2/view?usp=sharing" className="px-6 py-2 rounded-md glow-btn neon-text hover:text-2xl">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
