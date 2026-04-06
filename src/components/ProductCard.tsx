import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useSpring } from 'framer-motion'
import type { Product } from '../types'
import { useCart } from '../context/useCart'

const spring = { stiffness: 260, damping: 22 }

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const ref = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)
  const rx = useSpring(0, spring)
  const ry = useSpring(0, spring)

  function onMove(e: React.PointerEvent) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * 18)
    rx.set(-py * 18)
  }

  function onLeave() {
    rx.set(0)
    ry.set(0)
    setHover(false)
  }

  const img = hover && product.hoverImage ? product.hoverImage : product.image

  return (
    <article className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div
          ref={ref}
          onPointerMove={onMove}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={onLeave}
          className="perspective-1000"
        >
          <motion.div
            style={{
              rotateX: rx,
              rotateY: ry,
              transformPerspective: 900,
            }}
            className="preserve-3d relative aspect-[3/4] overflow-hidden rounded-sm border border-[#2a2a2a] bg-[#141414]"
          >
            <motion.img
              key={img}
              src={img}
              alt={product.name}
              className="h-full w-full object-cover"
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            />
            {product.tag && (
              <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                {product.tag}
              </span>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        </div>
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-semibold text-white hover:underline">
              {product.name}
            </h3>
          </Link>
          <p className="mt-0.5 text-xs uppercase tracking-wider text-[#6a6a6a]">
            {product.category}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-white">
            {product.currency} {product.price}
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8a8a] underline-offset-4 hover:text-white hover:underline"
          >
            Add to bag
          </button>
        </div>
      </div>
    </article>
  )
}
