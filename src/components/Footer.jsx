import { navLinks, socials } from '../data/portfolio.js';

export default function Footer() {
  const scrollToSection = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-200/60 dark:border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `${window.location.pathname}#home`;
              window.location.reload();
            }}
            className="text-xl font-extrabold"
          >
            <span className="gradient-text">Ahmad</span>
            <span className="text-slate-800 dark:text-white"> Digital</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
            WordPress Developer, Custom Theme & Shopify Developer building modern, high-performing websites and online stores.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('http');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={isExternal ? undefined : (e) => scrollToSection(e, link.href)}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
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
        © {new Date().getFullYear()} 2026 Ahmad Digital | All rights reserved.
      </div>
    </footer>
  );
}
