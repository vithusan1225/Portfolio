import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../data/portfolioData';

const Testimonials = () => {
  const fallbackTestimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Tech Solutions Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      text: 'An exceptional developer who consistently delivers robust, high-quality work on time. A true asset to any project.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, Digital Agency Co.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      text: 'Brought creative solutions to our most complex full-stack challenges. Excellent communication and work ethic.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager, StartUp Labs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      text: 'Technical proficiency combined with design intuition. Transformed our concepts into seamless web experiences.',
    },
  ];

  const testimonialsData =
    testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonialsData.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-dark-card/40 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
            Endorsements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            What People Say
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="t-resize bg-slate-50 dark:bg-dark-card border border-slate-200/80 dark:border-dark-border rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <FaQuoteLeft className="text-5xl sm:text-6xl text-accent/20 dark:text-accent/20 absolute top-6 left-6 -z-0" />

            <div className="t-resize relative z-10 min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="t-resize flex flex-col items-center text-center w-full"
                >
                  <p className="text-base sm:text-lg text-slate-700 dark:text-gray-200 italic mb-8 leading-relaxed font-light">
                    "{testimonialsData[currentIndex].text}"
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={testimonialsData[currentIndex].image}
                      alt={testimonialsData[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent shadow-sm"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        {testimonialsData[currentIndex].name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-gray-400">
                        {testimonialsData[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="t-resize absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-dark border border-slate-200 dark:border-dark-border text-slate-600 dark:text-gray-300 hover:text-accent hover:border-accent hover:scale-110 shadow-sm transition-all"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={14} />
            </button>

            <button
              onClick={handleNext}
              className="t-resize absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-dark border border-slate-200 dark:border-dark-border text-slate-600 dark:text-gray-300 hover:text-accent hover:border-accent hover:scale-110 shadow-sm transition-all"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={14} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`t-resize h-2 rounded-full ${
                  idx === currentIndex
                    ? 'w-6 bg-accent'
                    : 'w-2 bg-slate-300 dark:bg-dark-border'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
