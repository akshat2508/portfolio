import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const certificates = [
  {
    id: 1,
    title: "The Complete Flutter Development Bootcamp",
    provider: "Udemy",
    img: "/certs/flutter-bootcamp.png",
    link: "https://www.udemy.com/certificate/your-link"
  },
  {
    id: 2,
    title: "Node.js, Express & MongoDB Complete Guide",
    provider: "Udemy",
    img: "/certs/nodejs.png",
    link: "https://www.udemy.com/certificate/your-link"
  },
  {
    id: 3,
    title: "Machine Learning A-Z: Hands-On Python & R",
    provider: "Udemy",
    img: "/certs/ml.png",
    link: "https://www.udemy.com/certificate/your-link"
  }
];

export default function Certifications() {
  const [modal, setModal] = useState(null);

  return (
    <section id="certifications" className="py-20">
      <h2 className="text-2xl neon-text font-semibold">Certifications</h2>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            {/* GLOWING BORDER */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon/20 via-electric/20 to-hot/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

            {/* CARD */}
            <div
              onClick={() => setModal(c.img)}
              className="card p-0 rounded-xl overflow-hidden border border-[#1b2a33] 
                         group-hover:shadow-[0_0_25px_rgba(0,255,213,0.25)]
                         transition-all duration-300 hover:scale-[1.03]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Ribbon */}
              <div className="absolute top-2 left-2 bg-hot text-xs px-3 py-1 rounded-full text-black font-bold shadow">
                Verified
              </div>

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-44 object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* TEXT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-neon to-electric bg-clip-text text-transparent">
                  {c.title}
                </h3>
                <p className="mt-2 text-slate-300 text-sm">{c.provider}</p>

                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    className="flex items-center gap-2 text-neon text-sm mt-4 hover:underline"
                  >
                    <FiExternalLink /> View Certificate
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL PREVIEW */}
      {modal && (
        <motion.div
          onClick={() => setModal(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 cursor-pointer"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={modal}
            className="max-w-3xl rounded-xl shadow-[0_0_40px_rgba(0,255,213,.4)]"
          />
        </motion.div>
      )}
    </section>
  );
}
