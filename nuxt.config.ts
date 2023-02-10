export default defineNuxtConfig({
    telemetry: false,

    // ssr: false,

    css: [
        '~/assets/css/app.css',
    ],

    app: {
        head: {
            titleTemplate: '%s - StockInLab Docs',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},

                {hid: 'description', name: 'description', content: 'StockInLab documentation'},

                {name: 'author', content: 'StockInLab'},
                {name: 'robots', content: 'index, follow'},
            ],
            link: [
                {rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png'},
            ],
            bodyAttrs: {
                class: 'bg-white antialiased',
            },
        },
    },

    modules: [
        '@nuxt/content',
        '@nuxt/devtools',
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
