import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import SlidingTabs from './SlidingTabs';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const fallbackSkills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 82, category: 'Backend' },
    { name: 'MySQL', level: 75, category: 'Backend' },
    { name: 'Git & GitHub', level: 88, category: 'Tools' },
    { name: 'Docker', level: 72, category: 'Tools' },
    { name: 'AWS', level: 68, category: 'Tools' },
    { name: 'Figma', level: 65, category: 'Tools' },
  ];

  const skillsData = skills && skills.length > 0 ? skills : fallbackSkills;
  const filters = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills =
    activeFilter === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
            Technical Proficiency
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Skills &amp; Technologies
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

        {/* Skills Grid with t-resize */}
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              variants={itemVariants}
              className="t-resize bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/50 dark:hover:border-accent/50 hover:scale-[1.02] flex flex-col justify-center"
            >
              <div className="flex justify-between items-center mb-2.5">
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-xs font-bold text-primary dark:text-accent">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-dark-border rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
