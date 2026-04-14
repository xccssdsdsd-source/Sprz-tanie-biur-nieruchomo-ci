const items = [
  {
    label: 'Telefon',
    value: '660 373 327',
    href: 'tel:660373327',
    icon: (
      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
    )
  },
  {
    label: 'Telefon 2',
    value: '784 604 220',
    href: 'tel:784604220',
    icon: (
      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
    )
  },
  {
    label: 'E-mail',
    value: 'dlkomfort@gmail.com',
    href: 'mailto:dlkomfort@gmail.com',
    icon: (
      <>
        <rect x='2' y='4' width='20' height='16' rx='2' />
        <path d='m22 7-10 6L2 7' />
      </>
    )
  },
  {
    label: 'Strona',
    value: 'dlkomfort.pl',
    href: 'https://dlkomfort.pl',
    icon: (
      <>
        <circle cx='12' cy='12' r='10' />
        <path d='M2 12h20' />
        <path d='M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20' />
      </>
    )
  }
]

const ContactStrip = () => (
  <section className='relative bg-brand-yellow'>
    <div className='mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14'>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {items.map((i) => (
          <a
            key={i.label + i.value}
            href={i.href}
            className='group flex items-center gap-4 rounded-2xl border border-brand-dark/10 bg-brand-dark/5 p-4 outline-none transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand-dark/10 focus-visible:-translate-y-0.5 focus-visible:bg-brand-dark/10 focus-visible:ring-2 focus-visible:ring-brand-dark'
          >
            <span className='flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-dark text-brand-yellow'>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                {i.icon}
              </svg>
            </span>
            <div className='min-w-0'>
              <div className='text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-dark/60'>{i.label}</div>
              <div className='truncate text-base font-semibold text-brand-dark'>{i.value}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default ContactStrip
