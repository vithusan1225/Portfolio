import React from 'react';
import { motion } from 'framer-motion';
import {
  FaDownload,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaGlobe,
} from 'react-icons/fa';

import { personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const About = () => {
  const stats = [
    {
      id: 1,
      title: 'Core Focus',
      value: 'Full-Stack',
      icon: FaCode,
    },
    {
      id: 2,
      title: 'Field of Study',
      value: 'Statistics',
      icon: FaChartLine,
    },
    {
      id: 3,
      title: 'Data & Analytics',
      value: 'Data Science',
      icon: FaDatabase,
    },
    {
      id: 4,
      title: 'Location',
      value: personalInfo?.location || 'Sri Lanka',
      icon: FaGlobe,
    },
  ];

  const profileImage = personalInfo?.profileImage;
  const name = personalInfo?.name || 'Vithusan';

  const bio =
    personalInfo?.bio ||
    'I am a Statistics student and Full-Stack Developer passionate about building modern web applications and turning data into meaningful insights.';

  const resumeUrl = personalInfo?.resumeUrl;

  return (
    <section
      id="about"
      className="border-t border-light-border bg-white py-24 transition-colors duration-300 dark:border-dark-border dark:bg-black md:py-32"
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* Section heading */}
        <SectionHeading eyebrow="Get To Know Me" title="About Me" />

        <div className="mt-14 flex flex-col items-start gap-14 lg:flex-row lg:gap-20">
          {/* =====================================================
              LEFT — PROFILE IMAGE
          ====================================================== */}
          <motion.div
            className="flex w-full justify-center lg:w-5/12 lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          >
            <div className="group relative w-full max-w-md">
              {/* Decorative background */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-light-border bg-slate-50 dark:border-dark-border dark:bg-[#0b0b0b]" />

              {/* Image container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-light-text bg-light-cardHover shadow-xl dark:border-white dark:bg-dark-card">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={`${name} - Full Stack Developer`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-[#111]">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-light-text text-3xl font-bold text-white dark:bg-white dark:text-black">
                        {name.charAt(0).toUpperCase()}
                      </div>

                      <p className="text-sm font-semibold text-light-muted dark:text-dark-muted">
                        {name}
                      </p>
                    </div>
                  </div>
                )}

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Name badge */}
                <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-black/60 px-4 py-3 backdrop-blur-md">
                  <p className="text-sm font-bold text-white">
                    {name}
                  </p>

                  <p className="mt-0.5 text-xs text-white/70">
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              {/* Floating status */}
              <div className="absolute -left-4 -top-4 rounded-full border border-light-border bg-white px-4 py-2 shadow-lg dark:border-dark-border dark:bg-[#0b0b0b]">
                <span className="flex items-center gap-2 text-xs font-semibold text-light-text dark:text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              delay: 0.1,
            }}
          >
            {/* Heading */}
            <h3 className="mb-5 text-2xl font-bold leading-tight text-light-text dark:text-white sm:text-3xl md:text-4xl">
              Building digital solutions with{' '}
              <span className="text-light-muted dark:text-dark-muted">
                code & data.
              </span>
            </h3>

            {/* Bio */}
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-light-muted dark:text-dark-muted sm:text-lg">
              {bio}
            </p>

            {/* Small tech statement */}
            <div className="mb-8 flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'Java', 'MySQL'].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-light-border bg-slate-50 px-3 py-1.5 font-mono text-xs font-medium text-light-text transition-colors hover:border-light-text dark:border-dark-border dark:bg-[#0b0b0b] dark:text-gray-300 dark:hover:border-white"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>

            {/* =================================================
                STAT CARDS
            ================================================== */}
            <div className="mb-9 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;

                return (
                  <motion.div
                    key={stat.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: '-50px',
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="group t-resize rounded-xl border border-light-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-light-text hover:shadow-lg dark:border-dark-border dark:bg-dark-card dark:hover:border-white"
                  >
                    {/* Icon */}
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-light-text transition-transform duration-300 group-hover:scale-110 dark:bg-white/10 dark:text-white">
                      <IconComponent className="text-sm" />
                    </div>

                    {/* Value */}
                    <h4 className="mb-1 break-words text-sm font-extrabold text-light-text dark:text-white sm:text-base">
                      {stat.value}
                    </h4>

                    {/* Title */}
                    <p className="text-[11px] font-medium text-light-muted dark:text-dark-muted sm:text-xs">
                      {stat.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                RESUME / CTA
            ================================================== */}
            <div className="flex flex-wrap items-center gap-4">
              {resumeUrl ? (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="t-resize inline-flex items-center gap-2 rounded-full bg-light-text px-7 py-3.5 font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-light-text/90 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  <FaDownload className="text-sm" />
                  Download Resume
                </a>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-slate-200 px-7 py-3.5 font-bold text-slate-500 dark:bg-zinc-800 dark:text-zinc-500">
                  <FaDownload className="text-sm" />
                  Resume Coming Soon
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;