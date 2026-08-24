import React, { useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isInit, setIsInit] = useState(false);

  const handleClick = () => {
    setIsInit(true);
    toggleTheme();
  };

  const mode = isDark ? 'light' : 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${mode} mode`}
      title={`Switch to ${mode} mode`}
      data-on={isDark}
      onClick={handleClick}
      className={`
        t-toggle
        border
        ${
          isDark
            ? 'bg-dark-cardHover border-dark-text/50'
            : 'bg-light-cardHover border-light-border'
        }
        ${isInit ? 'is-init' : ''}
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/70
        ${className}
      `}
    >
      <span className="t-toggle-thumb">
        {isDark ? (
          <HiSun
            className="w-3.5 h-3.5 text-black"
            aria-hidden="true"
          />
        ) : (
          <HiMoon
            className="w-3.5 h-3.5 text-black"
            aria-hidden="true"
          />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;