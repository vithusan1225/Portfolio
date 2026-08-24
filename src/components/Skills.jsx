import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode,
  FaServer,
  FaTools,
  FaLayerGroup,
} from 'react-icons/fa';

import { skills } from '../data/portfolioData';
import SlidingTabs from './SlidingTabs';
import SectionHeading from './SectionHeading';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Backend', 'Tools'];

  // Filter skills safely
  const filteredSkills = useMemo(() => {
    if (!Array.isArray(skills)) {
      return [];
    }

    if (activeFilter === 'All') {
      return skills;
    }

    return skills.filter(
      (skill) => skill?.category === activeFilter
    );
  }, [activeFilter]);

  // Category icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return FaCode;

      case 'Backend':
        return FaServer;

      case 'Tools':
        return FaTools;

      default:
        return FaLayerGroup;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section
      id="skills"
      className="border-t border-light-border bg-light-cardHover py-24 transition-colors duration-300 dark:border-dark-border dark:bg-dark-card/40 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <SectionHeading
          eyebrow="Technical Proficiency"
          title="Skills & Technologies"
          className="mb-12"
          align="center"
        />

        {/* =====================================================
            FILTER TABS
        ====================================================== */}
        <div
          className="mb-12 flex justify-center"
          role="tablist"
          aria-label="Filter skills by category"
        >
          <SlidingTabs
            tabs={filters}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
          />
        </div>

        {/* =====================================================
            SKILLS GRID
        ====================================================== */}
        <AnimatePresence mode="wait">
          {filteredSkills.length > 0 ? (
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredSkills.map((skill, index) => {
                const IconComponent = getCategoryIcon(
                  skill?.category
                );

                // Keep level between 0 and 100
                const level = Math.min(
                  100,
                  Math.max(0, Number(skill?.level) || 0)
                );

                return (
                  <motion.div
                    key={`${skill?.name || 'skill'}-${index}`}
                    variants={itemVariants}
                    className="t-resize group relative overflow-hidden rounded-xl border border-light-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-light-text hover:shadow-lg dark:border-dark-border dark:bg-dark-card dark:hover:border-white"
                  >
                    {/* Top row */}
                    <div className="mb-5 flex items-start justify-between gap-3">
                      {/* Icon + name */}
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-light-text transition-transform duration-300 group-hover:scale-110 dark:bg-white/10 dark:text-white">
                          <IconComponent className="text-sm" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold text-light-text dark:text-white">
                            {skill?.name || 'Unknown Skill'}
                          </h3>

                          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-light-muted dark:text-dark-muted">
                            {skill?.category || 'Technology'}
                          </p>
                        </div>
                      </div>

                      {/* Percentage */}
                      <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 font-mono text-[10px] font-bold text-light-text dark:bg-white/10 dark:text-gray-300">
                        {level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div
                      className="h-2 w-full overflow-hidden rounded-full bg-light-border dark:bg-dark-border"
                      role="progressbar"
                      aria-valuenow={level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label={`${skill?.name || 'Skill'} proficiency`}
                    >
                      <motion.div
                        className="h-full rounded-full bg-light-text dark:bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{
                          duration: 0.9,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.15 + index * 0.04,
                        }}
                      />
                    </div>

                    {/* Bottom label */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-light-muted dark:text-dark-muted">
                        Proficiency
                      </span>

                      <span className="text-[10px] font-semibold text-light-muted dark:text-dark-muted">
                        {level >= 90
                          ? 'Advanced'
                          : level >= 75
                            ? 'Strong'
                            : level >= 50
                              ? 'Intermediate'
                              : 'Learning'}
                      </span>
                    </div>

                    {/* Hover decoration */}
                    <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-slate-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-white/10" />
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* =================================================
                EMPTY STATE
            ================================================== */
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-dashed border-light-border bg-white px-6 py-16 text-center dark:border-dark-border dark:bg-dark-card"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-light-text dark:bg-white/10 dark:text-white">
                <FaLayerGroup />
              </div>

              <h3 className="mb-2 text-lg font-bold text-light-text dark:text-white">
                No skills found
              </h3>

              <p className="text-sm text-light-muted dark:text-dark-muted">
                There are currently no skills listed under{' '}
                <span className="font-semibold">
                  {activeFilter}
                </span>
                .
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            BOTTOM SUMMARY
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="text-sm leading-relaxed text-light-muted dark:text-dark-muted sm:text-base">
            Constantly learning, experimenting, and improving across
            modern web development, backend engineering, and data
            technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;