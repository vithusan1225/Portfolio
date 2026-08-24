import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
  eyebrow,
  title,
  description,
  className = 'mb-16',
  align = 'left',
}) => {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className={`flex flex-col ${
        isCentered
          ? 'items-center text-center'
          : 'items-start text-left'
      } ${className}`}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-2 ${
            isCentered ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="h-px w-6 bg-accent" />

          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-light-muted dark:text-dark-muted">
            {eyebrow}
          </span>

          <span className="h-px w-6 bg-accent" />
        </div>
      )}

      {/* Title */}
      <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-light-text dark:text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Optional Description */}
      {description && (
        <p
          className={`mt-5 max-w-2xl text-sm leading-relaxed text-light-muted dark:text-dark-muted sm:text-base ${
            isCentered ? 'text-center' : 'text-left'
          }`}
        >
          {description}
        </p>
      )}

      {/* Accent line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: 'easeOut',
        }}
        className="mt-5 h-1 rounded-full bg-accent"
      />
    </motion.div>
  );
};

export default SectionHeading;