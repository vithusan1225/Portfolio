import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  const fallbackExperiences = [
    {
      id: 1,
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2023 - Present',
      description:
        'Leading the development of scalable cloud-native web applications. Architected backend services with Node.js and improved frontend rendering speed by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Agency Co.',
      duration: 'Mar 2021 - Dec 2022',
      description:
        'Built full-stack client portals, created RESTful APIs, and integrated third-party payment gateways and webhooks.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'StartUp Labs',
      duration: 'Jun 2019 - Feb 2021',
      description:
        'Developed interactive UI modules, reusable design component systems, and state management workflows.',
      technologies: ['React', 'Redux', 'JavaScript', 'Sass'],
    },
  ];

  const expData = experiences && experiences.length > 0 ? experiences : fallbackExperiences;

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-300 dark:bg-dark-border"></div>

          {expData.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={exp.id || index}
                className={`mb-12 flex justify-between items-center w-full ${
                  isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-col`}
              >
                <div className="hidden md:block w-5/12"></div>

                {/* Center Timeline Icon/Dot */}
                <div className="z-20 w-8 h-8 bg-white dark:bg-dark-card border-2 border-accent rounded-full mb-4 md:mb-0 flex items-center justify-center shadow-md">
                  <FaBriefcase className="text-xs text-accent" />
                </div>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-5/12 bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-accent mb-1">
                    <FaCalendarAlt /> {exp.duration}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-0.5">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-primary dark:text-blue-300 mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-slate-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies &&
                      exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-slate-100 dark:bg-dark text-slate-700 dark:text-gray-300 border border-slate-200/60 dark:border-dark-border text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
