import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

import { experiences } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Experience = () => {
  const experienceList = Array.isArray(experiences)
    ? experiences
    : [];

  if (experienceList.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      className="border-t border-light-border bg-light-cardHover py-24 transition-colors duration-300 dark:border-dark-border dark:bg-dark-card/40 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Career Journey"
          title="Experience"
          description="A snapshot of the roles, projects, and responsibilities that shaped my development career."
          className="mb-16"
          align="center"
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-accent via-light-border to-transparent md:left-1/2 md:block" />

          <div className="space-y-8 md:space-y-10">
            {experienceList.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item?.id || `${item?.company}-${item?.role}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative"
                >
                  <div className="absolute left-0 top-7 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-light-cardHover bg-accent md:left-1/2 md:block dark:border-dark-card" />

                  <div
                    className={`md:grid md:grid-cols-2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div
                      className={`${
                        isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-2'
                      }`}
                    >
                      <article className="relative overflow-hidden rounded-2xl border border-light-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-light-text hover:shadow-xl dark:border-dark-border dark:bg-dark-card dark:hover:border-white">
                        <div className="mb-4 flex flex-wrap items-center gap-2 md:justify-end">
                          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                            <FaBriefcase className="text-[11px]" />
                            {item?.role || 'Role'}
                          </span>

                          <span className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-cardHover px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-light-muted dark:border-dark-border dark:bg-dark dark:text-dark-muted">
                            <FaCalendarAlt className="text-[10px]" />
                            {item?.duration || 'Duration'}
                          </span>
                        </div>

                        <h3 className="mb-2 text-xl font-bold tracking-tight text-light-text dark:text-white">
                          {item?.company || 'Company'}
                        </h3>

                        <p className="mb-4 text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                          {item?.description ||
                            'Description for this role is unavailable.'}
                        </p>

                        {Array.isArray(item?.technologies) &&
                          item.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 md:justify-end">
                              {item.technologies.map((technology) => (
                                <span
                                  key={`${item?.id || item?.company}-${technology}`}
                                  className="rounded-full border border-light-border bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-light-text dark:border-dark-border dark:bg-white/5 dark:text-dark-text"
                                >
                                  {technology}
                                </span>
                              ))}
                            </div>
                          )}
                      </article>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;