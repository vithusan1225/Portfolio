import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
  FaCheck,
  FaLayerGroup,
  FaCode,
} from 'react-icons/fa';

import { projects } from '../data/portfolioData';
import SlidingTabs from './SlidingTabs';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  /* ==========================================================
     SAFE PROJECT DATA
  ========================================================== */

  const projectList = Array.isArray(projects) ? projects : [];

  /* ==========================================================
     PROJECT CATEGORIES
  ========================================================== */

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        projectList
          .map((project) => project?.category)
          .filter(Boolean)
      ),
    ];

    return ['All', ...uniqueCategories];
  }, [projectList]);

  /* ==========================================================
     FILTER PROJECTS
  ========================================================== */

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projectList;
    }

    return projectList.filter(
      (project) => project?.category === activeFilter
    );
  }, [activeFilter, projectList]);

  /* ==========================================================
     EXPAND / COLLAPSE
  ========================================================== */

  const toggleExpand = (id) => {
    setExpandedId((previousId) =>
      previousId === id ? null : id
    );
  };

  /* ==========================================================
     ANIMATION
  ========================================================== */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="projects"
      className="border-t border-light-border bg-white py-24 transition-colors duration-300 dark:border-dark-border dark:bg-black md:py-32"
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <SectionHeading
          eyebrow="Showcase"
          title="Featured Projects"
          className="mb-12"
          align="center"
        />

        {/* =====================================================
            FILTER TABS
        ====================================================== */}

        {categories.length > 1 && (
          <div
            className="mb-12 flex justify-center"
            role="tablist"
            aria-label="Filter projects by category"
          >
            <SlidingTabs
              tabs={categories}
              activeTab={activeFilter}
              onTabChange={(category) => {
                setActiveFilter(category);
                setExpandedId(null);
              }}
            />
          </div>
        )}

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project) => {
                const isExpanded = expandedId === project?.id;

                const liveHref =
                  project?.liveUrl || project?.liveLink;

                const githubHref =
                  project?.githubUrl || project?.githubLink;

                const features = Array.isArray(project?.features)
                  ? project.features
                  : [];

                const tags = Array.isArray(project?.tags)
                  ? project.tags
                  : [];

                return (
                  <motion.article
                    key={project?.id || project?.title}
                    variants={itemVariants}
                    className="t-resize group flex h-full flex-col overflow-hidden rounded-2xl border border-light-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-light-text hover:shadow-2xl dark:border-dark-border dark:bg-dark-card dark:hover:border-white"
                  >
                    {/* ==================================================
                        PROJECT IMAGE
                    =================================================== */}

                    <div className="relative h-56 overflow-hidden bg-light-cardHover dark:bg-dark">
                      {project?.image ? (
                        <img
                          src={project.image}
                          alt={`${project?.title || 'Project'} preview`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-[#111]">
                          <FaCode className="text-4xl text-slate-400 dark:text-zinc-600" />
                        </div>
                      )}

                      {/* Image overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Category */}
                      {project?.category && (
                        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                          {project.category}
                        </div>
                      )}

                      {/* Project number */}
                      <div className="absolute bottom-4 left-4 font-mono text-xs font-bold text-white/70">
                        {String(project?.id || '').padStart(2, '0')}
                      </div>
                    </div>

                    {/* ==================================================
                        PROJECT CONTENT
                    =================================================== */}

                    <div className="flex flex-grow flex-col p-6">
                      {/* Title */}
                      <h3 className="mb-2 text-xl font-bold tracking-tight text-light-text dark:text-white">
                        {project?.title || 'Untitled Project'}
                      </h3>

                      {/* Description */}
                      <p className="mb-5 flex-grow text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                        {project?.description ||
                          'A project built with modern technologies and development practices.'}
                      </p>

                      {/* ==================================================
                          ARCHITECTURE / FEATURES
                      =================================================== */}

                      {features.length > 0 && (
                        <div className="mb-5">
                          <button
                            type="button"
                            onClick={() =>
                              toggleExpand(project?.id)
                            }
                            aria-expanded={isExpanded}
                            className="inline-flex items-center gap-2 rounded-lg py-1 text-xs font-bold text-light-text transition-opacity hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-text dark:text-white dark:focus-visible:ring-white"
                          >
                            <FaLayerGroup size={11} />

                            {isExpanded
                              ? 'Hide architecture'
                              : 'View architecture'}

                            {isExpanded ? (
                              <FaChevronUp size={9} />
                            ) : (
                              <FaChevronDown size={9} />
                            )}
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: 'auto',
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: 'easeInOut',
                                }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-2 pt-3">
                                  {features.map(
                                    (feature, index) => (
                                      <div
                                        key={`${feature}-${index}`}
                                        className="flex items-start gap-2 rounded-xl border border-light-border bg-light-cardHover px-3 py-2.5 text-xs text-light-text dark:border-dark-border dark:bg-dark dark:text-dark-text"
                                      >
                                        <FaCheck
                                          size={9}
                                          className="mt-0.5 shrink-0 text-emerald-500"
                                        />

                                        <span>{feature}</span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}

                      {/* ==================================================
                          TECHNOLOGY TAGS
                      =================================================== */}

                      {tags.length > 0 && (
                        <div className="mb-6 flex flex-wrap gap-1.5">
                          {tags.map((tag, index) => (
                            <span
                              key={`${tag}-${index}`}
                              className="rounded-md border border-light-border bg-light-cardHover px-2.5 py-1 font-mono text-[10px] font-medium text-light-text dark:border-dark-border dark:bg-dark dark:text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* ==================================================
                          PROJECT ACTIONS
                      =================================================== */}

                      <div className="mt-auto flex items-center justify-between border-t border-light-border pt-4 dark:border-dark-border">
                        {/* Live Demo */}
                        {liveHref ? (
                          <a
                            href={liveHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-light-text transition-opacity hover:opacity-60 dark:text-white"
                            aria-label={`View ${project?.title} live demo`}
                          >
                            <FaExternalLinkAlt size={12} />
                            Live Demo
                          </a>
                        ) : (
                          <span className="cursor-not-allowed text-sm font-bold text-slate-400 dark:text-zinc-600">
                            Live Demo unavailable
                          </span>
                        )}

                        {/* GitHub */}
                        {githubHref ? (
                          <a
                            href={githubHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-light-muted transition-colors hover:text-light-text dark:text-dark-muted dark:hover:text-white"
                            aria-label={`View ${project?.title} source code`}
                          >
                            <FaGithub size={16} />
                            Code
                          </a>
                        ) : (
                          <span className="cursor-not-allowed text-sm font-semibold text-slate-400 dark:text-zinc-600">
                            Code unavailable
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            /* =====================================================
                EMPTY STATE
            ====================================================== */

            <motion.div
              key="empty"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="rounded-2xl border border-dashed border-light-border bg-light-cardHover px-6 py-16 text-center dark:border-dark-border dark:bg-dark-card"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-light-text shadow-sm dark:bg-black dark:text-white">
                <FaLayerGroup />
              </div>

              <h3 className="mb-2 text-lg font-bold text-light-text dark:text-white">
                No projects found
              </h3>

              <p className="text-sm text-light-muted dark:text-dark-muted">
                There are currently no projects under{' '}
                <span className="font-semibold">
                  {activeFilter}
                </span>
                .
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        {filteredProjects.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="mx-auto mt-12 max-w-2xl text-center"
          >
            <p className="text-sm leading-relaxed text-light-muted dark:text-dark-muted">
              A selection of projects combining{' '}
              <span className="font-semibold text-light-text dark:text-white">
                full-stack development
              </span>
              ,{' '}
              <span className="font-semibold text-light-text dark:text-white">
                modern technologies
              </span>
              , and{' '}
              <span className="font-semibold text-light-text dark:text-white">
                data-driven thinking
              </span>
              .
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;