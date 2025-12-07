import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import SkillMapPro from "./components/SkillMapPro";
import TerminalPro from "./components/TerminalPro";
import GitHubWrapped from "./components/GithubWrapped";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <GitHubWrapped/>
        <SkillMapPro/>
        <TerminalPro/>
        <About />
        <Projects />
        <Certifications/>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
