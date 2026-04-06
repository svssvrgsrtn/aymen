import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartProvider'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Catalog />} />
            <Route path="/men" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
