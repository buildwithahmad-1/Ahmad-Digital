import { motion } from 'framer-motion';
import { HiSparkles, HiRocketLaunch, HiStar } from 'react-icons/hi2';
import SectionHeading from './SectionHeading.jsx';
import { timeline } from '../data/portfolio.js';

const icons = [HiSparkles, HiRocketLaunch, HiStar];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="Journey"
        title="Experience Timeline"
        subtitle="A timeline of growth from web basics to professional WordPress and Shopify solutions."
      />

      {/* Timeline Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative mx-auto max-w-5xl px-2 sm:px-4 md:px-6"
      >
        {/* Animated vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-300/30 via-slate-300/30 to-transparent dark:from-slate-700/30 dark:via-slate-700/30 dark:to-transparent" />

        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-primary via-secondary to-primary/50 shadow-[0_0_50px_rgba(99,102,241,0.4)]"
        />

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20">
          {timeline.map((entry, i) => {
            const IconComponent = icons[i];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={entry.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Desktop: Alternating layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-8 md:items-center">
                  {/* Left content (first and third) */}
                  {isEven ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="group"
                      >
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200/40 bg-gradient-to-br from-white/80 to-slate-50/80 p-6 sm:p-7 md:p-8 shadow-xl shadow-slate-900/10 backdrop-blur-xl transition duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 dark:border-slate-700/40 dark:from-slate-900/80 dark:to-slate-950/80 dark:hover:shadow-primary/30">
                          {/* Decorative gradient blur */}
                          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition duration-500" />

                          <motion.div
                            className="relative inline-flex items-center gap-2 sm:gap-3 rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary">
                              {entry.period}
                            </span>
                          </motion.div>

                          <h3 className="relative mt-6 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                            {entry.title}
                          </h3>

                          <p className="relative mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                            {entry.description}
                          </p>

                          {/* Bottom accent */}
                          <div className="relative mt-6 flex items-center gap-3">
                            <div className="h-1 w-10 sm:w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
                            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">Step {i + 1}</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Center dot */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center"
                      >
                        <div className="absolute inset-0 h-28 w-28 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
                        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 shadow-2xl shadow-primary/30">
                          <IconComponent className="h-12 w-12 text-primary" />
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* Center dot */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center"
                      >
                        <div className="absolute inset-0 h-28 w-28 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl" />
                        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-secondary/30 bg-gradient-to-br from-secondary/10 to-primary/10 shadow-2xl shadow-secondary/30">
                          <IconComponent className="h-12 w-12 text-secondary" />
                        </div>
                      </motion.div>

                      {/* Right content (second) */}
                      <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="group"
                      >
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200/40 bg-gradient-to-br from-white/80 to-slate-50/80 p-6 sm:p-7 md:p-8 shadow-xl shadow-slate-900/10 backdrop-blur-xl transition duration-300 hover:border-secondary/40 hover:shadow-2xl hover:shadow-secondary/20 dark:border-slate-700/40 dark:from-slate-900/80 dark:to-slate-950/80 dark:hover:shadow-secondary/30">
                          {/* Decorative gradient blur */}
                          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-secondary/5 blur-3xl group-hover:bg-secondary/10 transition duration-500" />

                          <motion.div
                            className="relative inline-flex items-center gap-2 sm:gap-3 rounded-full bg-secondary/10 px-3 sm:px-4 py-1.5 sm:py-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary">
                              {entry.period}
                            </span>
                          </motion.div>

                          <h3 className="relative mt-6 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                            {entry.title}
                          </h3>

                          <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                            {entry.description}
                          </p>

                          {/* Bottom accent */}
                          <div className="relative mt-6 flex items-center gap-3">
                            <div className="h-1 w-10 sm:w-12 rounded-full bg-gradient-to-r from-secondary to-primary" />
                            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">Step {i + 1}</span>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>

                {/* Mobile: Stacked layout */}
                <div className="md:hidden">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7 }}
                    className="group relative flex gap-3 sm:gap-4"
                  >
                    {/* Dot connector - Fixed position on the left */}
                    <div className="flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="sticky top-32 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center"
                      >
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                        <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 shadow-lg shadow-primary/30">
                          <IconComponent className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Card - Flexible width */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="group flex-1 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/40 bg-gradient-to-br from-white/80 to-slate-50/80 p-4 sm:p-5 md:p-6 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition duration-300 hover:border-primary/40 hover:shadow-xl dark:border-slate-700/40 dark:from-slate-900/80 dark:to-slate-950/80"
                    >
                      <div className="pointer-events-none absolute -right-12 sm:-right-16 -top-12 sm:-top-16 h-24 sm:h-32 w-24 sm:w-32 rounded-full bg-primary/5 blur-2xl" />

                      {/* Period Tag */}
                      <div
                        className="relative inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 sm:px-3 sm:py-1.5"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-primary">
                          {entry.period}
                        </span>
                      </div>

                      {/* Title - Responsive text size */}
                      <h3 className="relative mt-3 sm:mt-4 text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white line-clamp-2">
                        {entry.title}
                      </h3>

                      {/* Description - Responsive text size */}
                      <p className="relative mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                        {entry.description}
                      </p>

                      {/* Bottom accent */}
                      <div className="relative mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                        <div className="h-1 w-8 sm:w-10 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                          Step {i + 1}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Connecting line between items */}
                  {i < timeline.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="absolute left-5 sm:left-6 md:left-7 top-20 h-6 sm:h-8 w-0.5 origin-top bg-gradient-to-b from-primary/60 to-primary/20 dark:from-primary/40 dark:to-primary/10"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
