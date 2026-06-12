import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function AuditPopup({ isOpen, onClose }) {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 40,
      rotate: -5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-2xl dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />

            {/* Close button */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-200/50 hover:bg-slate-300/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 transition z-20"
              aria-label="Close popup"
            >
              <FiX className="w-5 h-5" />
            </motion.button>

            {/* Content */}
            <div className="relative z-10 text-center space-y-4 sm:space-y-6 pt-4">
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                  <span className="text-2xl sm:text-3xl">🎯</span>
                </div>
              </motion.div>

              {/* Heading */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  Get your free Website Audit today
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 px-2">
                  Get a professional audit of your website and discover optimization opportunities.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 text-left max-h-40 sm:max-h-auto overflow-y-auto sm:overflow-visible">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Complete performance analysis
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                  <span className="text-slate-700 dark:text-slate-300">
                    SEO and UX recommendations
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Actionable improvement tips
                  </span>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://wa.me/923075989163?text=Hi%20Ahmad,%20I%20would%20like%20to%20get%20a%20free%20website%20audit."
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition duration-300 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition" />
                <span>Get Free Audit on WhatsApp</span>
              </motion.a>

              {/* Divider */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
                <span className="text-xs text-slate-500 dark:text-slate-400">or</span>
                <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
              </div>

              {/* Secondary action */}
              <motion.button
                onClick={handleClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 text-slate-900 dark:text-white font-semibold py-2.5 sm:py-2 px-4 sm:px-6 rounded-xl transition text-sm sm:text-base"
              >
                Maybe Later
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
