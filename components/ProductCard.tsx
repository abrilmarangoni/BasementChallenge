'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cart'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const openCart = useCartStore((state) => state.openCart)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      size: 'M',
    })
    openCart()
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
        <div className="relative h-full flex items-center justify-center p-8">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={500}
            className="object-contain max-h-full w-auto drop-shadow-[0_4px_21px_rgba(0,0,0,0.2)]"
            priority
          />
        </div>

        {/* Add to Cart Button - Shows on Hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <button
            onClick={handleAddToCart}
            className="relative w-[180px] h-[180px] rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black group/btn"
            aria-label={`Add ${product.name} to cart`}
          >
            {/* Rotating border effect */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow"
              viewBox="0 0 180 180"
              style={{ animationDuration: '20s' }}
            >
              <circle
                cx="90"
                cy="90"
                r="85"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="10 5"
                className="opacity-50"
              />
            </svg>
            <span className="font-basement text-xl uppercase leading-tight text-center tracking-tight">
              Add to
              <br />
              cart
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
    </article>
  )
}
