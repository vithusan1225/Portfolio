import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-black text-slate-700 dark:text-gray-300 py-5 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-gray-500 gap-2">
          <p>&copy; 2026 Vithusan Santhirakumar. All rights reserved.</p>
          <p>
            Built with <span className="text-accent font-semibold">React &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
