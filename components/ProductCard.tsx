'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cart'
import type { Product } from '@/lib/products'
import { Globe } from './Globe'

interface ProductCardProps {
  product: Product
}

interface FlyingImage {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [flyingImages, setFlyingImages] = useState<FlyingImage[]>([])
  const [mounted, setMounted] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)
  const addItem = useCartStore((state) => state.addItem)
  const openCart = useCartStore((state) => state.openCart)
  const totalItems = useCartStore((state) => state.totalItems)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAddToCart = () => {
    // Get positions for animation
    const imageEl = imageRef.current
    const cartButton = document.querySelector('[aria-label*="Open cart"]') as HTMLElement
    
    if (imageEl && cartButton) {
      const imageRect = imageEl.getBoundingClientRect()
      const cartRect = cartButton.getBoundingClientRect()
      
      const newFlyingImage: FlyingImage = {
        id: Date.now(),
        startX: imageRect.left + imageRect.width / 2,
        startY: imageRect.top + imageRect.height / 2,
        endX: cartRect.left + cartRect.width / 2,
        endY: cartRect.top + cartRect.height / 2,
      }
      
      setFlyingImages(prev => [...prev, newFlyingImage])
      
      // Remove flying image after animation completes
      setTimeout(() => {
        setFlyingImages(prev => prev.filter(img => img.id !== newFlyingImage.id))
      }, 800)
    }
    
    // Check if cart is empty before adding
    const wasEmpty = totalItems() === 0
    
    // Add item to cart
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      size: 'M',
    })
    
    // Open cart only on first item added
    if (wasEmpty) {
      setTimeout(() => {
        openCart()
      }, 700) // Wait for flying animation to finish
    }
  }

  const formatPrice = (price: number) => {
    return price % 1 === 0 ? `$${price}` : `$${price.toFixed(2)}`
  }

  return (
    <article
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative h-[392px] md:h-[578px] overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] to-transparent" />
        
        {/* Product Image */}
        <div ref={imageRef} className="relative h-full flex items-center justify-center p-8">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={500}
            className="object-contain max-h-full w-auto drop-shadow-[0_4px_21px_rgba(0,0,0,0.2)]"
            priority
          />
        </div>

        {/* Globe with Add to Cart - Shows on Hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <button
            onClick={handleAddToCart}
            className="relative w-[180px] h-[180px] flex items-center justify-center cursor-pointer group/btn"
            aria-label={`Add ${product.name} to cart`}
          >
            {/* Dark background behind globe */}
            <div className="absolute inset-0 rounded-full bg-black/80 backdrop-blur-sm" />
            {/* 3D Globe */}
            <div className="absolute inset-0">
              <Globe size={180} />
            </div>
            {/* Text overlay */}
            <span 
              className="relative z-10 font-basement uppercase text-center font-bold whitespace-nowrap"
              style={{
                fontSize: '29.582px',
                lineHeight: '87.917%',
                letterSpacing: '-1px',
                color: '#000',
                WebkitTextStroke: '0.89px #FFF',
              }}
            >
              Add to cart
            </span>
          </button>
        </motion.div>
      </div>

      {/* Divider Line */}
      <div className="h-[3px] bg-gradient-to-r from-white via-white to-white" />

      {/* Product Info */}
      <div className="flex items-center justify-between py-4">
        <h3 className="font-basement text-xl md:text-[21px] leading-[40.5px]">
          {product.name}
        </h3>
        <span className="font-basement text-xl md:text-[21px] leading-[40.5px]">
          {formatPrice(product.price)}
        </span>
      </div>

      {/* Flying images to cart - rendered via portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {flyingImages.map((flyingImg) => (
            <motion.div
              key={flyingImg.id}
              className="fixed pointer-events-none z-[9999]"
              style={{ top: 0, left: 0 }}
              initial={{
                x: flyingImg.startX - 50,
                y: flyingImg.startY - 75,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                x: flyingImg.endX - 25,
                y: flyingImg.endY - 25,
                scale: 0.2,
                opacity: 0.9,
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0, 0.67, 0],
              }}
            >
              <Image
                src={product.image}
                alt=""
                width={100}
                height={150}
                className="object-contain drop-shadow-[0_4px_21px_rgba(255,255,255,0.5)]"
              />
            </motion.div>
          ))}
        </AnimatePresence>,
        document.body
      )}
    </article>
  )
}
