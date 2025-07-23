export default defineNuxtConfig ({ 
  modules: ['@nuxt/devtools', '@pinia/nuxt', '@nuxtjs/color-mode'],
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
            @use '~/assets/styles/base/resets' as *;
            @use '~/assets/styles/base/root' as *;
          `,
        },
      },
    },
  },
  compatibilityDate: '2024-12-05'
})