import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { ProductGrid } from '../components/ProductGrid'
import { filterByGender } from '../data/products'

export function Catalog() {
  const { pathname } = useLocation()
  const g = pathname.includes('/men') ? 'men' : 'women'

  const list = useMemo(() => filterByGender(g), [g])

  const title = g === 'women' ? 'Women' : 'Men'
  const subtitle =
    g === 'women'
      ? 'Coats, knits, denim, and accessories — editorial styling, street energy.'
      : 'Tailoring meets street — layers, cargos, and trainers built for the city.'

  return (
    <ProductGrid products={list} title={title} subtitle={subtitle} />
  )
}
