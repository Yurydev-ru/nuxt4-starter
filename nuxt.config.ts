export default defineNuxtConfig ({ 
  modules: [
    '@nuxt/devtools',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts'
  ],
  css: ['~/assets/styles/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: 
          `
            @use '~/assets/styles/themes/light' as *;
            @use '~/assets/styles/themes/dark' as *;
          `,
        },
      },
    },
  },
  compatibilityDate: '2024-12-05'
})