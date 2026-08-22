import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const staticPosts = [
  {
    id: 1,
    title: 'Building Scalable Full-Stack Apps with the MERN Stack',
    excerpt:
      'A deep dive into setting up MongoDB, Express, React, and Node.js with clean architecture and production best practices.',
    date: 'August 15, 2024',
    author: 'Vithusan',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Mastering State Management and UI Performance in React 18',
    excerpt:
      'Learn how to leverage React concurrent features, transitions, and modern state hooks to build buttery smooth interfaces.',
    date: 'July 28, 2024',
    author: 'Vithusan',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Modern API Design & Security Best Practices in Express',
    excerpt:
      'Implementing rate limiting, JWT authentication, data validation, and error handling for production APIs.',
    date: 'July 10, 2024',
    author: 'Vithusan',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop&q=80',
  },
];

const Blog = () => {
  const posts = staticPosts;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="blog" className="py-24 bg-slate-50 dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
            Articles &amp; Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Latest Blog Posts
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id || post._id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:border-accent/40 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-dark">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-accent" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser className="text-accent" /> {post.author}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-gray-300 text-sm mb-5 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-dark-border">
                  <a
                    href={`#blog/${post.id || post._id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary dark:text-accent hover:underline"
                  >
                    Read Article <FaArrowRight size={12} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
