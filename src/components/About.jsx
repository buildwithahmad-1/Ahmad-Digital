import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '15+', label: 'Happy Clients' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About Me" title="Who I Am" />
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-5">
                <p className="gradient-text text-3xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I'm a passionate <strong className="text-slate-900 dark:text-white">Full Stack MERN Developer</strong> who
            loves turning complex problems into elegant, scalable web applications. From crafting intuitive React
            interfaces to architecting robust Node.js backends and designing efficient databases, I handle the entire
            product lifecycle.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            With hands-on experience in freelance and professional environments, I focus on clean code, performance and
            delightful user experiences. When I'm not shipping features, I'm exploring new technologies and contributing
            to open source.
          </p>
          <a href="/resume.pdf" download className="btn-primary mt-8">
            <FiDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
