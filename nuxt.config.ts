// nuxt.config.ts

export default defineNuxtConfig ({
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/devtools', '@pinia/nuxt'],
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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '~/assets/styles/variables' as *;
            ;`
        },
      },
    },
  }
})