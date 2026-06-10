import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</span>
      <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </motion.div>
  );
}
