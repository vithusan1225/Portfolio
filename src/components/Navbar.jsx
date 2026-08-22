import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-7xl rounded-full py-3.5 transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark/85 backdrop-blur-md shadow-xl dark:shadow-black/50 border border-light-border dark:border-dark-border'
          : 'bg-white/55 dark:bg-dark/60 backdrop-blur-sm shadow-md dark:shadow-black/30 border border-light-border/60 dark:border-dark-border/60'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
        {/* Brand */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <span className="font-bold text-xl tracking-tight text-primary dark:text-white">
            Portfolio<span className="text-accent">.</span>
          </span>
        </div>

        {/* Desktop Nav Links + Theme Switcher */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-all hover:scale-105 hover:text-accent dark:hover:text-accent ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-200'
                  : 'text-gray-800 dark:text-gray-100'
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Theme Switcher Toggle */}
          <div className="pl-3 border-l border-gray-200 dark:border-gray-700 flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav Toggle & Theme Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-72 bg-white dark:bg-dark border-l border-light-border dark:border-dark-border shadow-2xl flex flex-col pt-20 px-6 z-50 md:hidden"
            >
              <div className="flex items-center justify-between pb-6 border-b border-light-border dark:border-dark-border">
                <span className="font-semibold text-gray-900 dark:text-white">Menu</span>
                <ThemeToggle />
              </div>

              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left py-3.5 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-accent border-b border-gray-100 dark:border-gray-800/80 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="mt-auto pb-8 pt-4">
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
