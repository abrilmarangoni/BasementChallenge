import { ProductCard } from './ProductCard'
import { products } from '@/lib/products'

export function ProductGrid() {
  return (
    <section
      className="px-4 md:px-8 py-8 md:py-12"
      aria-labelledby="products-title"
    >
      <h2 id="products-title" className="sr-only">
        Products
      </h2>
      <div className="max-w-[1376px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
