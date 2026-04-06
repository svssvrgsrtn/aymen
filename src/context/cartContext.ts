import { createContext } from 'react'
import type { Product } from '../types'

export interface CartLine {
  product: Product
  quantity: number
}

export interface CartContextValue {
  lines: CartLine[]
  addItem: (product: Product) => void
  removeLine: (productId: string) => void
  clear: () => void
  totalItems: number
  subtotal: number
}

export const CartContext = createContext<CartContextValue | null>(null)
