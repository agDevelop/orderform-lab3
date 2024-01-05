// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
        htmlAttrs: {
            lang: 'ru',
        },
        title: 'Гончаров А.Н. 224-372',
        charset: 'utf-8',
        meta: [],
        link: [],
    }
  },
})
