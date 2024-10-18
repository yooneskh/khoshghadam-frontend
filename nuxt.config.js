

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  extends: [
    './domains/general',
    './plugins/unified-app',
    'nuxt-unified-confetti',
  ],
  unifiedComponents: {
    theme: {
      'surface': '#FAFAFA',
      'on-surface': '#212121',
      'neutral': '#212121',
      'on-neutral': '#FAFAFA',
      'primary': '#3B82F6',
      'on-primary': '#FAFAFA',
      'secondary': '#2DD4BF',
      'on-secondary': '#212121',
      'success': '#22C55E',
      'on-success': '#FAFAFA',
      'warning': '#FFC107',
      'on-warning': '#212121',
      'danger': '#EF4444',
      'on-danger': '#FAFAFA',
    },
  },
  modules: [
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-P80YWT2RDF',
  },
});
