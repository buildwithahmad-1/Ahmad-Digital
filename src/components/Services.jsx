import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { services } from '../data/portfolio.js';

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionHeading
        eyebrow="Services"
        title="What I Offer"
        subtitle="End-to-end development services tailored to bring your ideas to life."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass group relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="mb-5 inline-flex rounded-2xl bg-gradient-brand p-3.5 text-2xl text-white shadow-lg shadow-primary/30">
              <service.icon />
            </div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
