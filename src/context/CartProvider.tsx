import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '../types'
import { CartContext, type CartContextValue, type CartLine } from './cartContext'

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])

  const addItem = useCallback((product: Product) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.product.id === product.id)
      if (i >= 0) {
        const next = [...prev]
        next[i] = { ...next[i], quantity: next[i].quantity + 1 }
        return next
      }
      return [...prev, { product, quantity: 1 }]
    })
  }, [])

  const removeLine = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== productId))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const value = useMemo<CartContextValue>(() => {
    const totalItems = lines.reduce((s, l) => s + l.quantity, 0)
    const subtotal = lines.reduce(
      (s, l) => s + l.product.price * l.quantity,
      0,
    )
    return {
      lines,
      addItem,
      removeLine,
      clear,
      totalItems,
      subtotal,
    }
  }, [lines, addItem, removeLine, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
