import React from 'react';
import { motion } from 'framer-motion';

// Animated Words component (animates each word in sequence)
export const AnimatedWords = ({ text = '', className = '', delay = 0, stagger = 0.04, once = true }) => {
  if (!text) return null;
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 18,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block mr-[0.25em] whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Animated Characters component (animates letter by letter)
export const AnimatedLetters = ({ text = '', className = '', delay = 0, stagger = 0.03, once = true }) => {
  if (!text) return null;
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
          {Array.from(word).map((char, cIdx) => (
            <motion.span
              key={cIdx}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

// Fade & Slide up container for sections or cards
export const FadeInUp = ({ children, className = '', delay = 0, duration = 0.5, distance = 24, once = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale in animation wrapper
export const ScaleIn = ({ children, className = '', delay = 0, duration = 0.4, once = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once }}
      transition={{ duration, delay, type: 'spring', stiffness: 120, damping: 14 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
