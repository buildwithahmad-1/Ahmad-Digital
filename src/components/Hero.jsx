import { motion } from 'framer-motion';
import { FiArrowRight, FiFolder } from 'react-icons/fi';
import DeveloperIllustration from './DeveloperIllustration.jsx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="section grid items-center gap-12 pt-28 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="glass inline-block rounded-full px-4 py-1.5 text-sm font-medium text-accent"
          >
            👋 Welcome to my portfolio
          </motion.span>
          <motion.h1 variants={item} className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="gradient-text">Bilal Ahmad</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            Full Stack MERN Developer specializing in React, Node.js, Express.js, MongoDB, PostgreSQL and REST APIs.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Hire Me <FiArrowRight />
            </a>
            <a href="#projects" className="btn-outline">
              <FiFolder /> View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="animate-float mx-auto w-full max-w-md lg:max-w-lg"
        >
          <DeveloperIllustration />
        </motion.div>
      </div>
    </section>
  );
}
