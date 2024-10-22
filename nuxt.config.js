

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  extends: [
    './domains/general',
    './plugins/unified-app',
    'nuxt-unified-confetti',
  ],
  modules: [
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-P80YWT2RDF',
  },
});
