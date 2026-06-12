import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { navLinks } from '../data/portfolio.js';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setOpen(false);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-extrabold" onClick={(e) => {
          e.preventDefault();
          window.location.href = window.location.pathname;
        }}>
          <span className="gradient-text text-xl">Ahmad </span>
          <span className="text-xl text-slate-800 dark:text-white">Digital</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(link.href);
                }}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="glass rounded-full p-2.5 text-lg text-primary transition-transform hover:scale-110 dark:text-accent"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('#contact');
            }}
            className="btn-primary hidden !px-5 !py-2 text-sm md:inline-flex"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="glass rounded-full p-2.5 text-lg md:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-full z-50 px-4 md:hidden"
          >
            <ul className="overflow-hidden rounded-2xl bg-white/20 dark:bg-white/8 border border-white/10 bg-clip-padding backdrop-blur-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.href);
                    }}
                    className="w-full text-left block px-6 py-3 font-medium text-slate-700 transition-colors hover:text-primary dark:text-slate-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
