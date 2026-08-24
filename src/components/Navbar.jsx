import React, { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import ThemeToggle from './ThemeToggle';
import logo from '../data/LOGO.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  /* ==========================================================
     SCROLL + ACTIVE SECTION
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', ...navLinks.map((link) => link.id)];

      let currentSection = 'hero';

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ==========================================================
     ESCAPE KEY
  ========================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  /* ==========================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================== */

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  /* ==========================================================
     SCROLL TO SECTION
  ========================================================== */

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      {/* ======================================================
          DESKTOP / MAIN NAVBAR
      ======================================================= */}

      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className={`fixed left-4 right-4 top-4 z-50 rounded-full border transition-all duration-300 md:left-12 md:right-12 lg:left-24 lg:right-24 ${
          isScrolled
            ? 'border-light-border bg-white/90 shadow-xl shadow-black/10 backdrop-blur-xl dark:border-dark-border dark:bg-[#0b0b0b]/90 dark:shadow-black/40'
            : 'border-light-border/80 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-md dark:border-dark-border/80 dark:bg-[#111]/80'
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-5 sm:px-6 md:px-8">
          {/* ==================================================
              BRAND
          =================================================== */}

          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-light-text dark:focus-visible:ring-white"
            aria-label="Go to homepage"
          >
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg">
              <img
                src={logo}
                alt="Vithusan logo"
                className="h-8 w-8 object-contain grayscale contrast-125 transition-transform duration-300 group-hover:scale-110 dark:invert"
              />
            </div>

            <span className="font-display text-lg font-extrabold tracking-tight text-light-text dark:text-white">
              Vithusan<span className="text-light-muted dark:text-dark-muted">.</span>
            </span>
          </button>

          {/* ==================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-accent'
                      : 'text-light-muted hover:text-accent dark:text-dark-muted dark:hover:text-accent'
                  }`}
                >
                  {link.name}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ==================================================
              RIGHT CONTROLS
          =================================================== */}

          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen((previous) => !previous)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full text-light-text transition-colors hover:bg-light-cardHover dark:text-white dark:hover:bg-dark-card lg:hidden"
              aria-label={
                isMobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <HiX size={23} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <HiMenuAlt3 size={23} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ======================================================
          MOBILE MENU
      ======================================================= */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] cursor-default bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              id="mobile-navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className="fixed bottom-0 right-0 top-0 z-[70] flex w-[min(85vw,360px)] flex-col border-l border-light-border bg-white shadow-2xl dark:border-dark-border dark:bg-[#080808] lg:hidden"
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex h-20 items-center justify-between border-b border-light-border px-6 dark:border-dark-border">
                <button
                  type="button"
                  onClick={() => scrollToSection('hero')}
                  className="flex items-center gap-2"
                >
                  <img
                    src={logo}
                    alt="Vithusan logo"
                    className="h-8 w-8 object-contain grayscale contrast-125 dark:invert"
                  />

                  <span className="font-display text-lg font-extrabold tracking-tight text-light-text dark:text-white">
                    Vithusan<span className="text-light-muted dark:text-dark-muted">.</span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-light-text hover:bg-light-cardHover dark:text-white dark:hover:bg-dark-card"
                  aria-label="Close navigation menu"
                >
                  <HiX size={23} />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-1 flex-col px-5 py-6">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;

                  return (
                    <motion.button
                      key={link.id}
                      type="button"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      onClick={() => scrollToSection(link.id)}
                      className={`group flex items-center justify-between border-b border-light-border py-4 text-left transition-colors dark:border-dark-border ${
                        isActive
                          ? 'text-light-text dark:text-white'
                          : 'text-light-muted dark:text-dark-muted'
                      }`}
                    >
                      <span className="text-base font-semibold">
                        {link.name}
                      </span>

                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'scale-100 bg-light-text dark:bg-white'
                            : 'scale-0 bg-light-muted group-hover:scale-100 dark:bg-dark-muted'
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div className="border-t border-light-border px-6 py-6 dark:border-dark-border">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-light-muted dark:text-dark-muted">
                  Statistics × Technology
                </p>

                <p className="mt-2 text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                  Full-Stack Developer building modern web experiences
                  with code and data.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;