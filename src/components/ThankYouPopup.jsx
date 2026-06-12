import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiX } from 'react-icons/fi';

export default function ThankYouPopup({ isOpen, onClose }) {
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

  const checkmarkVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200,
        delay: 0.2,
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
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

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
              {/* Animated Checkmark */}
              <motion.div
                variants={checkmarkVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto"
                >
                  <FiCheckCircle className="w-9 h-9 sm:w-12 sm:h-12 text-white" />
                </motion.div>
              </motion.div>

              {/* Main Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2 sm:space-y-3"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                  Thank You!
                </h2>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-semibold">
                  Message Sent Successfully
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 px-2">
                  I've received your message and will get back to you as soon as possible. Thanks for reaching out!
                </p>
              </motion.div>

              {/* Confirmation Details */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-emerald-500/10 dark:bg-emerald-500/5 rounded-xl p-3 sm:p-4 border border-emerald-500/20 dark:border-emerald-500/10 text-left"
              >
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                  <div>✓ Your message has been recorded</div>
                  <div>✓ I'll contact you within 1 hour</div>
                  <div>✓ Check your email for updates</div>
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={handleClose}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition duration-300 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl text-sm sm:text-base"
              >
                Awesome! Let's Go
              </motion.button>

              {/* Footer message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xs text-slate-500 dark:text-slate-400 px-2"
              >
                Quick Tip: Follow me on social media for updates and web development tips!
              </motion.p>
            </div>

            {/* Confetti animation */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -200],
                  x: Math.cos(i * Math.PI / 3) * 100,
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 0.3 + i * 0.1,
                }}
                className="absolute w-2 h-2 rounded-full pointer-events-none"
                style={{
                  left: '50%',
                  top: '50%',
                  background: i % 2 === 0 ? '#676DF6' : '#9333EA',
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
