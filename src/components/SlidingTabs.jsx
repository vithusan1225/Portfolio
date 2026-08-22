import React, { useRef, useEffect } from 'react';

const SlidingTabs = ({ tabs, activeTab, onTabChange, className = '' }) => {
  const tabsContainerRef = useRef(null);
  const pillRef = useRef(null);
  const tabRefs = useRef([]);

  const updatePillPosition = (animate = true) => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeBtn = tabRefs.current[activeIndex];
    const pill = pillRef.current;

    if (activeBtn && pill) {
      if (!animate) {
        pill.style.transition = 'none';
      }
      pill.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
      pill.style.width = `${activeBtn.offsetWidth}px`;

      if (!animate) {
        // Force reflow and restore transition
        pill.offsetHeight;
        pill.style.transition = '';
      }
    }
  };

  useEffect(() => {
    // Initial mount without animation
    updatePillPosition(false);

    const handleResize = () => updatePillPosition(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    updatePillPosition(true);
  }, [activeTab]);

  return (
    <div
      ref={tabsContainerRef}
      className={`t-tabs border border-light-border dark:border-dark-border ${className}`}
      role="tablist"
    >
      <span ref={pillRef} className="t-tabs-pill" aria-hidden="true" />
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          ref={(el) => (tabRefs.current[idx] = el)}
          role="tab"
          aria-selected={activeTab === tab}
          onClick={() => onTabChange(tab)}
          className="t-tab font-semibold"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SlidingTabs;
