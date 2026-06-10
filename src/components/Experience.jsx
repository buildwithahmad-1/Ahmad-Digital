import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { timeline } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="Journey"
        title="Experience Timeline"
        subtitle="My path from curious learner to professional full stack developer."
      />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-brand sm:left-1/2" />
        {timeline.map((entry, i) => (
          <motion.div
            key={entry.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className={`relative mb-12 pl-12 sm:w-1/2 sm:pl-0 ${
              i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
            }`}
          >
            <span
              className={`absolute top-1 left-2.5 h-4 w-4 rounded-full bg-gradient-brand ring-4 ring-slate-50 dark:ring-dark ${
                i % 2 === 0 ? 'sm:left-auto sm:-right-2' : 'sm:-left-2'
              }`}
            />
            <div className="glass rounded-2xl p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">{entry.period}</span>
              <h3 className="mt-1 text-lg font-bold">{entry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{entry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
