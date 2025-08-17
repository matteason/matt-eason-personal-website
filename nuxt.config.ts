// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  content: {
    documentDriven: true
  },
  modules: ['@nuxt/content'],
  css: ['@/assets/scss/main.scss', '@/assets/css/bootstrap-grid.min.css'],
  app: {
    head: {
      script: [
        {
          src: 'https://platform.twitter.com/widgets.js"',
          async: true
        }
      ]
    }
  }
})
