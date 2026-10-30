import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Link-preview crawlers (WhatsApp etc.) need absolute image URLs.
// Netlify exposes the live site address as URL during builds; SITE_URL overrides it.
const siteUrl = (process.env.SITE_URL || process.env.URL || '').replace(/\/$/, '')

const injectSiteUrl = () => ({
  name: 'inject-site-url',
  transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), injectSiteUrl()],
})
