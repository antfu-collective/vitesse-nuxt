/**
 * ---------------------
 * 🚗🚦 Generated by nuxt-typed-router. Do not modify !
 * ---------------------
 * */

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const routesList = { all: 'all', hiId: 'hi-id', index: 'index' }

  return {
    provide: {
      typedRouter: nuxtApp.$router,
      routesList,
    },
  }
})
