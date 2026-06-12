import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';
import { testimonials } from '../data/portfolio.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Clients Say"
        subtitle="Feedback from people I've had the pleasure of working with."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass flex flex-col rounded-3xl p-8"
          >
            <FaQuoteLeft className="text-3xl text-primary/40" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-lg text-white">
                <t.icon />
              </div>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
