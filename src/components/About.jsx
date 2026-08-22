import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaAward, FaBriefcase, FaUsers, FaFolderOpen } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const stats = [
    { id: 1, title: 'Years Experience', value: '5+', icon: FaBriefcase },
    { id: 2, title: 'Completed Projects', value: '50+', icon: FaFolderOpen },
    { id: 3, title: 'Happy Clients', value: '30+', icon: FaUsers },
    { id: 4, title: 'Recognitions', value: '10+', icon: FaAward },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-card/50 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
            Get To Know Me
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Image / Visual */}
          <motion.div
            className="lg:w-5/12 w-full flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-30 group-hover:opacity-50 blur-lg transition duration-500"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-card aspect-square">
                <img
                  src={
                    personalInfo?.profileImage ||
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80'
                  }
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-bold text-lg">{personalInfo?.name || 'Vithusan'}</p>
                  <p className="text-xs text-accent font-medium">{personalInfo?.location || 'Full Stack Engineer'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio and stats */}
          <motion.div
            className="lg:w-7/12 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Building impactful digital solutions with precision
            </h3>
            <p className="text-slate-600 dark:text-gray-300 mb-8 leading-relaxed text-base sm:text-lg">
              {personalInfo?.bio ||
                'I am a passionate full-stack developer dedicated to building reliable, scalable, and responsive web applications. With hands-on expertise in React, Node.js, Express, MongoDB, and modern UI systems, I turn complex problems into clean, intuitive code.'}
            </p>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className="bg-slate-50 dark:bg-dark border border-slate-200/80 dark:border-dark-border p-4 rounded-xl shadow-sm flex flex-col items-center justify-center text-center hover:border-accent dark:hover:border-accent transition-all group"
                  >
                    <IconComponent className="text-accent text-xl mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl sm:text-2xl font-extrabold text-primary dark:text-white mb-0.5">
                      {stat.value}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                      {stat.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={personalInfo?.resumeUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 bg-accent hover:bg-accent-hover text-dark font-bold rounded-lg shadow-md hover:shadow-accent/20 transition-all inline-flex items-center gap-2"
              >
                <FaDownload className="text-sm" /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
