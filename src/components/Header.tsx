import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/useCart'

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-xs font-semibold uppercase tracking-[0.2em] transition-colors',
    isActive ? 'text-white' : 'text-[#8a8a8a] hover:text-white',
  ].join(' ')

export function Header() {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#2a2a2a] bg-[#0c0c0c]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-white sm:text-3xl"
        >
          Younes Market
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <NavLink to="/women" className={navClass}>
            Women
          </NavLink>
          <NavLink to="/men" className={navClass}>
            Men
          </NavLink>
          <NavLink to="/#collections" className={navClass}>
            Collections
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8a8a] hover:text-white sm:block"
            aria-label="Search"
          >
            Search
          </button>
          <Link
            to="/cart"
            className="relative text-xs font-semibold uppercase tracking-[0.2em] text-white"
          >
            Bag
            {totalItems > 0 && (
              <span className="absolute -right-3 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-black">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#2a2a2a] md:hidden"
          >
            <nav className="flex flex-col gap-4 px-4 py-6">
              <NavLink
                to="/women"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                Women
              </NavLink>
              <NavLink
                to="/men"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                Men
              </NavLink>
              <NavLink
                to="/#collections"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                Collections
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
