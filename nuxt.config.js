export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "bilogmilog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Baştan sona NuxtJs (VueJs) ile geliştirilmiş blog sitesi."
      },
      { name: "robots", content: "index, follow" },
      {name:"keywords", content:"JavaScript, NuxtJs, VueJs, blog, expressJs, node.js"},
      {name:"author", content:"Tahir Battal"}
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/07bab029bf.js",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/firebase.js", { src: "~/plugins/Vuelidate" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    firebaseAPIKey: "AIzaSyAfT05zG77hug9tzHflQrWv9IqEErr1TNM",
    firebaseAuthDomain: "exapmple-45708.firebaseapp.com",
    firebaseDatabaseURL: "https://exapmple-45708.firebaseio.com",
    firebaseProjectId: "exapmple-45708",
    firebaseStorageBucket: "exapmple-45708.appspot.com",
    firebaseMessagingSenderId: "363463962940",
    firebaseAppId: "1:363463962940:web:c0d5511f0686a3885bee39",
    firebaseMeasurementId: "G-7765JYVYZM"
  }
};
