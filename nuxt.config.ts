// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        "@pinia/nuxt",
        "bootstrap-vue-next/nuxt",
    ],
    css: [
        "~/assets/css/app.css",
        "~/assets/css/global.css"
    ]
})