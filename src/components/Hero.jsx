import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiFolder } from 'react-icons/fi';
import DeveloperIllustration from './DeveloperIllustration.jsx';
import HeroPopup from './HeroPopup.jsx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const words = ['Hi,',"I'm", 'Ahmad', 'Shahzad'];

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowPopup(true), 5000);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Decorative gradient blobs with animation */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [30, -30, 30],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
      />

      {/* Floating animated shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-20 right-1/4 h-32 w-32 rounded-3xl border-2 border-primary/30 blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [-360, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute bottom-1/3 left-1/4 h-24 w-24 rounded-full border-2 border-secondary/30 blur-sm"
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute top-1/3 left-10 h-40 w-40 rounded-[40px] border border-primary/20 blur-md"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute bottom-20 right-1/3 h-28 w-28 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl"
      />

      <div className="section grid items-center gap-16 lg:gap-20 lg:grid-cols-2 relative z-10">
        <motion.div>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium animate-blink-heavy"
            style={{ color: '#676DF6' }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/20" />
            Welcome to my portfolio
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="mt-3 h-2 w-48 overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-700/70"
          >
            <div className="h-full w-full rounded-full bg-gradient-to-r from-primary to-secondary animate-timer-bar" />
          </motion.div>
          <motion.h1 
            className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-[0.01em] sm:text-5xl lg:text-6xl"
          >
            {words.slice(0, 2).map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: i * 0.2,
                }}
                style={{ display: 'inline-block', marginRight: 8 }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {words.slice(2).map((word, i) => (
              <motion.span
                key={i + 2}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: (i + 2) * 0.2,
                }}
                className={i + 2 === 2 || i + 2 === 3 ? 'gradient-text' : ''}
                style={{ display: 'inline-block', marginRight: i === words.slice(2).length - 1 ? 0 : 8 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-slate-600 dark:text-slate-400"
          >
            Expert WordPress & E-Commerce Developer specializing in WordPress Automation, Custom WordPress Development, Shopify Store Creation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.button
              type="button"
              onClick={() => setShowPopup(true)}
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me <FiArrowRight />
            </motion.button>
            <a href="#projects" className="btn-outline animate-border inline-flex items-center gap-2">
              <FiFolder /> View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto w-full max-w-md lg:max-w-lg relative"
        >
          {/* Animated glow ring around illustration */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl -z-10"
          />

          {/* Floating animation for illustration */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <DeveloperIllustration />
          </motion.div>

          {/* Floating decoration orbs */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-8 -right-8 h-16 w-16 rounded-full bg-primary/30 blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-secondary/30 blur-2xl"
          />
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <HeroPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-400">
          <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-current rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
