// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  // @ts-ignore - colorMode is a valid option for the color-mode module
  colorMode: {
    preference: 'light', // default theme
    fallback: 'light', // fallback theme if user's preference is not available
    classSuffix: '', // optional - default value is '-mode'
  },
  app: {
    head: {
      title: 'Abingdon Antiques',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Abingdon Antiques and More Vendor Mall - Your premier destination for antiques and collectibles in Abingdon, Virginia.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  // Switch to static generation
  ssr: true,
  nitro: {
    preset: 'static'
  }
})