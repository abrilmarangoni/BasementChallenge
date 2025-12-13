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
    removeItem,
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
    return price % 1 === 0 ? `$${price}` : `$${price.toFixed(2)}`
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
            className="fixed right-0 top-0 bottom-0 w-full max-w-[824px] bg-black border-l border-white z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
          >
            {/* Close Button */}
            <div className="flex justify-end p-8">
              <button
                ref={firstFocusableRef}
                onClick={closeCart}
                className="font-basement text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                aria-label="Close cart"
              >
                → Close
              </button>
            </div>

            {/* Title */}
            <div className="px-8 pb-8">
              <h2
                id="cart-title"
                className="font-basement text-[72px] leading-none uppercase tracking-tight"
              >
                <span className="text-white">YOUR</span>{' '}
                <span className="text-white [-webkit-text-stroke:1px_white] [text-stroke:1px_white]" style={{ color: 'transparent' }}>
                  CART
                </span>
              </h2>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-8">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="font-basement text-2xl text-white/60 mb-6">
                    Your cart is empty
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-8 py-4 border border-white font-basement uppercase hover:bg-white hover:text-black transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-8">
                  {items.map((item) => (
                    <li
                      key={`${item.id}-${item.size}`}
                      className="border border-white/20 p-4 flex gap-6"
                    >
                      {/* Item Image */}
                      <div className="w-[234px] h-[231px] bg-[#1d1d1d] flex-shrink-0 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 flex flex-col justify-between py-2">
                        <div>
                          <h3 className="font-basement text-[28px] uppercase leading-tight">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-white/60 text-sm mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="space-y-4">
                          {/* Quantity */}
                          <div className="flex items-center gap-4">
                            <span className="text-white/60 uppercase text-sm tracking-wider">
                              Quantity:
                            </span>
                            <div className="flex items-center border border-white/30">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.size, item.quantity - 1)
                                }
                                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors text-lg"
                                aria-label={`Decrease quantity of ${item.name}`}
                              >
                                -
                              </button>
                              <span
                                className="w-10 h-10 flex items-center justify-center border-x border-white/30"
                                aria-label={`Quantity: ${item.quantity}`}
                              >
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.size, item.quantity + 1)
                                }
                                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors text-lg"
                                aria-label={`Increase quantity of ${item.name}`}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Size */}
                          <div className="flex items-center gap-4">
                            <span className="text-white/60 uppercase text-sm tracking-wider">
                              Size:
                            </span>
                            <div className="flex items-center gap-2">
                              {SIZES.map((size) => (
                                <button
                                  key={size}
                                  onClick={() => updateSize(item.id, item.size, size)}
                                  className={`w-10 h-10 flex items-center justify-center border text-sm uppercase transition-colors ${
                                    item.size === size
                                      ? 'bg-white text-black border-white'
                                      : 'border-white/30 hover:border-white'
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
                      </div>

                      {/* Price */}
                      <div className="flex flex-col justify-end">
                        <span className="font-basement text-[28px]">
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
              <div className="border-t border-white flex">
                <div className="flex-1 px-8 py-6 border-r border-white flex items-center">
                  <span className="font-basement text-[28px] uppercase">
                    Total: {formatPrice(totalPrice())}
                  </span>
                </div>
                <button
                  className="px-12 py-6 font-basement text-[28px] uppercase hover:bg-white hover:text-black transition-colors"
                  aria-label="Proceed to checkout"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
