
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
      { name: 'keywords', content: '沈意波,沈bb,这里是沈意波的个人博客,分享技术和生活,程序员,开发者,个人网站,专注前端开发,shenyibo,life' },
      { hid: 'description', name: 'description', content: '沈意波的个人小站' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/syblife.ico' }
    ],
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
    '~/assets/css/iconfont.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/assets/js/iconfont.js', ssr: false },
    '@/plugins/bus-inject.js',
    { src: '@/plugins/bus-inject.js', ssr: false },
    { src: '@/plugins/vue-meditor.js', ssr: false}
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
      target: 'https://api.shenyibo.life',
      // target: 'http://127.0.0.1:7001',
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
