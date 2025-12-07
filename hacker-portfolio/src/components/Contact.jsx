import React, { useState } from "react";
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
    {
      icon: <FiGithub />,
      label: "GitHub",
      link: "https://github.com/akshat2508",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/akshat-paul",
    },
    {
      icon: <FiInstagram />,
      label: "Instagram",
      link: "https://instagram.com/__akshat25/",
    },
    {
      icon: <FiPhone />,
      label: "WhatsApp",
      link: "https://wa.me/919596571744",
    },
    {
      icon: <FiMail />,
      label: "Email",
      link: "mailto:akshatpaul2006@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl neon-text font-semibold text-center">Contact</h2>

      <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT — MESSAGE FORM */}
        <div className="card p-6 rounded-2xl border border-[#112226]">
          <h3 className="text-xl text-electric font-semibold text-center mb-4">
            Send me a message
          </h3>

          <form onSubmit={submit} className="grid gap-4">
            <input
              className="p-3 rounded-md bg-[#071018] border border-[#112226]"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              className="p-3 rounded-md bg-[#071018] border border-[#112226]"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <textarea
              className="p-3 rounded-md bg-[#071018] border border-[#112226]"
              rows={6}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            <button className="px-5 py-3 neon-text glow-btn rounded-full w-fit mx-auto hover:scale-110 transition-all">
              Send Message
            </button>

            {s && (
              <div className="text-sm text-green-400 text-center">
                Email draft opened — check your mail.
              </div>
            )}
          </form>
        </div>

        {/* RIGHT — SOCIAL LINKS */}
        <div className="card p-6 rounded-2xl border border-[#112226]">
          <h3 className="text-xl text-electric font-semibold text-center mb-4">
            Connect with me
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 mt-4">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.link}
                target="_blank"
                className="flex flex-col items-center gap-2 p-4 rounded-xl 
                           bg-[#071018] border border-[#112226]
                           text-slate-300 text-sm hover:scale-105 transition-all"
              >
                <div className="text-neon text-2xl">{s.icon}</div>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
