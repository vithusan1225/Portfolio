import React, {
  useCallback,
  useEffect,
  useRef,
} from 'react';

const SlidingTabs = ({
  tabs = [],
  activeTab,
  onTabChange,
  className = '',
}) => {
  const pillRef = useRef(null);
  const tabRefs = useRef([]);
  const resizeObserverRef = useRef(null);

  /*
   * ------------------------------------------------------------
   * Find and position the active pill
   * ------------------------------------------------------------
   */

  const updatePillPosition = useCallback(
    (animate = true) => {
      const activeIndex = tabs.indexOf(activeTab);
      const activeButton = tabRefs.current[activeIndex];
      const pill = pillRef.current;

      if (!activeButton || !pill) {
        return;
      }

      if (!animate) {
        pill.style.transition = 'none';
      }

      pill.style.transform = `translateX(${activeButton.offsetLeft}px)`;
      pill.style.width = `${activeButton.offsetWidth}px`;

      if (!animate) {
        // Force browser reflow before restoring transition.
        void pill.offsetHeight;
        pill.style.transition = '';
      }
    },
    [activeTab, tabs]
  );

  /*
   * ------------------------------------------------------------
   * Initial position + tab changes
   * ------------------------------------------------------------
   */

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      updatePillPosition(false);
    });

    return () => cancelAnimationFrame(frame);
  }, [updatePillPosition]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      updatePillPosition(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [activeTab, updatePillPosition]);

  /*
   * ------------------------------------------------------------
   * Handle responsive layout changes
   * ------------------------------------------------------------
   */

  useEffect(() => {
    const handleResize = () => {
      updatePillPosition(false);
    };

    window.addEventListener('resize', handleResize);

    /*
     * ResizeObserver is useful when the tabs change size because
     * of fonts, responsive layouts, or container changes.
     */
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserverRef.current = new ResizeObserver(() => {
        updatePillPosition(false);
      });

      if (pillRef.current?.parentElement) {
        resizeObserverRef.current.observe(
          pillRef.current.parentElement
        );
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);

      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
    };
  }, [updatePillPosition]);

  /*
   * ------------------------------------------------------------
   * Keyboard navigation
   * ------------------------------------------------------------
   */

  const handleKeyDown = (event, index) => {
    if (!tabs.length) return;

    let nextIndex = index;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        nextIndex = (index + 1) % tabs.length;
        break;

      case 'ArrowLeft':
        event.preventDefault();
        nextIndex =
          (index - 1 + tabs.length) % tabs.length;
        break;

      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        break;

      case 'End':
        event.preventDefault();
        nextIndex = tabs.length - 1;
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        onTabChange(tabs[index]);
        return;

      default:
        return;
    }

    onTabChange(tabs[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  };

  /*
   * ------------------------------------------------------------
   * Empty state
   * ------------------------------------------------------------
   */

  if (!tabs.length) {
    return null;
  }

  return (
    <div
      className={`t-tabs relative inline-flex items-center overflow-hidden rounded-full border border-light-border bg-white p-1 dark:border-dark-border dark:bg-dark-card ${className}`}
      role="tablist"
      aria-label="Filter options"
    >
      {/* ======================================================
          SLIDING ACTIVE PILL
      ======================================================= */}

      <span
        ref={pillRef}
        className="t-tabs-pill pointer-events-none absolute left-0 top-1 bottom-1 rounded-full bg-light-text transition-[transform,width] duration-300 ease-out dark:bg-white"
        aria-hidden="true"
      />

      {/* ======================================================
          TABS
      ======================================================= */}

      {tabs.map((tab, index) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={`${tab}-${index}`}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onTabChange(tab)}
            onKeyDown={(event) =>
              handleKeyDown(event, index)
            }
            className={`t-tab relative z-10 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-text focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-black sm:px-5 sm:text-sm ${
              isActive
                ? 'text-white dark:text-black'
                : 'text-light-muted hover:text-light-text dark:text-dark-muted dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default SlidingTabs;