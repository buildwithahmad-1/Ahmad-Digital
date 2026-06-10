import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import { socials } from '../data/portfolio.js';

const inputClasses =
  'w-full rounded-xl border border-slate-300/60 bg-white/60 px-4 py-3 text-sm outline-none backdrop-blur transition-all focus:border-primary focus:ring-2 focus:ring-primary/40 dark:border-white/10 dark:bg-white/5 dark:placeholder-slate-500';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your backend or a service like Formspree / EmailJS.
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind? Drop me a message and let's build something great."
      />
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass space-y-5 rounded-3xl p-8 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className={inputClasses}
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className={inputClasses}
          />
          <button type="submit" className="btn-primary w-full sm:w-auto">
            <FiSend /> {sent ? 'Message Sent!' : 'Send Message'}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 lg:col-span-2"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:scale-[1.02]"
            >
              <span className="rounded-xl bg-gradient-brand p-3 text-xl text-white shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                <social.icon />
              </span>
              <div>
                <p className="font-bold">{social.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Reach me on {social.label}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
