import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp, FaCheck, FaLayerGroup } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import SlidingTabs from './SlidingTabs';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const fallbackProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform built with the MERN stack featuring user authentication, payment processing with Stripe, and order tracking.',
      features: ['Secure Stripe Checkout', 'JWT Auth & RBAC', 'Realtime Inventory Management'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80',
      category: 'Full Stack',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Collaborative Task Manager',
      description:
        'Real-time task and project management tool with Kanban boards, drag-and-drop workflow, and team messaging features.',
      features: ['Drag & Drop Kanban', 'WebSocket Collaboration', 'Team Activity Feed'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop&q=80',
      category: 'Full Stack',
      tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Weather & Forecast Dashboard',
      description:
        'Interactive weather forecasting web application with dynamic city search, 7-day weather radar, and UV index maps.',
      features: ['Geolocation Auto-detect', 'Interactive Radar Charts', 'Extreme Weather Alerts'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop&q=80',
      category: 'Frontend',
      tags: ['React', 'Tailwind CSS', 'OpenWeather API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  const projectsData = projects && projects.length > 0 ? projects : fallbackProjects;
  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-card/40 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
            Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Transitions.dev Sliding Tabs */}
        <div className="flex justify-center mb-12">
          <SlidingTabs
            tabs={filters}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
          />
        </div>

        {/* Projects Grid with t-resize Card and t-panel-slide Panel */}
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            const liveHref = project.liveUrl || project.liveLink || '#';
            const githubHref = project.githubUrl || project.githubLink || '#';

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="t-resize group bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:border-accent/50 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-dark t-resize">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-dark/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary dark:text-accent shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow t-resize">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Expandable Key Highlights with Transitions.dev t-panel-slide */}
                  {project.features && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-xs font-bold text-accent hover:text-accent-hover inline-flex items-center gap-1.5 mb-2 focus:outline-none transition-colors"
                      >
                        <FaLayerGroup size={11} />
                        {isExpanded ? 'Hide Architecture Info' : 'Key Architecture Features'}
                        {isExpanded ? <FaChevronUp size={9} /> : <FaChevronDown size={9} />}
                      </button>

                      {/* Panel reveal container */}
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48' : 'max-h-0'}`}>
                        <div
                          className="t-panel-slide space-y-1.5 pt-1 pb-2"
                          data-open={isExpanded ? 'true' : 'false'}
                        >
                          {project.features.map((feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-300 bg-slate-50 dark:bg-dark px-3 py-2 rounded-xl border border-slate-100 dark:border-dark-border shadow-inner"
                            >
                              <FaCheck size={9} className="text-accent shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags &&
                      project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 dark:bg-dark text-slate-700 dark:text-gray-300 border border-slate-200/60 dark:border-dark-border text-xs px-2.5 py-1 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-dark-border text-sm mt-auto">
                    <a
                      href={liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-primary dark:text-accent hover:underline"
                    >
                      <FaExternalLinkAlt size={13} /> Live Demo
                    </a>
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <FaGithub size={16} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
