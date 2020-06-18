require('dotenv').config();
const client = require('./plugins/contentful').default;

export default {
  mode: "universal",
  /*
   ** Generate
   */
  generate: {
    routes() {
      return client.getEntries({
        content_type: 'post',
      })
      .then(posts => {
        return [...posts.items.map(post => `/text/${post.fields.url}`)]
      })
    }
  },
  /*
   ** Environments
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
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
  plugins: [
    'plugins/contentful'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/date-fns",
  ],
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
      '@/assets/css/foundation/_functions.scss',
      '@/assets/css/foundation/_global.scss',
      '@/assets/css/foundation/_keyframes.scss',
      '@/assets/css/foundation/_mixin-utils.scss',
      '@/assets/css/foundation/_variables-easings.scss',
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
