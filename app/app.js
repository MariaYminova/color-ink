import { defineNuxtApp } from '@nuxt/kit'
import { createPinia } from 'pinia'

export default defineNuxtApp(({ app }) => {
  const pinia = createPinia()
  app.use(pinia)
})