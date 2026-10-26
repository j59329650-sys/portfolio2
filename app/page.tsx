'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ParticleCanvas from "./ParticaleCanvas";

// React Icons import
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaBars, FaTimes } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ph");
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু টগল করার জন্য স্টেট

  const projectsList = [
    {
      id: "1",
      title: "SmartResell",
      image: "/project1.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      description: "SmartResell is a modern second-hand marketplace where users can browse products, view product details, and manage their buying and selling activities.",
      live: "https://b13-a10-smartresell-client.vercel.app/",
      github: "https://github.com/j59329650-sys/b13-a10-smartresell-client",
    },
    {
      id: "2",
      title: "DocAppoint",
      image: "/project2.png",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
      description: "A responsive job portal that allows users to explore available jobs and find suitable career opportunities through a clean and user-friendly interface.",
      live: "https://b13-ex09.vercel.app",
      github: "https://github.com/j59329650-sys/B13-Ex09",
    },
    {
      id: "3",
      title: "DigiTools",
      image: "/project3.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      description: "A modern and responsive e-commerce website designed to provide users with a smooth product browsing and shopping experience.",
      live: "https://j59329650-sys.github.io/B13-Ex06/",
      github: "https://github.com/j59329650-sys/B13-Ex06",
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-300 font-sans selection:bg-[#64ffda] selection:text-black relative">

      {/* Navbar with Mobile Hamburger Menu */}
      <nav className="fixed left-0 right-0 top-0 z-50 bg-[#0a192f]/90 backdrop-blur-md px-4 sm:px-6 lg:px-12 py-4 border-b border-slate-800/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Mobile-এ বাঁ দিকে হ্যামবার্গার মেনু বাটন এবং ডেসকটপে লোগো */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-white text-2xl p-1 focus:outline-none border border-slate-700 rounded p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <Link href="/" className="text-base sm:text-lg font-bold tracking-wide text-white hover:text-[#64ffda] transition">
              Tahmina Akter
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex text-sm font-medium">
            <Link href="#about" className="text-slate-300 transition hover:text-[#64ffda]">About</Link>
            <Link href="#experience" className="text-slate-300 transition hover:text-[#64ffda]">Experience</Link>
            <Link href="#projects" className="text-slate-300 transition hover:text-[#64ffda]">Projects</Link>
            <Link href="#contact" className="text-slate-300 transition hover:text-[#64ffda]">Contact</Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-lg sm:text-xl text-slate-300">
            <a href="mailto:tahmina.learn@gmail.com" title="Email" className="hover:text-[#64ffda] transition-all">
              <HiMail />
            </a>
            <a href="https://github.com/j59329650-sys" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-[#64ffda] transition-all">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tahmina-akter-9a41333b6/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-[#64ffda] transition-all">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a192f] border-b border-slate-800 px-6 py-6 flex flex-col gap-4 shadow-xl">
            <Link 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-[#64ffda] text-base font-medium transition"
            >
              About
            </Link>
            <Link 
              href="#experience" 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-[#64ffda] text-base font-medium transition"
            >
              Experience
            </Link>
            <Link 
              href="#projects" 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-[#64ffda] text-base font-medium transition"
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-[#64ffda] text-base font-medium transition"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section (Mobile: আগে ইমেজ/ক্যানভাস, নিচে টেক্সট) */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 pt-28 pb-12">
        <div className="mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 w-full max-w-7xl items-center gap-8 lg:gap-12">
          
          {/* Text Section (Mobile-এ নিচে থাকবে) */}
          <div className="z-10 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl tracking-tight">
              hi, <span className="text-[#64ffda]">tahmina</span> here.
            </h1>

            <p className="mt-4 sm:mt-6 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-slate-400">
              Frontend engineer and developer. I build responsive web applications with React & Next.js by day and make interactive web projects by night.
            </p>

            <div className="mt-6 sm:mt-8">
              <a
                href="mailto:tahmina.learn@gmail.com"
                className="inline-flex items-center gap-2 rounded border border-[#64ffda] bg-transparent px-6 py-3 font-mono text-sm font-semibold text-[#64ffda] transition hover:bg-[#64ffda]/10"
              >
                <HiMail className="text-lg" /> Say hi!
              </a>
            </div>
          </div>

          {/* Particle Canvas / Image Section (Mobile-এ উপরে থাকবে) */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative flex items-center justify-center scale-90 sm:scale-100">
              <ParticleCanvas />
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            <span className="text-[#64ffda] font-mono">/</span> about me
          </h2>
          <div className="h-[1px] bg-slate-700/60 flex-1 max-w-xs"></div>
        </div>

        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-slate-400 leading-relaxed text-sm sm:text-base">
            <p>
              I am currently a <span className="text-white font-semibold">Frontend Developer</span> working with modern web stacks. Previously, I completed intensive full-stack development training at <span className="text-[#64ffda]">Programming Hero</span>.
            </p>
            <p>
              Here are some technologies I have been working with:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-mono text-slate-300 pt-2">
              <li className="flex items-center gap-2"><span className="text-[#64ffda]">►</span> JavaScript (ES6+)</li>
              <li className="flex items-center gap-2"><span className="text-[#64ffda]">►</span> TypeScript</li>
              <li className="flex items-center gap-2"><span className="text-[#64ffda]">►</span> React.js</li>
              <li className="flex items-center gap-2"><span className="text-[#64ffda]">►</span> Next.js</li>
              <li className="flex items-center gap-2"><span className="text-[#64ffda]">►</span> Tailwind CSS</li>
              <li className="flex items-center gap-2"><span className="text-[#64ffda]">►</span> MongoDB</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative group w-[200px] h-[240px] sm:w-[240px] sm:h-[280px]">
              <div className="absolute inset-0 rounded-xl bg-[#64ffda] translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-slate-800 border border-slate-700">
                <Image
                  src="/profile1.png"
                  alt="Tahmina"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            <span className="text-[#64ffda] font-mono">/</span> experience
          </h2>
          <div className="h-[1px] bg-slate-700/60 flex-1 max-w-xs"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          <div className="flex md:flex-col overflow-x-auto border-b md:border-b-0 md:border-l border-slate-700">
            <button
              onClick={() => setActiveTab("ph")}
              className={`px-4 py-3 text-left font-mono text-xs sm:text-sm whitespace-nowrap transition ${
                activeTab === "ph"
                  ? "text-[#64ffda] border-b-2 md:border-b-0 md:border-l-2 border-[#64ffda] bg-[#112240]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Programming Hero
            </button>
            <button
              onClick={() => setActiveTab("freelance")}
              className={`px-4 py-3 text-left font-mono text-xs sm:text-sm whitespace-nowrap transition ${
                activeTab === "freelance"
                  ? "text-[#64ffda] border-b-2 md:border-b-0 md:border-l-2 border-[#64ffda] bg-[#112240]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Frontend Projects
            </button>
          </div>

          <div className="flex-1 space-y-4">
            {activeTab === "ph" && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex flex-wrap items-center gap-2">
                  Web Development Graduate <span className="text-[#64ffda]">@ 
                    <a 
                      href="https://drive.google.com/file/d/1bIV1viPxXrDKVmuvdUJFQqqcZSiAXmDo/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      Programming Hero <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </span>
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">2025 - 2026</p>
                <ul className="mt-4 space-y-3 text-slate-400 text-xs sm:text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#64ffda]">►</span>
                    <span>Built scalable web applications using React.js, Next.js, Express.js, and MongoDB.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#64ffda]">►</span>
                    <span>Designed clean and responsive user interfaces using Tailwind CSS and DaisyUI.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "freelance" && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Junior Frontend Engineer <span className="text-[#64ffda]">@ Self-Employed</span>
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">PRESENT</p>
                <ul className="mt-4 space-y-3 text-slate-400 text-xs sm:text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#64ffda]">►</span>
                    <span>Developing modern full-stack products such as SmartResell and DocAppoint platforms.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            <span className="text-[#64ffda] font-mono">/</span> projects
          </h2>
          <div className="h-[1px] bg-slate-700/60 flex-1 max-w-xs"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsList.map((project) => (
            <div key={project.id} className="rounded bg-[#112240] p-5 sm:p-6 transition duration-300 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl sm:text-3xl text-[#64ffda]">📁</span>
                  <div className="flex items-center gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub Repo" className="text-slate-400 hover:text-[#64ffda] text-base sm:text-lg">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Preview" className="text-slate-400 hover:text-[#64ffda] text-base sm:text-lg">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white hover:text-[#64ffda] transition">{project.title}</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-[11px] sm:text-xs font-mono text-[#64ffda]">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-[#0a192f] px-2 py-1 rounded border border-[#64ffda]/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 leading-relaxed mb-8 text-sm sm:text-base">
          I'm currently looking for new frontend opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out!
        </p>
        <a
          href="mailto:tahmina.learn@gmail.com"
          className="inline-flex items-center gap-2 rounded border border-[#64ffda] px-6 sm:px-8 py-3 sm:py-4 font-mono text-sm text-[#64ffda] transition hover:bg-[#64ffda]/10"
        >
          <HiMail className="text-lg" /> Say Hello
        </a>
      </section>

    </main>
  );
}