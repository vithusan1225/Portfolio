import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-light-cardHover dark:bg-dark-card/40 border-t border-light-border dark:border-dark-border transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Career Journey" title="Work Experience" align="center" />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-light-border dark:bg-dark-border"></div>

          {experiences.map((exp, index) => {
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
                <div className="z-20 w-8 h-8 bg-white dark:bg-dark-card border-2 border-light-text dark:border-white rounded-full mb-4 md:mb-0 flex items-center justify-center">
                  <FaBriefcase className="text-xs text-light-text dark:text-white" />
                </div>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  className="t-resize w-full md:w-5/12 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-2xl hover:border-light-text dark:hover:border-white transition-all"
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-light-muted dark:text-dark-muted mb-1">
                    <FaCalendarAlt /> {exp.duration}
                  </div>
                  <h3 className="text-xl font-bold text-light-text dark:text-white mb-0.5">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-light-text/70 dark:text-dark-text/70 mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-light-muted dark:text-dark-muted text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies &&
                      exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-light-cardHover dark:bg-dark text-light-text dark:text-dark-text border border-light-border dark:border-dark-border text-xs rounded-md font-medium"
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
