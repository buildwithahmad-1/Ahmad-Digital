import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Skills"
        title="My Tech Stack"
        subtitle="Technologies I use to build modern, fast, and scalable websites and online stores."
      />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glass group flex flex-col items-center gap-3 rounded-2xl p-6 text-center"
          >
            <skill.icon
              className="text-4xl transition-transform duration-300 group-hover:scale-125"
              style={{ color: skill.color }}
            />
            <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
