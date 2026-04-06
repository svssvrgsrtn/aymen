import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#080808]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-[family-name:var(--font-display)] text-3xl text-white">
            Younes Market
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#8a8a8a]">
            Contemporary cuts for city life. Built with React, TypeScript, and
            motion — a demo storefront inspired by modern fast-fashion UX.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Shop
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[#8a8a8a]">
            <li>
              <Link to="/women" className="hover:text-white">
                Women
              </Link>
            </li>
            <li>
              <Link to="/men" className="hover:text-white">
                Men
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                New in
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Info
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[#8a8a8a]">
            <li>
              <a href="#" className="hover:text-white">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#2a2a2a] py-6 text-center text-xs text-[#5c5c5c]">
        © {new Date().getFullYear()} Younes Market. Not affiliated with any
        third-party retailer.
      </div>
    </footer>
  )
}
