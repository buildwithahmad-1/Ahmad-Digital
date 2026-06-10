export default function DeveloperIllustration() {
  return (
    <svg viewBox="0 0 520 420" role="img" aria-label="Developer coding illustration" className="w-full drop-shadow-2xl">
      <defs>
        <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      <circle cx="260" cy="210" r="185" fill="url(#brand)" opacity="0.12" />

      <rect x="90" y="70" width="340" height="240" rx="18" fill="url(#screen)" stroke="url(#brand)" strokeWidth="2" />
      <circle cx="118" cy="96" r="6" fill="#EF4444" />
      <circle cx="140" cy="96" r="6" fill="#F59E0B" />
      <circle cx="162" cy="96" r="6" fill="#22C55E" />
      <line x1="90" y1="116" x2="430" y2="116" stroke="#334155" strokeWidth="1.5" />

      <rect x="118" y="138" width="120" height="10" rx="5" fill="#8B5CF6" />
      <rect x="118" y="162" width="190" height="10" rx="5" fill="#3B82F6" />
      <rect x="146" y="186" width="150" height="10" rx="5" fill="#06B6D4" />
      <rect x="146" y="210" width="210" height="10" rx="5" fill="#475569" />
      <rect x="146" y="234" width="110" height="10" rx="5" fill="#06B6D4" />
      <rect x="118" y="258" width="160" height="10" rx="5" fill="#8B5CF6" />
      <rect x="118" y="282" width="80" height="10" rx="5" fill="#3B82F6" />

      <g>
        <rect x="30" y="160" width="96" height="40" rx="20" fill="#0F172A" stroke="#3B82F6" strokeWidth="2" />
        <text x="78" y="186" textAnchor="middle" fontSize="16" fontWeight="700" fill="#61DAFB" fontFamily="Inter, sans-serif">React</text>
      </g>
      <g>
        <rect x="392" y="50" width="96" height="40" rx="20" fill="#0F172A" stroke="#22C55E" strokeWidth="2" />
        <text x="440" y="76" textAnchor="middle" fontSize="16" fontWeight="700" fill="#22C55E" fontFamily="Inter, sans-serif">Node</text>
      </g>
      <g>
        <rect x="400" y="250" width="110" height="40" rx="20" fill="#0F172A" stroke="#06B6D4" strokeWidth="2" />
        <text x="455" y="276" textAnchor="middle" fontSize="16" fontWeight="700" fill="#06B6D4" fontFamily="Inter, sans-serif">Mongo</text>
      </g>

      <rect x="150" y="318" width="220" height="14" rx="7" fill="url(#brand)" />
      <rect x="120" y="336" width="280" height="10" rx="5" fill="#334155" />
    </svg>
  );
}
