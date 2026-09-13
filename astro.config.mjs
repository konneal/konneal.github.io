import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://www.konneal.org',
  output: 'static',
  integrations: [
    vue(),
    sitemap({
      filter: (page) => !page.endsWith('.xml'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
