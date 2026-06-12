import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { HiSparkles, HiRocketLaunch, HiUsers } from 'react-icons/hi2';
import SectionHeading from './SectionHeading.jsx';

const stats = [
  { value: '3+', label: 'Years Experience', icon: HiSparkles, color: 'from-purple-600/20 to-blue-600/20', iconColor: 'text-purple-600' },
  { value: '25+', label: 'Projects Delivered', icon: HiRocketLaunch, color: 'from-blue-600/20 to-cyan-600/20', iconColor: 'text-blue-600' },
  { value: '15+', label: 'Happy Clients', icon: HiUsers, color: 'from-cyan-600/20 to-teal-600/20', iconColor: 'text-cyan-600' },
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
          className="space-y-4"
        >
          {stats.map((s, index) => {
            const IconComponent = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 blur-xl transition duration-500`} />
                <div className="relative flex items-center gap-6 rounded-2xl border border-slate-200/40 bg-white/60 backdrop-blur-xl p-6 shadow-lg shadow-slate-900/5 transition duration-300 hover:border-slate-300/60 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-700/40 dark:bg-slate-900/50 dark:hover:border-slate-600/60">
                  {/* Icon */}
                  <div className={`flex-shrink-0 h-16 w-16 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                    <IconComponent className={`w-8 h-8 ${s.iconColor} dark:opacity-90`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <p className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">{s.value}</p>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{s.label}</p>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Results-driven and client-approved.</p>
                  </div>
                  
                  {/* Accent dot */}
                  <div className="flex-shrink-0 h-3 w-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-400/30" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I’m a passionate <strong className="text-slate-900 dark:text-white">WordPress Developer, Custom WordPress Theme Developer, and Shopify Store Developer</strong> who specializes in building modern, high-performance websites that help businesses grow online. I also work in digital marketing, focusing on creating conversion-driven web experiences.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            When I’m not building websites, I’m exploring new tools, improving my development skills, and learning modern digital marketing strategies.
          </p>
          <a href="/Ahmad%20Resume.pdf" download className="btn-primary mt-8">
            <FiDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
