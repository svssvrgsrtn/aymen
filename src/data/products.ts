import type { Product } from '../types'

/** Editorial imagery — Unsplash (free to use under their license). */
export const products: Product[] = [
  {
    id: 'wm-1',
    name: 'Oversized wool coat',
    price: 189,
    currency: 'USD',
    gender: 'women',
    category: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=85',
    hoverImage:
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=85',
    tag: 'New',
  },
  {
    id: 'wm-2',
    name: 'Ribbed knit set',
    price: 79,
    currency: 'USD',
    gender: 'women',
    category: 'Knitwear',
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=85',
    hoverImage:
      'https://images.unsplash.com/photo-1581044777550-765395fe77e7?w=800&q=85',
  },
  {
    id: 'wm-3',
    name: 'Wide-leg denim',
    price: 98,
    currency: 'USD',
    gender: 'women',
    category: 'Denim',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21df324?w=800&q=85',
    tag: 'Trending',
  },
  {
    id: 'wm-4',
    name: 'Leather shoulder bag',
    price: 129,
    currency: 'USD',
    gender: 'women',
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=85',
  },
  {
    id: 'wm-5',
    name: 'Technical windbreaker',
    price: 112,
    currency: 'USD',
    gender: 'women',
    category: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1550614000-4b9519e02d48?w=800&q=85',
  },
  {
    id: 'wm-6',
    name: 'Minimal sneakers',
    price: 95,
    currency: 'USD',
    gender: 'women',
    category: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=85',
  },
  {
    id: 'mn-1',
    name: 'Structured blazer',
    price: 165,
    currency: 'USD',
    gender: 'men',
    category: 'Tailoring',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=85',
    hoverImage:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=85',
    tag: 'New',
  },
  {
    id: 'mn-2',
    name: 'Heavyweight hoodie',
    price: 72,
    currency: 'USD',
    gender: 'men',
    category: 'Street',
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=85',
  },
  {
    id: 'mn-3',
    name: 'Cargo trousers',
    price: 88,
    currency: 'USD',
    gender: 'men',
    category: 'Bottoms',
    image:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=85',
  },
  {
    id: 'mn-4',
    name: 'Monochrome trainers',
    price: 110,
    currency: 'USD',
    gender: 'men',
    category: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=85',
  },
  {
    id: 'mn-5',
    name: 'Overshirt — twill',
    price: 84,
    currency: 'USD',
    gender: 'men',
    category: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=85',
  },
  {
    id: 'mn-6',
    name: 'Puffer jacket',
    price: 198,
    currency: 'USD',
    gender: 'men',
    category: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=85',
    tag: 'Limited',
  },
  {
    id: 'un-1',
    name: 'Logo cap',
    price: 38,
    currency: 'USD',
    gender: 'unisex',
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=85',
  },
  {
    id: 'un-2',
    name: 'Organic cotton tee',
    price: 42,
    currency: 'USD',
    gender: 'unisex',
    category: 'Basics',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=85',
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function filterByGender(gender: 'women' | 'men'): Product[] {
  return products.filter(
    (p) => p.gender === gender || p.gender === 'unisex',
  )
}
