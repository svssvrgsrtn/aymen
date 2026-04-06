import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { Link } from 'react-router-dom'

const spring = { stiffness: 120, damping: 18, mass: 0.4 }

export function HeroScene() {
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(0, spring)
  const rotateY = useSpring(0, spring)

  function onMove(e: React.PointerEvent<HTMLElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px)
    my.set(py)
    rotateX.set((py - 0.5) * -12)
    rotateY.set((px - 0.5) * 12)
  }

  function onLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(255,255,255,0.12), transparent 55%)`

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative overflow-hidden border-b border-[#2a2a2a] mesh-bg"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a8a8a]">
              Spring / Summer
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl leading-[0.95] tracking-wide text-white sm:text-7xl lg:text-8xl">
              Street
              <br />
              volume
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#b0b0b0]">
              Oversized layers, sharp denim, and footwear with attitude —
              curated for men and women who live in motion.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/women"
                className="inline-flex items-center justify-center bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[#e8e8e8]"
              >
                Shop women
              </Link>
              <Link
                to="/men"
                className="inline-flex items-center justify-center border border-[#3a3a3a] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white"
              >
                Shop men
              </Link>
            </div>
          </div>

          <div className="perspective-1000 relative aspect-[4/5] w-full max-w-lg justify-self-center lg:max-w-none lg:justify-self-end">
            <motion.div
              style={{ backgroundImage: spotlight }}
              className="pointer-events-none absolute inset-0 rounded-sm"
            />
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}
              className="preserve-3d relative h-full overflow-hidden rounded-sm border border-[#2a2a2a] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)]"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85"
                alt="Editorial fashion"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.55 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-[family-name:var(--font-display)] text-4xl text-white sm:text-5xl">
                  New drop
                </p>
                <p className="mt-1 text-sm text-[#c8c8c8]">
                  Move the pointer — 3D parallax
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-2 top-1/4 hidden border border-white/20 bg-black/70 p-3 backdrop-blur-md lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white">
                Layered
              </p>
              <p className="mt-1 text-xs text-[#9a9a9a]">Outerwear</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
