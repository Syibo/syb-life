
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'shenyibo.life',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/syblife.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/iconfont.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/assets/js/iconfont.js', ssr: false },
    '@/plugins/bus-inject.js',
    {src:'@/plugins/bus-inject.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      // target: 'http://139.196.51.218:7001',
      target: 'http://127.0.0.1:7001',
      pathRewrite: {
        '^/api': '/',
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    vendor: ['axios'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
