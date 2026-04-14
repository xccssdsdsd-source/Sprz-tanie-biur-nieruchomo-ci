const Logo = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg viewBox='0 0 48 48' className='h-9 w-9' aria-hidden='true'>
      <defs>
        <radialGradient id='sun' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' stopColor='#FFE355' />
          <stop offset='100%' stopColor='#FFD700' />
        </radialGradient>
      </defs>
      <g transform='translate(24 24)'>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x='-1.4'
            y='-22'
            width='2.8'
            height='8'
            rx='1.4'
            fill='#FFD700'
            transform={`rotate(${i * 30})`}
          />
        ))}
        <circle r='10' fill='url(#sun)' />
        <circle r='10' fill='none' stroke='#111111' strokeWidth='1.2' />
      </g>
    </svg>
    <span className='flex flex-col leading-none'>
      <span className='text-[11px] font-semibold tracking-[0.22em] text-brand-dark/60'>DL</span>
      <span className='text-lg font-bold tracking-tightest text-brand-dark'>KOMFORT</span>
    </span>
  </div>
)

export default Logo
