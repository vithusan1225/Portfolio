import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaCode, FaRocket, FaTerminal, FaChevronDown, FaChevronUp, FaServer, FaDatabase } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [showSpecs, setShowSpecs] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 bg-gradient-to-b from-slate-100 via-blue-50/40 to-light dark:from-black dark:via-black dark:to-dark transition-colors duration-300"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/10 dark:bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Intro & CTAs with Transitions.dev Texts reveal */}
          <div className="lg:w-7/12 flex flex-col items-start text-left">
            <div className={`t-stagger ${isLoaded ? 'is-shown' : ''}`}>
              <div className="t-stagger-line t-stagger-line--1 inline-flex self-start w-fit items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary dark:text-accent">
                  Available for Projects
                </span>
              </div>

              <h1 className="t-stagger-line t-stagger-line--2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight">
                Hi, I'm{' '}
                <span className="text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-blue-200 dark:to-accent">
                  {personalInfo?.name || 'Vithusan'}
                </span>
              </h1>

              <h2 className="t-stagger-line t-stagger-line--3 text-2xl sm:text-3xl font-bold text-slate-700 dark:text-gray-300 mb-6 flex items-center gap-3">
                <span className="text-accent">⚡</span> {personalInfo?.title || 'Full Stack Developer'}
              </h2>

              <p className="t-stagger-line t-stagger-line--4 text-slate-600 dark:text-gray-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                {personalInfo?.bio ||
                  'Passionate full-stack developer specializing in creating high-performance web applications, robust backend architectures, and delightful user experiences.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="t-resize px-7 py-3.5 bg-accent hover:bg-accent-hover text-dark font-bold rounded-xl shadow-lg hover:shadow-accent/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <FaRocket className="text-sm" /> View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 text-slate-600 dark:text-gray-400">
              <span className="text-xs uppercase tracking-wider font-semibold mr-2 text-slate-400 dark:text-gray-500">
                Follow me:
              </span>
              <a
                href={personalInfo?.socials?.github || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                className="t-resize w-10 h-10 rounded-full bg-white dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center hover:text-primary dark:hover:text-accent hover:scale-110 hover:shadow-[0_0_16px_rgba(212,168,67,0.45)] shadow-sm transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo?.socials?.linkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noreferrer"
                className="t-resize w-10 h-10 rounded-full bg-white dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center hover:text-[#0a66c2] hover:scale-110 hover:shadow-[0_0_16px_rgba(10,102,194,0.45)] shadow-sm transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={personalInfo?.socials?.twitter || 'https://x.com'}
                target="_blank"
                rel="noreferrer"
                className="t-resize w-10 h-10 rounded-full bg-white dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center hover:text-black dark:hover:text-white hover:scale-110 hover:shadow-[0_0_16px_rgba(15,23,42,0.45)] dark:hover:shadow-[0_0_16px_rgba(255,255,255,0.45)] shadow-sm transition-all"
                aria-label="X"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href={personalInfo?.socials?.instagram || 'https://instagram.com'}
                target="_blank"
                rel="noreferrer"
                className="t-resize w-10 h-10 rounded-full bg-white dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center hover:text-[#e4405f] hover:scale-110 hover:shadow-[0_0_16px_rgba(228,64,95,0.45)] shadow-sm transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={personalInfo?.socials?.facebook || 'https://facebook.com'}
                target="_blank"
                rel="noreferrer"
                className="t-resize w-10 h-10 rounded-full bg-white dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center hover:text-[#1877f2] hover:scale-110 hover:shadow-[0_0_16px_rgba(24,119,242,0.45)] shadow-sm transition-all"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Right: Modern Tech Card & Visual with t-panel-slide */}
          <motion.div
            className="lg:w-5/12 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              {/* Card Container */}
              <div className="t-resize bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden backdrop-blur-sm">
                {/* Header bar */}
                <div className="bg-slate-100 dark:bg-[#050505] px-4 py-3 border-b border-slate-200 dark:border-dark-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <button
                    onClick={() => setShowSpecs(!showSpecs)}
                    className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-gray-300 hover:text-accent font-mono font-semibold transition-colors"
                  >
                    <FaTerminal size={11} /> developer.js {showSpecs ? <FaChevronUp size={9} /> : <FaChevronDown size={9} />}
                  </button>
                </div>

                {/* Code body */}
                <div className="p-6 font-mono text-xs sm:text-sm space-y-2 text-slate-700 dark:text-gray-300">
                  <p className="text-slate-400 dark:text-gray-500">// Modern Full Stack Developer</p>
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-600 dark:text-gray-400">name:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      '{personalInfo?.name || 'Vithusan'}'
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-600 dark:text-gray-400">role:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      '{personalInfo?.title || 'Full Stack Engineer'}'
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-600 dark:text-gray-400">coreTech:</span> [
                    <span className="text-amber-600 dark:text-amber-400">'React'</span>,{' '}
                    <span className="text-amber-600 dark:text-amber-400">'Node.js'</span>,{' '}
                    <span className="text-amber-600 dark:text-amber-400">'MongoDB'</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-600 dark:text-gray-400">passion:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      'Building impact-driven solutions'
                    </span>
                  </p>
                  <p>&#125;;</p>

                  {/* Transitions.dev t-panel-slide Drawer for Environment Specs */}
                  <div className={`overflow-hidden transition-all duration-300 ${showSpecs ? 'max-h-32 pt-2' : 'max-h-0'}`}>
                    <div
                      className="t-panel-slide bg-slate-50 dark:bg-dark p-3 rounded-xl border border-slate-200 dark:border-dark-border space-y-1 text-xs"
                      data-open={showSpecs ? 'true' : 'false'}
                    >
                      <div className="flex items-center justify-between text-slate-500 dark:text-gray-400">
                        <span className="flex items-center gap-1"><FaServer size={10} className="text-primary dark:text-accent" /> Runtime:</span>
                        <span className="text-slate-800 dark:text-gray-200 font-semibold">Node.js 18+ / Express</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-500 dark:text-gray-400">
                        <span className="flex items-center gap-1"><FaDatabase size={10} className="text-emerald-500" /> Database:</span>
                        <span className="text-slate-800 dark:text-gray-200 font-semibold">MongoDB / Mongoose</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-dark-border flex items-center justify-between text-xs text-slate-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaCode className="text-accent" /> Clean Architecture
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● Ready to deploy</span>
                  </div>
                </div>
              </div>

              {/* Floating tech pill bottom-left */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#0b0b0b] border border-light-border dark:border-dark-border px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs font-semibold text-primary dark:text-accent">
                <span>🚀 5+ Years Exp</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
