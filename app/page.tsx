import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { ProductGrid } from '@/components/ProductGrid'
import { Footer } from '@/components/Footer'
import { CartDrawer } from '@/components/CartDrawer'
import { FloatingShapes } from '@/components/FloatingShapes'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative overflow-hidden">
        <Hero />
        <div className="relative">
          <FloatingShapes />
          <Marquee />
        </div>
        <ProductGrid />
        <Footer />
      </main>
      <CartDrawer />
    </>
  )
}
