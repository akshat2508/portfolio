"use client";
import React, { useEffect, useRef, useState } from "react";

/* COMMANDS */
const COMMANDS = {
  help: `Commands:
help — show commands
about — who I am
skills — list skills
projects — list projects
certs — list certifications
contact — contact info
resume — download resume
open <name> — open project (anon/ding/lms)
clear — clear terminal`,
  
  about: `Akshat Paul — Full-Stack Developer.
I build real-time apps, scalable systems and clean UX.`,

  skills: `Frontend: React, Angular, Tailwind
Backend: Node, Express, Supabase
Mobile: Flutter, React Native
Languages: TypeScript, JavaScript, C++, Python`,

  projects: `AnonTalk — https://github.com/akshat2508/AnonTalk
DingDingGO — https://github.com/akshat2508/DingDingGo
Pascals LMS — https://github.com/akshat2508/pascals-institute`,

  certs: `Udemy Certificates:
• Flutter Bootcamp
• Node.js Guide
• ML A-Z`,

  contact: `akshatpaul2006@gmail.com
  +91 9596571744`
};

export default function TerminalPro() {
  const [history, setHistory] = useState([
    { id: 1, type: "out", text: "Welcome to Akshat's terminal.\nType 'help' to start." }
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const [sound, setSound] = useState(false);

  const elRef = useRef(null);
  const inputRef = useRef(null);

  const knownCommands = Object.keys(COMMANDS).concat(["open", "clear", "resume"]);

  useEffect(() => {
  setTimeout(() => {
    inputRef.current?.focus({ preventScroll: true });
  }, 300);
  scrollToBottom();
}, []);


  const push = (line) =>
    setHistory((h) => [...h, { id: Date.now() + Math.random(), ...line }]);

  const scrollToBottom = () =>
    setTimeout(() => {
      elRef.current?.scrollTo({
        top: elRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 30);

  const beep = () => {
    if (!sound) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      o.frequency.value = 700;
      o.connect(ctx.destination);
      o.start();
      setTimeout(() => {
        o.stop();
        ctx.close();
      }, 60);
    } catch {}
  };

  const execute = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;

    push({ type: "in", text: `$ ${cmd}` });
    setCmdHistory((h) => [...h, cmd]);
    setHistIndex(-1);
    beep();

    const parts = cmd.split(" ");
    const root = parts[0].toLowerCase();

    if (root === "clear") {
      setHistory([]);
      return;
    }

    if (root === "open") {
      const name = parts.slice(1).join(" ").toLowerCase();
      if (name.includes("anon"))
        window.open("https://anon-talk-web.vercel.app/", "_blank");
      else if (name.includes("ding"))
        window.open("https://dingdinggo.vercel.app/", "_blank");
      else if (name.includes("lms") || name.includes("pasc"))
        window.open("https://www.pascalsinstitute.com/", "_blank");
      else push({ type: "out", text: `Unknown project: ${name}` });
      return;
    }

    if (root === "resume") {
      window.open("https://drive.google.com/file/d/1G5hX3A5rFrXOmQbWe8jCqtJITaE6UuS2/view?usp=sharing", "_blank");
      return;
    }

    if (COMMANDS[root]) {
      push({ type: "out", text: COMMANDS[root] });
    } else {
      push({ type: "out", text: `Command not found: ${root}. Try 'help'.` });
    }

    scrollToBottom();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const idx =
        histIndex === -1
          ? cmdHistory.length - 1
          : Math.max(0, histIndex - 1);
      setHistIndex(idx);
      setInput(cmdHistory[idx]);
    } 
    
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      if (histIndex === -1) {
        setInput("");
        return;
      }
      const idx = Math.min(cmdHistory.length - 1, histIndex + 1);
      setHistIndex(idx);
      setInput(cmdHistory[idx] || "");
    } 
    
    else if (e.key === "Tab") {
      e.preventDefault();
      const candidates = knownCommands.filter((c) =>
        c.startsWith(input.trim())
      );
      if (candidates.length === 1) setInput(candidates[0] + " ");
      else if (candidates.length > 1)
        push({ type: "out", text: `Matches: ${candidates.join(", ")}` });
    }
  };

  return (
    <section id="terminal" className="py-20">
      <h2 className="text-4xl neon-text font-semibold text-center mb-3">
        Interactive Terminal
      </h2>
      <p className="text-center text-slate-400 text-sm mb-8">
        Explore my profile using hacker-style commands — try{" "}
        <span className="text-electric">help</span>.
      </p>

      {/* WIDER TERMINAL WRAPPER */}
      <div className="max-w-4xl mx-auto">
        <div className="card p-5 rounded-xl border border-[#0f1720] shadow-lg">

          {/* BIGGER TERMINAL WINDOW */}
          <div
            ref={elRef}
            className="h-96 overflow-y-auto scrollbar-thin scrollbar-track-[#05060a] scrollbar-thumb-[#1f3340] mb-4 whitespace-pre-line p-3 rounded-lg bg-[#05070d]/40"
            style={{ fontFamily: "monospace", fontSize: 14 }}
          >
            {history.map((h) => (
              <div
                key={h.id}
                className={
                  (h.type === "in" ? "text-neon font-mono" : "text-slate-300") +
                  " whitespace-pre-line"
                }
              >
                {h.text}
              </div>
            ))}
          </div>

          {/* SOUND + HINT */}
          <div className="flex items-center gap-3 mb-3">
            <label className="flex items-center gap-2 text-sm text-slate-400">
              <input
                type="checkbox"
                checked={sound}
                onChange={() => setSound(!sound)}
              />
              Sound
            </label>

            <div className="text-xs text-slate-500 ml-auto">
              Try: <span className="text-electric">help</span>,{" "}
              <span className="text-electric">open ding</span>
            </div>
          </div>

          {/* INPUT ROW */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              execute(input);
              setInput("");
            }}
            className="flex items-center gap-3"
          >
            <span className="text-neon font-mono">➜</span>

            <input
              ref={inputRef}
              value={input}
              onKeyDown={onKeyDown}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[#071018] p-3 rounded-md border border-[#112226] text-slate-200"
              placeholder="type a command (help)"
            />

            <button
              type="submit"
              className="px-4 py-2 neon-text glow-btn rounded-md"
            >
              Run
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
