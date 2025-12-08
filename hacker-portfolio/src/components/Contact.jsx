"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [s, setS] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact — " + form.name);
    const body = encodeURIComponent(form.message + "\n\n— " + form.email);
    window.location.href = `mailto:akshatpaul256@gmail.com?subject=${subject}&body=${body}`;
    setS(true);
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: <FiGithub />, label: "GitHub", link: "https://github.com/akshat2508" },
    { icon: <FiLinkedin />, label: "LinkedIn", link: "https://linkedin.com/in/akshat-paul" },
    { icon: <FiInstagram />, label: "Instagram", link: "https://instagram.com/__akshat25/" },
    { icon: <FiPhone />, label: "WhatsApp", link: "https://wa.me/919596571744" },
    { icon: <FiMail />, label: "Email", link: "mailto:akshatpaul2006@gmail.com" }
  ];

  return (
    <section id="contact" className="py-24 relative">
      
      {/* Floating Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 bg-neon/10 blur-[120px] -top-10 left-10" />
        <div className="absolute w-72 h-72 bg-electric/10 blur-[140px] bottom-0 right-10" />
      </div>

      <h2 className="text-4xl neon-text font-semibold text-center">Contact</h2>
      <p className="text-center text-slate-400 mt-2">Let’s build something amazing together.</p>

      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT — MESSAGE FORM */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-8 rounded-2xl border border-[#112226] backdrop-blur-xl"
        >
          <h3 className="text-2xl text-electric font-semibold text-center mb-6">
            Send a Message
          </h3>

          <form onSubmit={submit} className="grid gap-5">
            <input
              className="p-3 rounded-lg bg-[#071018] border border-[#112226] text-slate-200 focus:ring-2 focus:ring-electric/40 outline-none transition"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              className="p-3 rounded-lg bg-[#071018] border border-[#112226] text-slate-200 focus:ring-2 focus:ring-electric/40 outline-none transition"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <textarea
              className="p-3 rounded-lg bg-[#071018] border border-[#112226] text-slate-200 focus:ring-2 focus:ring-electric/40 outline-none transition"
              rows={6}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            <button className="px-6 py-3 neon-text glow-btn rounded-full mx-auto hover:scale-110 transition duration-300">
              Send Message
            </button>

            {s && (
              <div className="text-sm text-green-400 text-center mt-2">
                Email draft opened — check your mail.
              </div>
            )}
          </form>
        </motion.div>

        {/* RIGHT — SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-8 rounded-2xl border border-[#112226] backdrop-blur-xl"
        >
          <h3 className="text-2xl text-electric font-semibold text-center mb-6">
            Connect With Me
          </h3>

          <div className="grid grid-cols-2 gap-6 mt-4">
            {socials.map((s, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 180, damping: 12 }}
                href={s.link}
                target="_blank"
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-[#071018] border border-[#112226] text-slate-300 shadow-lg hover:border-electric/40 transition-all"
              >
                <div className="text-3xl neon-text">{s.icon}</div>
                <span className="text-sm">{s.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
