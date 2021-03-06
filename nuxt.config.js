export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  render: {
    injectScripts: false,
  },

  generate: {
    fallback: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Raquel Nogal',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Web CV y portfolio de la periodista Raquel Nogal',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Google fonts: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    prefetch: true,
    preconect: true,
    preload: true,
    useStylesheet: true,
    display: 'swap',
    families: {
      Roboto: true,
      Kalam: true,
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // https://sitemap.nuxtjs.org/usage/sitemap
  sitemap: {
    hostname: 'https://raquel-nogal.netlify.app/',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
    // TODO: generate routes for blog posts
    // routes: async () => {}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
