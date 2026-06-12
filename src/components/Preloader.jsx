import { motion } from 'framer-motion';
import { HiSparkles, HiRocketLaunch } from 'react-icons/hi2';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-24 right-16 h-56 w-56 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute top-1/3 right-20 h-32 w-32 rounded-full border border-white/10 bg-white/5 blur-2xl" />
      </div>

      <div className="relative flex flex-col items-center gap-8 px-6 py-10 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="relative h-40 w-40"
          style={{ perspective: 900 }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-[0_0_40px_rgba(99,102,241,0.45)]"
            animate={{ rotateY: [0, 360], rotateX: [15, -15, 15] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div
            className="absolute inset-0 rounded-3xl border border-white/10"
            animate={{ rotateX: [0, 360], rotateY: [0, -360] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-3xl bg-white/10"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <HiRocketLaunch className="h-12 w-12 text-white/90 drop-shadow-lg" />
          </div>
        </motion.div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.35em] text-primary">
            <HiSparkles className="h-4 w-4" />
            <span>Ahmad</span>
            <HiSparkles className="h-4 w-4" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            <span className="gradient-text">Digital</span>
          </h1>
          <p className="text-sm text-slate-400">Loading your modern portfolio...</p>
        </div>

        <motion.div className="relative h-2.5 w-40 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="absolute inset-y-0 left-0 w-16 rounded-full bg-gradient-to-r from-primary to-secondary"
            animate={{ x: [0, 120, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  );
}
