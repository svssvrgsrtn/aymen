import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/useCart'

export function CartPage() {
  const { lines, removeLine, subtotal, clear } = useCart()

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10">
        <h1 className="font-[family-name:var(--font-display)] text-5xl text-white">
          Your bag
        </h1>
        <p className="mt-4 text-[#8a8a8a]">Nothing here yet.</p>
        <Link
          to="/women"
          className="mt-10 inline-block border border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
        >
          Start shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <h1 className="font-[family-name:var(--font-display)] text-5xl text-white">
          Your bag
        </h1>
        <button
          type="button"
          onClick={clear}
          className="self-start text-xs font-semibold uppercase tracking-[0.2em] text-[#6a6a6a] hover:text-white"
        >
          Clear all
        </button>
      </div>
      <ul className="mt-12 space-y-8 border-t border-[#2a2a2a] pt-10">
        {lines.map(({ product, quantity }) => (
          <motion.li
            key={product.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-6 border-b border-[#2a2a2a] pb-8"
          >
            <Link
              to={`/product/${product.id}`}
              className="shrink-0 overflow-hidden rounded-sm border border-[#2a2a2a]"
            >
              <img
                src={product.image}
                alt=""
                className="h-28 w-20 object-cover sm:h-36 sm:w-28"
              />
            </Link>
            <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
              <div>
                <Link
                  to={`/product/${product.id}`}
                  className="text-base font-semibold text-white hover:underline"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-xs text-[#6a6a6a]">
                  Qty {quantity} · {product.currency}{' '}
                  {product.price * quantity}
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeLine(product.id)}
                className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#8a8a8a] hover:text-white sm:mt-0"
              >
                Remove
              </button>
            </div>
          </motion.li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-lg font-semibold text-white">
          Subtotal · USD {subtotal}
        </p>
        <button
          type="button"
          className="bg-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-[#e8e8e8]"
        >
          Checkout (demo)
        </button>
      </div>
    </div>
  )
}
