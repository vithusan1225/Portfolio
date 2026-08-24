import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const github = personalInfo?.socials?.github;
  const linkedin = personalInfo?.socials?.linkedin;

  return (
    <footer className="border-t border-light-border bg-white transition-colors duration-300 dark:border-dark-border dark:bg-black">
      <div className="container mx-auto px-6 md:px-10">
        {/* Main footer */}
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={scrollToTop}
              className="font-display text-xl font-extrabold tracking-tight text-light-text transition-opacity hover:opacity-70 dark:text-white"
            >
              Vithusan<span className="text-light-muted dark:text-dark-muted">.</span>
            </button>

            <p className="mt-2 max-w-sm text-xs leading-relaxed text-light-muted dark:text-dark-muted">
              Statistics × Technology — building modern digital solutions
              with code, data, and curiosity.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-light-border text-light-text transition-all duration-300 hover:-translate-y-1 hover:border-light-text hover:bg-light-text hover:text-white dark:border-dark-border dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
              >
                <FaGithub />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-light-border text-light-text transition-all duration-300 hover:-translate-y-1 hover:border-light-text hover:bg-light-text hover:text-white dark:border-dark-border dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
              >
                <FaLinkedinIn />
              </a>
            )}

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-light-text text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-80 dark:bg-white dark:text-black"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-light-border py-5 text-center text-xs text-light-muted dark:border-dark-border dark:text-dark-muted sm:flex-row sm:text-left">
          <p>
            © {currentYear} Vithusan Santhirakumar. All rights reserved.
          </p>

          <p>
            Built with{' '}
            <span className="font-semibold text-light-text dark:text-white">
              React
            </span>{' '}
            &{' '}
            <span className="font-semibold text-light-text dark:text-white">
              Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;