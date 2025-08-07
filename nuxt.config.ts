import tailwindcss from "@tailwindcss/vite";
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FF4800',
      100: '#FF4800',
      200: '#FF4800',
      300: '#FF4800',
      400: '#FF4800',
      500: '#FF4800',
      600: '#FF4800',
      700: '#FF4800',
      800: '#FF4800',
      900: '#FF4800',
      950: '#FF4800'
    },
  },
})

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      bodyAttrs: {
        dir: 'rtl'
      },
      // link: [
      //   { rel: 'icon', href: '/logo.png' }
      // ]
    },
  },
  css: ['~/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: 'none',
          cssLayer: false,
        },
      }
    }
  },
})
