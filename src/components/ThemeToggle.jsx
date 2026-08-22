import React, { useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isInit, setIsInit] = useState(false);

  const handleClick = () => {
    if (!isInit) setIsInit(true);
    toggleTheme();
  };

  return (
    <button
      role="switch"
      aria-checked={isDark}
      data-on={isDark ? 'true' : 'false'}
      onClick={handleClick}
      className={`t-toggle border ${
        isDark
          ? 'bg-dark-card border-dark-border'
          : 'bg-slate-200 border-slate-300'
      } ${isInit ? 'is-init' : ''} ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="t-toggle-thumb">
        {isDark ? (
          <HiSun className="w-3.5 h-3.5 text-accent" />
        ) : (
          <HiMoon className="w-3.5 h-3.5 text-primary" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
