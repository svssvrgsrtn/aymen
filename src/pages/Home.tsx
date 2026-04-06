import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeroScene } from '../components/HeroScene'
import { ProductGrid } from '../components/ProductGrid'
import { products } from '../data/products'

const featured = products.slice(0, 8)

export function Home() {
  return (
    <>
      <HeroScene />

      <section
        id="collections"
        className="border-b border-[#2a2a2a] bg-[#080808] py-20"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-white sm:text-5xl">
            Collections
          </h2>
          <p className="mt-2 max-w-lg text-sm text-[#8a8a8a]">
            Full-bleed tiles with depth — pick a lane and dive in.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-[#2a2a2a]"
            >
              <Link to="/women" className="absolute inset-0 z-10">
                <span className="sr-only">Shop women</span>
              </Link>
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85"
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="font-[family-name:var(--font-display)] text-5xl text-white md:text-6xl">
                  Women
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#c0c0c0]">
                  View category
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-[#2a2a2a]"
            >
              <Link to="/men" className="absolute inset-0 z-10">
                <span className="sr-only">Shop men</span>
              </Link>
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=85"
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="font-[family-name:var(--font-display)] text-5xl text-white md:text-6xl">
                  Men
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#c0c0c0]">
                  View category
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProductGrid
        products={featured}
        title="Spotlight"
        subtitle="Pieces rotating in-store right now — hover cards for a 3D tilt and alternate photo."
      />
    </>
  )
}
