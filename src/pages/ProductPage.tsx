import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById } from '../data/products'
import { useCart } from '../context/useCart'

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCart()
  const product = useMemo(() => (id ? getProductById(id) : undefined), [id])

  if (!product) {
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-24 text-center sm:px-6 lg:px-10">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-white">
          Not found
        </h1>
        <Link
          to="/"
          className="mt-6 inline-block text-sm uppercase tracking-widest text-[#8a8a8a] hover:text-white"
        >
          Back home
        </Link>
      </div>
    )
  }

  const back =
    product.gender === 'men'
      ? '/men'
      : product.gender === 'women'
        ? '/women'
        : '/'

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
      <Link
        to={back}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8a8a] hover:text-white"
      >
        ←{' '}
        {product.gender === 'men'
          ? 'Men'
          : product.gender === 'women'
            ? 'Women'
            : 'Home'}
      </Link>
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="perspective-1000"
        >
          <motion.div
            whileHover={{
              rotateY: -6,
              rotateX: 4,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{ transformPerspective: 1000 }}
            className="preserve-3d overflow-hidden rounded-sm border border-[#2a2a2a] bg-[#141414]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>
        </motion.div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6a6a6a]">
            {product.category}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide text-white lg:text-6xl">
            {product.name}
          </h1>
          <p className="mt-6 text-2xl font-semibold text-white">
            {product.currency} {product.price}
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#9a9a9a]">
            Premium construction for daily wear. Model is 178 cm and wears size
            M for reference. This demo product uses editorial photography;
            inventory is simulated in the browser only.
          </p>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="mt-10 w-full bg-white py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#e8e8e8] sm:w-auto sm:px-16"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  )
}
