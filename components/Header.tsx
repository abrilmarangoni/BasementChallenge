'use client'

import { useState, useEffect } from 'react'
import { Logo } from './icons/Logo'
import { useCartStore } from '@/store/cart'

export function Header() {
  const { toggleCart, totalItems } = useCartStore()
  const itemCount = totalItems()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-6'
      }`}
      style={{ 
        top: isScrolled ? '0' : 'clamp(20px, calc(100vw * 33 / 1440), 50px)', 
        paddingLeft: 'clamp(16px, calc(100vw * 32 / 1440), 48px)', 
        paddingRight: 'clamp(16px, calc(100vw * 32 / 1440), 48px)' 
      }}
    >
      <nav
        className="flex items-center justify-between max-w-[1376px] mx-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="/" aria-label="Basement - Home">
          {/* Mobile: show b. logo SVG */}
          <svg 
            className="md:hidden"
            width="43"
            height="40"
            viewBox="0 0 43 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.04698 21.3793C9.28382 18.7192 10.989 17.4384 14.2099 17.4384C18.5676 17.4384 19.3729 18.4236 19.3729 22.8079V26.5517C19.3729 30.8867 18.5676 31.8719 14.2099 31.8719C11.0364 31.8719 9.33118 30.8867 9.04698 28.9655V21.3793ZM0 0V39.4089H8.76279V32.3153C9.71011 37.4384 12.7889 40 18.0466 40C26.8568 40 28.8461 37.7833 28.8461 26.7488V22.5123C28.8461 11.4778 26.9041 9.26108 18.5203 9.26108C12.8363 9.26108 10.089 10.5911 8.99962 15.1724V0H0Z" fill="#FAFAFA"/>
            <path d="M42.9382 31.0345H34.8859V39.4089H42.9382V31.0345Z" fill="#FAFAFA"/>
          </svg>
          {/* Desktop: show full logo */}
          <Logo className="hidden md:block w-48 h-7 text-white" />
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

