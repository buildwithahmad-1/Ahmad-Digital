import { navLinks, socials } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <a href="#home" className="text-xl font-extrabold">
            <span className="gradient-text">Bilal</span>
            <span className="text-slate-800 dark:text-white">.dev</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
            Full Stack MERN Developer building modern, scalable web applications.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold">Connect</h4>
          <div className="mt-4 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="glass rounded-full p-3 text-lg text-slate-600 transition-all hover:scale-110 hover:text-primary dark:text-slate-300 dark:hover:text-accent"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/60 py-5 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        © {new Date().getFullYear()} Bilal Ahmad. All rights reserved.
      </div>
    </footer>
  );
}
