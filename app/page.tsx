import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { ProductGrid } from '@/components/ProductGrid'
import { Footer } from '@/components/Footer'
import { CartDrawer } from '@/components/CartDrawer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Marquee />
        <ProductGrid />
        <Footer />
      </main>
      <CartDrawer />
    </>
  )
}
