import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Set CF_TUNNEL=1 when using Cloudflare quick tunnel (trycloudflare.com). */
const cloudflareTunnel = process.env.CF_TUNNEL === '1'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 8000,
    open: !cloudflareTunnel,
    host: true,
    allowedHosts: ['.trycloudflare.com'],
    // Through the tunnel, the browser only reaches :443. Default HMR used :8000 → WS fails → blank page.
    ...(cloudflareTunnel && {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
      },
    }),
    // If assets still fail to load, set VITE_TUNNEL_ORIGIN to your full trycloudflare URL (no trailing slash).
    ...(process.env.VITE_TUNNEL_ORIGIN?.trim() && {
      origin: process.env.VITE_TUNNEL_ORIGIN.trim().replace(/\/$/, ''),
    }),
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['.trycloudflare.com'],
    port: (() => {
      const p = Number(process.env.PORT)
      return Number.isFinite(p) && p > 0 ? p : 4173
    })(),
    strictPort: false,
  },
})
