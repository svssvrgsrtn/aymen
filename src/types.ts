export type Gender = 'women' | 'men' | 'unisex'

export interface Product {
  id: string
  name: string
  price: number
  currency: string
  gender: Gender
  category: string
  image: string
  hoverImage?: string
  tag?: string
}
