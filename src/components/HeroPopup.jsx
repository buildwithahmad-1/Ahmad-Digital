import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight } from 'react-icons/fi';

export default function HeroPopup({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-2xl dark:bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close popup"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 shadow-sm transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <FiX className="h-5 w-5" />
            </button>

            <div className="relative z-10 px-6 py-8 text-center sm:px-8 sm:py-10">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-lg shadow-primary/10 dark:bg-primary/20">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                Get your free Website Audit today
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                Get a professional audit of your website and discover optimization opportunities.
              </p>

              <div className="mt-8 space-y-3 text-left text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  Complete performance analysis
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  SEO and UX recommendations
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  Actionable improvement tips
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-3">
                <a
                  href="https://wa.me/923075989163?text=Hi%20Ahmad,%20I%20would%20like%20to%20get%20a%20free%20website%20audit."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-primary/20 transition hover:shadow-2xl hover:scale-[1.01] sm:w-auto"
                >
                  Get Free Audit on WhatsApp <FiArrowRight className="h-4 w-4" />
                </a>
                <span className="text-sm text-slate-500 dark:text-slate-400">or</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex w-full items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 sm:w-auto"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
