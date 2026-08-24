import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
} from 'react-icons/fa';

import { personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const email = personalInfo?.email;
  const phone = personalInfo?.phone;
  const location = personalInfo?.location || 'Sri Lanka';

  const contactDetails = [
    {
      id: 'email',
      label: 'Email',
      value: email || 'Email not available',
      href: email ? `mailto:${email}` : null,
      icon: FaEnvelope,
      description: 'Send me an email',
    },
    {
      id: 'phone',
      label: 'Phone',
      value: phone || 'Phone not available',
      href: phone ? `tel:${phone}` : null,
      icon: FaPhone,
      description: 'Give me a call',
    },
    {
      id: 'location',
      label: 'Location',
      value: location,
      href: null,
      icon: FaMapMarkerAlt,
      description: 'Currently based in',
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-light-border bg-white py-24 transition-colors duration-300 dark:border-dark-border dark:bg-black md:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/10" />

        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <SectionHeading
          eyebrow="Let's Talk"
          title="Get In Touch"
          className="mb-14"
          align="center"
        />

        {/* =====================================================
            MAIN CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h3 className="text-3xl font-extrabold tracking-tight text-light-text dark:text-white sm:text-4xl md:text-5xl">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-light-muted dark:text-dark-muted sm:text-lg">
            Whether you have a project idea, a collaboration opportunity,
            or simply want to connect, feel free to reach out. I'm always
            interested in building meaningful things with code and data.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT CARDS
        ====================================================== */}

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((contact, index) => {
            const Icon = contact.icon;

            const cardContent = (
              <>
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-light-text transition-all duration-300 group-hover:scale-110 group-hover:bg-light-text group-hover:text-white dark:bg-white/10 dark:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                  <Icon className="text-lg" />
                </div>

                {/* Label */}
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-light-muted dark:text-dark-muted">
                  {contact.label}
                </p>

                {/* Value */}
                <p className="break-words text-sm font-bold text-light-text dark:text-white sm:text-base">
                  {contact.value}
                </p>

                {/* Description */}
                <p className="mt-2 text-xs text-light-muted dark:text-dark-muted">
                  {contact.description}
                </p>

                {/* Arrow */}
                {contact.href && (
                  <FaArrowRight className="absolute right-5 top-5 text-xs text-light-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:text-dark-muted" />
                )}
              </>
            );

            return (
              <motion.div
                key={contact.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: '-50px',
                }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="group relative flex h-full min-h-[180px] flex-col rounded-2xl border border-light-border bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-light-text hover:shadow-xl dark:border-dark-border dark:bg-dark-card dark:hover:border-white"
                    aria-label={`${contact.description}: ${contact.value}`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className="group relative flex h-full min-h-[180px] flex-col rounded-2xl border border-light-border bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-light-text hover:shadow-xl dark:border-dark-border dark:bg-dark-card dark:hover:border-white">
                    {cardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            SOCIAL PROFILES
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mx-auto mt-14 max-w-5xl border-t border-light-border pt-10 text-center dark:border-dark-border"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-light-muted dark:text-dark-muted">
            Connect With Me
          </p>

          <div className="flex justify-center">
            <SocialLinks socials={personalInfo?.socials} />
          </div>
        </motion.div>
{/* =====================================================
    BOTTOM CTA
====================================================== */}

{email && (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: 0.4,
    }}
    className="mt-12 text-center"
  >
    <a
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="t-resize inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-xl"
    >
      Start a conversation
      <FaArrowRight className="text-xs" />
    </a>
  </motion.div>
)}
      </div>
    </section>
  );
};

export default Contact;