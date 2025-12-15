'use client'

import { useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore, Size } from '@/store/cart'

const SIZES: Size[] = ['S', 'M', 'L', 'XL']

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    updateSize,
    removeItem,
    totalPrice,
  } = useCartStore()
  const firstFocusableRef = useRef<HTMLButtonElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCart()
      }
    },
    [closeCart]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      firstFocusableRef.current?.focus()
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  const formatPrice = (price: number) => {
    const formatted = price.toFixed(2).replace('.', ',')
    return `$${formatted}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bg-black border-l border-white z-50 flex flex-col w-full md:w-[60vw] h-screen md:h-[80vh] md:border-b"
            style={{ 
              maxWidth: '824px',
              top: 0,
              right: 0,
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
          >
            {/* Close Button */}
            <div 
              className="flex justify-end md:pb-20"
              style={{ 
                paddingLeft: 'clamp(16px, calc(100vw * 32 / 1440), 32px)',
                paddingRight: 'clamp(16px, calc(100vw * 32 / 1440), 32px)',
                paddingTop: '30px',
                paddingBottom: '0px',
              }}
            >
              <button
                ref={firstFocusableRef}
                onClick={closeCart}
                className="font-basement uppercase tracking-wider hover:opacity-70 transition-opacity md:text-[24px]"
                style={{ 
                  fontSize: 'clamp(18px, calc(100vw * 24 / 1440), 24px)',
                  lineHeight: '0.8',
                }}
                aria-label="Close cart"
              >
                → Close
              </button>
            </div>

            {/* Shared Container for Title and Content */}
            <div className="flex-1 overflow-y-auto flex flex-col">
              {/* Title - same container as product cards */}
              <div className="px-4 md:px-8 pb-6 md:pb-10 w-full" style={{ paddingTop: '30px' }}>
                {/* Mobile Title - Exact Figma specs: 344x214, 104px, line-height 102% */}
                <h2
                  id="cart-title"
                  className="md:hidden w-full"
                  style={{ marginBottom: '16px' }}
                >
                  {/* YOUR CART - SVG that scales to fill container width */}
                  <svg 
                    className="w-full h-auto"
                    viewBox="0 0 344 214"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* YOUR - solid fill */}
                    <text
                      x="172"
                      y="95"
                      textAnchor="middle"
                      className="font-basement"
                      style={{
                        fontSize: '104px',
                        fontWeight: 700,
                        fill: 'white',
                        fontFamily: 'var(--font-basement), "Basement Grotesque", sans-serif',
                        textTransform: 'uppercase',
                      }}
                    >
                      YOUR
                    </text>
                    {/* CART - outline stroke */}
                    <text
                      x="172"
                      y="201"
                      textAnchor="middle"
                      className="font-basement"
                      style={{
                        fontSize: '104px',
                        fontWeight: 700,
                        fill: 'none',
                        stroke: 'white',
                        strokeWidth: '1.5px',
                        fontFamily: 'var(--font-basement), "Basement Grotesque", sans-serif',
                        textTransform: 'uppercase',
                      }}
                    >
                      CART
                    </text>
                  </svg>
                </h2>
                
                {/* Desktop Title - Responsive SVG that scales with container */}
                <h2
                  className="hidden md:block w-full"
                  style={{ overflow: 'visible' }}
                >
                  <svg 
                    className="w-full h-auto"
                    viewBox="0 0 760 89"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: 'visible' }}
                  >
                    {/* YOUR - solid fill, aligned left */}
                    <text
                      x="0"
                      y="75"
                      textAnchor="start"
                      dominantBaseline="auto"
                      className="font-basement"
                      style={{
                        fontSize: '111px',
                        fontWeight: 700,
                        fill: 'white',
                        fontFamily: 'var(--font-basement), "Basement Grotesque", sans-serif',
                        textTransform: 'uppercase',
                      }}
                    >
                      YOUR
                    </text>
                    {/* CART - outline stroke, aligned right */}
                    <text
                      x="760"
                      y="75"
                      textAnchor="end"
                      dominantBaseline="auto"
                      className="font-basement"
                      style={{
                        fontSize: '111px',
                        fontWeight: 700,
                        fill: 'none',
                        stroke: 'white',
                        strokeWidth: '1.5px',
                        fontFamily: 'var(--font-basement), "Basement Grotesque", sans-serif',
                        textTransform: 'uppercase',
                      }}
                    >
                      CART
                    </text>
                  </svg>
                </h2>
              </div>

              {/* Cart Items - same container padding */}
              <div className="px-4 md:px-8">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="font-basement text-xl md:text-2xl text-white/60 mb-6">
                    Your cart is empty
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 md:px-8 py-3 md:py-4 border border-white font-basement uppercase hover:bg-white hover:text-black transition-colors text-sm md:text-base"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-4 md:space-y-6">
                  {items.map((item) => (
                    <li
                      key={`${item.id}-${item.size}`}
                      className="border border-white flex flex-row w-full relative"
                    >
                      {/* Delete Button - Trash Icon */}
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="absolute top-2 right-2 md:top-4 md:right-4 z-20 p-2 hover:opacity-70 transition-opacity"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 md:w-5 md:h-5"
                        >
                          <path
                            d="M2.5 5H4.16667H17.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46738 7.15482 2.15482C7.46738 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5H15.8333Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.33333 9.16667V14.1667"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.6667 9.16667V14.1667"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* Item Image */}
                      <div 
                        className="flex-shrink-0 relative"
                        style={{
                          width: 'clamp(104px, calc(100vw * 234 / 1440), 234px)',
                          height: 'clamp(122px, calc(100vw * 231 / 1440), 231px)',
                        }}
                      >
                        {/* Gradient overlay */}
                        <div 
                          className="absolute inset-0 z-10"
                          style={{
                            background: 'linear-gradient(to top, rgba(21,21,21,0) 0%, #1d1d1d 100%)',
                            transform: 'rotate(180deg)',
                          }}
                        />
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={226}
                          height={218}
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-0 w-[98px] h-[98px] md:w-auto md:h-auto"
                          style={{ filter: 'drop-shadow(0px 1.8px 9.45px rgba(0,0,0,0.2))' }}
                        />
                      </div>

                      {/* Item Details + Price */}
                      <div className="flex-1 flex flex-col justify-between p-2 md:p-4 md:pl-6 relative">
                        <div>
                          <h3 
                            className="font-basement uppercase leading-tight"
                            style={{ fontSize: 'clamp(14px, calc(100vw * 35 / 1440), 35px)' }}
                          >
                            {item.name}
                          </h3>
                          {item.description && (
                            <p 
                              className="text-[#999] mt-0.5 md:mt-1 font-basement leading-tight"
                              style={{ fontSize: 'clamp(11px, calc(100vw * 21 / 1440), 21px)' }}
                            >
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5 md:space-y-3 mt-2 md:mt-4">
                          {/* Quantity */}
                          <div className="flex items-center gap-2 md:gap-4">
                            <span 
                              className="font-basement uppercase"
                              style={{ fontSize: 'clamp(11px, calc(100vw * 21 / 1440), 21px)' }}
                            >
                              Quantity:
                            </span>
                            <div 
                              className="flex items-center border border-white rounded-full px-1 md:px-2"
                              style={{ height: 'clamp(19px, calc(100vw * 35 / 1440), 35px)' }}
                            >
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.size, item.quantity - 1)
                                }
                                className="h-full flex items-center justify-center hover:opacity-70 transition-opacity font-basement"
                                style={{ 
                                  width: 'clamp(16px, calc(100vw * 28 / 1440), 28px)',
                                  fontSize: 'clamp(11px, calc(100vw * 21 / 1440), 21px)',
                                }}
                                aria-label={`Decrease quantity of ${item.name}`}
                              >
                                -
                              </button>
                              <span
                                className="h-full flex items-center justify-center font-basement"
                                style={{ 
                                  width: 'clamp(12px, calc(100vw * 28 / 1440), 28px)',
                                  fontSize: 'clamp(11px, calc(100vw * 21 / 1440), 21px)',
                                }}
                                aria-label={`Quantity: ${item.quantity}`}
                              >
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.size, item.quantity + 1)
                                }
                                className="h-full flex items-center justify-center hover:opacity-70 transition-opacity font-basement"
                                style={{ 
                                  width: 'clamp(16px, calc(100vw * 28 / 1440), 28px)',
                                  fontSize: 'clamp(11px, calc(100vw * 21 / 1440), 21px)',
                                }}
                                aria-label={`Increase quantity of ${item.name}`}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Size */}
                          <div className="flex items-center gap-2 md:gap-4">
                            <span 
                              className="font-basement uppercase"
                              style={{ fontSize: 'clamp(11px, calc(100vw * 21 / 1440), 21px)' }}
                            >
                              Size:
                            </span>
                            <div className="flex items-center gap-2 md:gap-4">
                              {SIZES.map((size) => (
                                <button
                                  key={size}
                                  onClick={() => updateSize(item.id, item.size, size)}
                                  className={`font-basement uppercase transition-all ${
                                    item.size === size
                                      ? 'flex items-center justify-center border border-white rounded-full'
                                      : 'hover:opacity-70'
                                  }`}
                                  style={{ 
                                    fontSize: 'clamp(11px, calc(100vw * 21 / 1440), 21px)',
                                    ...(item.size === size ? {
                                      width: 'clamp(19px, calc(100vw * 35 / 1440), 35px)',
                                      height: 'clamp(19px, calc(100vw * 35 / 1440), 35px)',
                                    } : {}),
                                  }}
                                  aria-label={`Select size ${size}`}
                                  aria-pressed={item.size === size}
                                >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Price - Mobile: bottom right absolute, Desktop: separate column */}
                        <span 
                          className="font-basement md:hidden absolute bottom-2 right-2 text-right"
                          style={{ fontSize: 'clamp(14px, calc(100vw * 35 / 1440), 35px)' }}
                        >
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>

                      {/* Price - Desktop only */}
                      <div 
                        className="hidden md:flex flex-col justify-end items-end flex-shrink-0"
                        style={{ padding: 'clamp(8px, calc(100vw * 16 / 1440), 16px)' }}
                      >
                        <span 
                          className="font-basement text-right whitespace-nowrap"
                          style={{ fontSize: 'clamp(14px, calc(100vw * 35 / 1440), 35px)' }}
                        >
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              </div>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="mt-auto">
                {/* Mobile Total row */}
                <div 
                  className="px-4 py-3 flex items-center justify-between md:hidden"
                >
                  <span 
                    className="font-basement uppercase tracking-[1px]"
                    style={{ fontSize: 'clamp(20px, calc(100vw * 35 / 1440), 35px)' }}
                  >
                    Total
                  </span>
                  <span 
                    className="font-basement"
                    style={{ fontSize: 'clamp(20px, calc(100vw * 35 / 1440), 35px)' }}
                  >
                    {formatPrice(totalPrice())}
                  </span>
                </div>
                
                {/* Divider line - Mobile only */}
                <div className="mx-4 border-t border-white md:hidden" />
                
                {/* Checkout button */}
                <div className="md:border-t md:border-white md:flex">
                  <div 
                    className="hidden md:flex flex-1 px-4 md:px-8 items-center border-r border-white"
                    style={{ height: 'clamp(50px, calc(100vw * 88 / 1440), 88px)' }}
                  >
                    <div className="w-full">
                      <span 
                        className="font-basement uppercase tracking-[1px] whitespace-nowrap"
                        style={{ fontSize: 'clamp(16px, calc(100vw * 35 / 1440), 35px)' }}
                      >
                        Total: {formatPrice(totalPrice())}
                      </span>
                    </div>
                  </div>
                  <div className="w-full py-4 md:hidden">
                    <button
                      className="w-full flex items-center justify-center hover:opacity-70 transition-opacity"
                      aria-label="Proceed to checkout"
                    >
                      {/* CHECKOUT - SVG that scales to fill container width like YOUR CART */}
                      <svg 
                        className="w-full h-auto"
                        viewBox="0 0 344 50"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ overflow: 'visible' }}
                      >
                        <text
                          x="172"
                          y="40"
                          textAnchor="middle"
                          className="font-basement"
                          style={{
                            fontSize: '50px',
                            fontWeight: 700,
                            fill: 'none',
                            stroke: 'white',
                            strokeWidth: '1.5px',
                            fontFamily: 'var(--font-basement), "Basement Grotesque", sans-serif',
                            textTransform: 'uppercase',
                          }}
                        >
                          CHECKOUT
                        </text>
                      </svg>
                    </button>
                  </div>
                  <button
                    className="hidden md:flex w-auto px-12 py-0 items-center justify-center font-basement uppercase tracking-[1px] hover:bg-white hover:text-black transition-colors"
                    style={{
                      height: 'clamp(60px, calc(100vw * 88 / 1440), 88px)',
                      fontSize: 'clamp(24px, calc(100vw * 35 / 1440), 35px)',
                      color: 'transparent',
                      WebkitTextStroke: '1px white',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'black'
                      ;(e.currentTarget.style as unknown as Record<string, string>).webkitTextStroke = '0'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'transparent'
                      ;(e.currentTarget.style as unknown as Record<string, string>).webkitTextStroke = '1px white'
                    }}
                    aria-label="Proceed to checkout"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
