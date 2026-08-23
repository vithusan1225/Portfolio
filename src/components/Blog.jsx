import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaMedium,
} from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const posts = [
  {
    id: 1,
    title: 'How I Built My First Full-Stack MERN Application',
    excerpt:
      'My journey of building a full-stack MERN application, from setting up the project to connecting the frontend, backend, and database.',
    date: 'August 2026',
    author: 'Vithusan Santhirakumar',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    url: 'https://medium.com/@Vithusan1225/how-i-built-my-first-full-stack-mern-application-3a9c7d2a19ea',
    isMedium: true,
  },

  // Temporary post — replace later
  {
    id: 2,
    title: 'Mastering React for Modern Web Development',
    excerpt:
      'A practical look at React components, state management, reusable UI patterns, and techniques for building modern web applications.',
    date: 'Coming Soon',
    author: 'Vithusan Santhirakumar',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    url: '#',
    isMedium: false,
  },

  // Temporary post — replace later
  {
    id: 3,
    title: 'Building REST APIs with Node.js and Express',
    excerpt:
      'Exploring backend development with Node.js and Express, including API structure, authentication, validation, and database integration.',
    date: 'Coming Soon',
    author: 'Vithusan Santhirakumar',
    image:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop&q=80',
    url: '#',
    isMedium: false,
  },
];

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="blog"
      className="border-t border-light-border bg-light-cardHover py-24 transition-colors duration-300 dark:border-dark-border dark:bg-dark-card/40 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Articles & Insights"
          title="Latest Blog Posts"
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-60px',
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-light-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-light-text hover:shadow-xl dark:border-dark-border dark:bg-dark-card dark:hover:border-white"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-light-cardHover dark:bg-dark">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Article type */}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-light-border bg-white/95 px-3 py-1.5 text-xs font-bold text-light-text backdrop-blur-sm dark:border-dark-border dark:bg-black/90 dark:text-white">
                  {post.isMedium && <FaMedium size={13} />}
                  {post.isMedium ? 'Medium' : 'Coming Soon'}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-6">
                {/* Meta */}
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-light-muted dark:text-dark-muted">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt size={11} />
                    {post.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FaUser size={11} />
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight text-light-text transition-colors dark:text-white">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-6 line-clamp-3 flex-grow text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-auto border-t border-light-border pt-4 dark:border-dark-border">
                  {post.isMedium ? (
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-light-text transition-all hover:gap-3 hover:underline dark:text-white"
                    >
                      Read on Medium
                      <FaArrowRight size={12} />
                    </a>
                  ) : (
                    <span className="inline-flex cursor-default items-center gap-2 text-sm font-bold text-light-muted dark:text-dark-muted">
                      Article coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Medium profile link */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://medium.com/@Vithusan1225"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-light-border bg-white px-6 py-3 text-sm font-bold text-light-text transition-all hover:-translate-y-0.5 hover:border-light-text hover:shadow-lg dark:border-dark-border dark:bg-dark-card dark:text-white dark:hover:border-white"
          >
            <FaMedium size={16} />
            View all my articles
            <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;