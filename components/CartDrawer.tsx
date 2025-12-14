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
            <div className="flex justify-end px-4 md:px-8 pt-3 md:pt-10">
              <button
                ref={firstFocusableRef}
                onClick={closeCart}
                className="font-basement text-[14px] md:text-[24px] uppercase tracking-wider hover:opacity-70 transition-opacity"
                style={{ lineHeight: '0.8' }}
                aria-label="Close cart"
              >
                → Close
              </button>
            </div>

            {/* Title - Mobile: text sized to fill container width */}
            <div className="px-4 md:px-8 pt-4 pb-6 md:pb-10">
              <h2
                id="cart-title"
                className="font-basement md:hidden w-full uppercase"
              >
                <div 
                  className="leading-[1.02] text-white w-full"
                  style={{ 
                    fontWeight: 700,
                    fontSize: 'calc((100vw - 32px) * 0.30)',
                  }}
                >
                  YOUR
                </div>
                <div 
                  className="leading-[1.02] w-full"
                  style={{ 
                    fontWeight: 700,
                    color: 'transparent',
                    WebkitTextStroke: '1.5px white',
                    fontSize: 'calc((100vw - 32px) * 0.30)',
                  }}
                >
                  CART
                </div>
              </h2>
              
              {/* Desktop Title */}
              <h2
                className="font-basement hidden md:flex justify-between items-start w-[760px]"
                style={{
                  height: '89.47px',
                  fontSize: '111px',
                  fontWeight: 700,
                  lineHeight: '80.5%',
                  textTransform: 'uppercase',
                  WebkitTextStrokeWidth: '1.5px',
                  WebkitTextStrokeColor: '#FFF',
                }}
              >
                <span style={{ color: '#FFF' }}>YOUR</span>
                <span style={{ color: 'transparent' }}>CART</span>
              </h2>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-4 md:px-8">
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
                      className="border border-white flex flex-row w-full md:w-[760px]"
                    >
                      {/* Item Image */}
                      <div className="w-[104px] h-[122px] md:w-[234px] md:h-[231px] flex-shrink-0 relative">
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
                          <h3 className="font-basement text-[14px] md:text-[35px] uppercase leading-tight">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-[#999] text-[11px] md:text-[21px] mt-0.5 md:mt-1 font-basement leading-tight">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5 md:space-y-3 mt-2 md:mt-4">
                          {/* Quantity */}
                          <div className="flex items-center gap-2 md:gap-4">
                            <span className="font-basement text-[11px] md:text-[21px] uppercase">
                              Quantity:
                            </span>
                            <div className="flex items-center border border-white rounded-full h-[19px] md:h-[35px] px-1 md:px-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.size, item.quantity - 1)
                                }
                                className="w-4 md:w-7 h-full flex items-center justify-center hover:opacity-70 transition-opacity font-basement text-[11px] md:text-[21px]"
                                aria-label={`Decrease quantity of ${item.name}`}
                              >
                                -
                              </button>
                              <span
                                className="w-3 md:w-7 h-full flex items-center justify-center font-basement text-[11px] md:text-[21px]"
                                aria-label={`Quantity: ${item.quantity}`}
                              >
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.size, item.quantity + 1)
                                }
                                className="w-4 md:w-7 h-full flex items-center justify-center hover:opacity-70 transition-opacity font-basement text-[11px] md:text-[21px]"
                                aria-label={`Increase quantity of ${item.name}`}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Size */}
                          <div className="flex items-center gap-2 md:gap-4">
                            <span className="font-basement text-[11px] md:text-[21px] uppercase">
                              Size:
                            </span>
                            <div className="flex items-center gap-2 md:gap-4">
                              {SIZES.map((size) => (
                                <button
                                  key={size}
                                  onClick={() => updateSize(item.id, item.size, size)}
                                  className={`font-basement text-[11px] md:text-[21px] uppercase transition-all ${
                                    item.size === size
                                      ? 'w-[19px] h-[19px] md:w-[35px] md:h-[35px] flex items-center justify-center border border-white rounded-full'
                                      : 'hover:opacity-70'
                                  }`}
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
                        <span className="font-basement text-[14px] md:hidden absolute bottom-2 right-2 text-right">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>

                      {/* Price - Desktop only */}
                      <div className="hidden md:flex flex-col justify-end p-4">
                        <span className="font-basement text-[35px] text-right">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="mt-auto">
                {/* Total row */}
                <div className="px-4 md:px-8 py-3 md:py-0 flex items-center justify-between md:justify-start md:border-t md:border-white md:h-[88px]">
                  <span className="font-basement text-[20px] md:text-[35px] uppercase tracking-[1px]">
                    Total
                  </span>
                  <span className="font-basement text-[20px] md:text-[35px] md:hidden">
                    {formatPrice(totalPrice())}
                  </span>
                  <span className="hidden md:inline font-basement text-[35px] ml-2">
                    : {formatPrice(totalPrice())}
                  </span>
                </div>
                
                {/* Divider line - Mobile only */}
                <div className="mx-4 border-t border-white md:hidden" />
                
                {/* Checkout button */}
                <div className="md:border-t md:border-white md:flex">
                  <div className="hidden md:flex flex-1 px-8 items-center border-r border-white h-[88px]">
                    <span className="font-basement text-[35px] uppercase tracking-[1px]">
                      Total: {formatPrice(totalPrice())}
                    </span>
                  </div>
                  <button
                    className="w-full md:w-auto px-4 md:px-12 py-4 md:py-0 flex items-center justify-center font-basement text-[48px] md:text-[35px] uppercase tracking-[4px] md:tracking-[1px] hover:bg-white hover:text-black transition-colors md:h-[88px]"
                    style={{
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
