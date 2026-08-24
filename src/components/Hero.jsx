import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaRocket,
  FaServer,
} from 'react-icons/fa';

import { personalInfo } from '../data/portfolioData';
import SocialLinks from './SocialLinks';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-light-border bg-white pb-16 pt-24 transition-colors duration-300 dark:border-dark-border dark:bg-black"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/10"
          animate={{ x: [0, 18, 0], y: [0, -12, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10"
          animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            className="flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 24 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`t-stagger ${
                isLoaded ? 'is-shown' : ''
              }`}
            >
              {/* Availability */}
              <p className="t-stagger-line t-stagger-line--1 mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-light-muted dark:text-dark-muted sm:text-sm">
                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Available for projects
              </p>

              {/* Main heading */}
              <h1 className="t-stagger-line t-stagger-line--2 mb-3 max-w-5xl font-display text-[16vw] font-extrabold leading-[0.82] tracking-tight text-light-text dark:text-white sm:text-[12vw] lg:text-[8vw]">
                Full-Stack
                <br />

                <span className="text-light-muted dark:text-dark-muted">
                  Developer.
                </span>
              </h1>

              {/* Bio */}
              <p className="t-stagger-line t-stagger-line--3 mb-8 mt-8 max-w-xl text-base leading-relaxed text-light-muted dark:text-dark-muted sm:text-lg">
                {personalInfo?.bio ||
                  'Passionate full-stack developer specializing in creating high-performance web applications, robust backend architectures, and delightful user experiences.'}
              </p>
            </div>

            {/* Buttons */}
            <div className="mb-10 flex w-full flex-wrap gap-3 sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="t-resize flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                <FaRocket className="text-sm" />
                View my work
                <FaArrowRight className="text-xs" />
              </button>

              <button
                type="button"
                onClick={() => setShowSpecs((prev) => !prev)}
                className="flex items-center justify-center gap-2 rounded-full border border-accent px-7 py-3.5 text-sm font-bold text-accent transition-all hover:-translate-y-0.5 hover:border-accent/80 hover:bg-accent/5 dark:border-accent dark:text-accent"
              >
                <FaCode className="text-sm" />

                {showSpecs ? 'Hide stack' : 'View stack'}
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted">
                Follow me:
              </span>

              <SocialLinks socials={personalInfo?.socials} />
            </div>
          </motion.div>

          {/* ================= RIGHT CODE CARD ================= */}
          <motion.div
            className="relative mx-auto w-full max-w-xl lg:mx-0"
            initial={{ opacity: 0, x: 28, scale: 0.96 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 28, scale: isLoaded ? 1 : 0.96 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Code window */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl dark:border-dark-border dark:bg-[#0b0b0b]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-dark-border">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="font-mono text-xs text-slate-400">
                  developer.js
                </span>

                <div className="w-12" />
              </div>

              {/* Code body */}
              <div className="space-y-2 p-6 font-mono text-xs text-slate-700 dark:text-gray-300 sm:text-sm">
                {/* Comment */}
                <p className="text-slate-400 dark:text-gray-500">
                  // Modern Full Stack Developer
                </p>

                {/* const developer */}
                <p>
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>{' '}
                  <span className="text-blue-600 dark:text-blue-400">
                    developer
                  </span>{' '}
                  = {'{'}
                </p>

                {/* name */}
                <p className="pl-4">
                  <span className="text-slate-600 dark:text-gray-400">
                    name:
                  </span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    '{personalInfo?.name || 'Vithusan'}'
                  </span>
                  ,
                </p>

                {/* role */}
                <p className="pl-4">
                  <span className="text-slate-600 dark:text-gray-400">
                    role:
                  </span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    '{personalInfo?.title || 'Full Stack Developer'}'
                  </span>
                  ,
                </p>

                {/* Core technologies */}
                <p className="pl-4">
                  <span className="text-slate-600 dark:text-gray-400">
                    coreTech:
                  </span>{' '}
                  [
                  <span className="text-amber-600 dark:text-amber-400">
                    'React'
                  </span>
                  ,{' '}
                  <span className="text-amber-600 dark:text-amber-400">
                    'Node.js'
                  </span>
                  ,{' '}
                  <span className="text-amber-600 dark:text-amber-400">
                    'MongoDB'
                  </span>
                  ],
                </p>

                {/* Passion */}
                <p className="pl-4">
                  <span className="text-slate-600 dark:text-gray-400">
                    passion:
                  </span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    'Building impact-driven solutions'
                  </span>
                </p>

                <p>{'};'}</p>

                {/* Environment specs */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    showSpecs
                      ? 'max-h-40 pt-3 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-xs dark:border-dark-border dark:bg-[#111]">
                    {/* Runtime */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-slate-500 dark:text-gray-400">
                        <FaServer className="text-purple-500" />
                        Runtime
                      </span>

                      <span className="font-semibold text-slate-800 dark:text-gray-200">
                        Node.js / Express
                      </span>
                    </div>

                    {/* Database */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-slate-500 dark:text-gray-400">
                        <FaDatabase className="text-emerald-500" />
                        Database
                      </span>

                      <span className="font-semibold text-slate-800 dark:text-gray-200">
                        MongoDB / Mongoose
                      </span>
                    </div>

                    {/* Frontend */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-slate-500 dark:text-gray-400">
                        <FaCode className="text-blue-500" />
                        Frontend
                      </span>

                      <span className="font-semibold text-slate-800 dark:text-gray-200">
                        React / Tailwind
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-dark-border dark:text-gray-400">
                  <span className="flex items-center gap-2">
                    <FaCode className="text-accent" />
                    Clean Architecture
                  </span>

                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    ● Ready to deploy
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating experience badge */}
            <motion.div
              className="absolute -bottom-5 -left-5 rounded-xl border border-light-border bg-white px-4 py-2 shadow-lg dark:border-dark-border dark:bg-[#0b0b0b]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-semibold text-slate-700 dark:text-white">
                🚀 Building & Learning
              </span>
            </motion.div>

            {/* Floating status badge */}
            <motion.div
              className="absolute -right-4 -top-4 hidden rounded-full border border-light-border bg-white px-4 py-2 shadow-lg dark:border-dark-border dark:bg-[#0b0b0b] sm:block"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-gray-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Open to opportunities
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;