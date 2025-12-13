'use client'

import { Logo } from './icons/Logo'
import { useCartStore } from '@/store/cart'

export function Header() {
  const { toggleCart, totalItems } = useCartStore()
  const itemCount = totalItems()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <nav
        className="flex items-center justify-between max-w-[1376px] mx-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="/" aria-label="Basement - Home">
          <Logo className="w-48 h-7 text-white" />
        </a>

        <div className="hidden md:flex items-center gap-2">
          <span className="px-3 py-1 border border-white/30 rounded-full text-xs font-basement uppercase">
            HD
          </span>
          <span className="px-3 py-1 border border-white/30 rounded-full text-xs">
            <svg className="w-5 h-4" viewBox="0 0 20 16" fill="currentColor">
              <ellipse cx="10" cy="8" rx="9" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="10" cy="8" r="3" fill="currentColor" />
            </svg>
          </span>
          <span className="px-3 py-1 border border-white/30 rounded-full text-xs font-basement uppercase">
            4K
          </span>
          <span className="px-3 py-1 border border-white/30 rounded-full text-xs">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" />
            </svg>
          </span>
        </div>

        <button
          onClick={toggleCart}
          className="px-6 py-3 border-[1.5px] border-white rounded-full font-basement text-lg uppercase tracking-tight hover:bg-white hover:text-black transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={`Open cart with ${itemCount} items`}
        >
          Cart ({itemCount})
        </button>
      </nav>
    </header>
  )
}

