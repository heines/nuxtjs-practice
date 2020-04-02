require('dotenv').config();

export default {
  mode: "universal",
  buildModules: [
    "@nuxtjs/dotenv"
  ],
  /*
   ** Environments
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  router: {
    base: process.env.SUBDIR
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    // プロジェクト内の SCSS ファイル
    {
      src: 'bulma/bulma.sass',
      lang: 'sass'
    },
    {
      src: "@/assets/css/main.scss",
      lang: "scss"
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/dotenv",
  ],
  styleResources: {
    // 指定したSCSSファイルをvueファイル内のstyleタグの中で有効とする
    scss: [
      '@/assets/css/foundation/_variables.scss',
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
}
