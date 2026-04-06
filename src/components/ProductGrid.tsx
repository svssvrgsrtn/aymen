import type { Product } from '../types'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
  title: string
  subtitle?: string
}

export function ProductGrid({ products, title, subtitle }: ProductGridProps) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-white sm:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-xl text-sm text-[#8a8a8a]">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
