import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="A selection of projects that showcase my skills across the full stack."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass group flex flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary flex-1 !px-4 !py-2 text-sm">
                  <FiExternalLink /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline flex-1 !px-4 !py-2 text-sm">
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
