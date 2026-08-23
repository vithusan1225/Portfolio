import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

import { testimonials } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Testimonials = () => {
  const testimonialList = Array.isArray(testimonials)
    ? testimonials
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * ------------------------------------------------------------
   * Keep index valid if testimonial data changes
   * ------------------------------------------------------------
   */

  useEffect(() => {
    if (
      testimonialList.length > 0 &&
      currentIndex >= testimonialList.length
    ) {
      setCurrentIndex(0);
    }
  }, [currentIndex, testimonialList.length]);

  /*
   * ------------------------------------------------------------
   * Navigation
   * ------------------------------------------------------------
   */

  const handlePrev = useCallback(() => {
    if (testimonialList.length <= 1) return;

    setCurrentIndex(
      (previous) =>
        (previous - 1 + testimonialList.length) %
        testimonialList.length
    );
  }, [testimonialList.length]);

  const handleNext = useCallback(() => {
    if (testimonialList.length <= 1) return;

    setCurrentIndex(
      (previous) =>
        (previous + 1) % testimonialList.length
    );
  }, [testimonialList.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);

    // Resume autoplay after a short interaction period.
    window.setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  /*
   * ------------------------------------------------------------
   * Autoplay
   * ------------------------------------------------------------
   */

  useEffect(() => {
    if (
      testimonialList.length <= 1 ||
      isPaused
    ) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      // Don't automatically change slides when the page
      // isn't visible.
      if (document.visibilityState === 'visible') {
        setCurrentIndex(
          (previous) =>
            (previous + 1) % testimonialList.length
        );
      }
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, testimonialList.length]);

  /*
   * ------------------------------------------------------------
   * Keyboard navigation
   * ------------------------------------------------------------
   */

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrev();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    }
  };

  /*
   * ------------------------------------------------------------
   * Empty state
   * ------------------------------------------------------------
   */

  if (testimonialList.length === 0) {
    return null;
  }

  const currentTestimonial =
    testimonialList[currentIndex];

  return (
    <section
      id="testimonials"
      className="border-t border-light-border bg-white py-24 transition-colors duration-300 dark:border-dark-border dark:bg-black md:py-32"
      aria-label="Testimonials"
      onKeyDown={handleKeyDown}
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* ======================================================
            SECTION HEADING
        ======================================================= */}

        <SectionHeading
          eyebrow="Endorsements"
          title="What People Say"
          align="center"
          className="mb-14"
        />

        {/* ======================================================
            TESTIMONIAL CARD
        ======================================================= */}

        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-light-border bg-light-cardHover p-8 shadow-sm transition-colors duration-300 dark:border-dark-border dark:bg-dark-card sm:p-12">
            {/* Large quote icon */}

            <FaQuoteLeft
              aria-hidden="true"
              className="pointer-events-none absolute left-6 top-6 text-5xl text-light-border dark:text-dark-border sm:text-6xl"
            />

            {/* ==================================================
                TESTIMONIAL CONTENT
            =================================================== */}

            <div
              className="relative z-10 flex min-h-[280px] items-center justify-center px-5 sm:min-h-[250px] sm:px-8"
              role="region"
              aria-live="polite"
              aria-label={`Testimonial ${currentIndex + 1} of ${testimonialList.length}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex w-full flex-col items-center text-center"
                >
                  {/* Quote */}

                  <blockquote className="mb-8 max-w-2xl text-base font-light italic leading-relaxed text-light-text dark:text-dark-text sm:text-lg md:text-xl">
                    “{currentTestimonial?.text ||
                      'Great experience working together.'}”
                  </blockquote>

                  {/* Author */}

                  <div className="flex items-center gap-3">
                    {currentTestimonial?.image ? (
                      <img
                        src={currentTestimonial.image}
                        alt={
                          currentTestimonial?.name ||
                          'Testimonial author'
                        }
                        loading="lazy"
                        decoding="async"
                        className="h-12 w-12 rounded-full border-2 border-light-text object-cover grayscale transition-all duration-300 hover:grayscale-0 dark:border-white"
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-light-text bg-slate-100 text-sm font-bold text-light-text dark:border-white dark:bg-dark dark:text-white">
                        {currentTestimonial?.name
                          ?.charAt(0)
                          ?.toUpperCase() || '?'}
                      </div>
                    )}

                    <div className="text-left">
                      <h4 className="text-sm font-bold text-light-text dark:text-white sm:text-base">
                        {currentTestimonial?.name ||
                          'Anonymous'}
                      </h4>

                      {currentTestimonial?.role && (
                        <p className="mt-0.5 text-xs text-light-muted dark:text-dark-muted">
                          {currentTestimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ==================================================
                PREVIOUS BUTTON
            =================================================== */}

            {testimonialList.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    handlePrev();
                    setIsPaused(true);

                    window.setTimeout(
                      () => setIsPaused(false),
                      8000
                    );
                  }}
                  aria-label="Previous testimonial"
                  className="group absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-light-border bg-white text-light-text shadow-sm transition-all duration-300 hover:scale-110 hover:border-light-text dark:border-dark-border dark:bg-dark dark:text-white dark:hover:border-white sm:left-5 sm:h-10 sm:w-10"
                >
                  <FaChevronLeft
                    size={12}
                    className="transition-transform group-hover:-translate-x-0.5"
                  />
                </button>

                {/* ==================================================
                    NEXT BUTTON
                =================================================== */}

                <button
                  type="button"
                  onClick={() => {
                    handleNext();
                    setIsPaused(true);

                    window.setTimeout(
                      () => setIsPaused(false),
                      8000
                    );
                  }}
                  aria-label="Next testimonial"
                  className="group absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-light-border bg-white text-light-text shadow-sm transition-all duration-300 hover:scale-110 hover:border-light-text dark:border-dark-border dark:bg-dark dark:text-white dark:hover:border-white sm:right-5 sm:h-10 sm:w-10"
                >
                  <FaChevronRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </>
            )}
          </div>

          {/* ====================================================
              DOT INDICATORS
          ===================================================== */}

          {testimonialList.length > 1 && (
            <div
              className="mt-6 flex justify-center gap-2"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {testimonialList.map((testimonial, index) => {
                const isActive =
                  index === currentIndex;

                return (
                  <button
                    key={
                      testimonial?.name
                        ? `${testimonial.name}-${index}`
                        : index
                    }
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to testimonial ${
                      index + 1
                    }`}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-text focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-black ${
                      isActive
                        ? 'w-7 bg-light-text dark:bg-white'
                        : 'w-2 bg-light-border hover:bg-slate-400 dark:bg-dark-border dark:hover:bg-zinc-500'
                    }`}
                  />
                );
              })}
            </div>
          )}

          {/* ====================================================
              SLIDE COUNTER
          ===================================================== */}

          {testimonialList.length > 1 && (
            <p className="mt-4 text-center font-mono text-[10px] font-semibold uppercase tracking-widest text-light-muted dark:text-dark-muted">
              {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(testimonialList.length).padStart(2, '0')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;