'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

type Props = {
  before: string
  after: string
  label: string
  priority?: boolean
}

const BeforeAfter = ({ before, after, label, priority = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)

  const update = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(2, Math.min(98, x)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    ;(e.currentTarget as Element).setPointerCapture?.(e.pointerId)
    update(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1 && e.pointerType === 'mouse') return
    update(e.clientX)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(2, p - 3))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(98, p + 3))
  }

  return (
    <figure className='group relative overflow-hidden rounded-3xl border border-black/5 bg-brand-dark shadow-soft-lg'>
      <div
        ref={ref}
        className='ba-slider relative aspect-[4/5] sm:aspect-[4/3]'
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        role='slider'
        tabIndex={0}
        aria-label={`Przeciągnij, aby porównać zdjęcia przed i po — ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
      >
        <Image
          src={after}
          alt={`Po sprzątaniu — ${label}`}
          fill
          sizes='(min-width: 1024px) 50vw, 100vw'
          priority={priority}
          className='object-cover'
        />

        <div
          className='absolute inset-0'
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`Przed sprzątaniem — ${label}`}
            fill
            sizes='(min-width: 1024px) 50vw, 100vw'
            className='object-cover'
          />
        </div>

        <span className='pointer-events-none absolute left-4 top-4 rounded-full bg-brand-dark/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur'>
          Przed
        </span>
        <span className='pointer-events-none absolute right-4 top-4 rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-dark'>
          Po
        </span>

        <div className='ba-handle' style={{ left: `calc(${pos}% - 1px)` }} />
      </div>

      <figcaption className='flex items-center justify-between gap-4 bg-white px-6 py-4'>
        <span className='text-sm font-semibold tracking-tightest text-brand-dark'>{label}</span>
        <span className='text-[11px] font-medium uppercase tracking-[0.18em] text-brand-dark/50'>
          Przeciągnij suwak
        </span>
      </figcaption>
    </figure>
  )
}

export default BeforeAfter
