import { motion } from 'framer-motion';

export default function AnnouncementBar() {
  const messages = [
    "Need a Website? Let's Talk",
    'Available for New Projects',
    'Start Your Online Journey Today',
    'Get Your Business Online',
    'Contact Me for a Free Consultation',
  ];
  const ticker = Array.from({ length: 4 }, () => messages.join(' • ')).join('                    ');

  return (
    <div className="w-full border-b border-slate-200 bg-slate-950/95 shadow-[0_12px_40px_rgba(15,23,42,0.18)] backdrop-blur-md">
      <div className="flex h-[42px] items-center overflow-hidden px-6 text-sm uppercase tracking-[0.18em] text-slate-100 sm:px-8">
        <motion.div
          className="flex min-w-full items-center gap-[300px] whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          <span className="flex-shrink-0 text-[12px] font-semibold">{ticker}</span>
          <span className="flex-shrink-0 text-[12px] font-semibold">{ticker}</span>
        </motion.div>
      </div>
    </div>
  );
}
