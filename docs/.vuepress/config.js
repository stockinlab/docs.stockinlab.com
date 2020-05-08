const purgecss = require("@fullhuman/postcss-purgecss")({
    // Specify the paths to all of the template files in your project
    content: ["./.vuepress/theme/**/*.*", "./!(node_modules)/**/*.md", "./*.md"],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
    base: '/',
    title: 'StockInLab',
    description: 'StockInLab Documentation - LIMS & ELN for researchers in academia or industry',
    head: [
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://www.stockinlab.com/favicon-32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://www.stockinlab.com/favicon-16.png'}],
        ['meta', {name: 'og:type', content: 'website'}],
        ['meta', {name: 'og:title', content: 'StockInLab Documentation'}],
        ['meta', {name: 'og:description', content: 'StockInLab Documentation - LIMS & ELN for researchers in academia or industry'}],
        ['meta', {name: 'og:image', content: 'https://www.stockinlab.com/images/og-image.png'}],
        ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
        ['meta', {name: 'twitter:title', content: 'StockInLab Documentation'}],
        ['meta', {name: 'twitter:description', content: 'StockInLab Documentation - LIMS & ELN for researchers in academia or industry'}],
        ['meta', {name: 'twitter:image', content: 'https://www.stockinlab.com/images/og-image.png'}],
        ['meta', {name: 'theme-color', content: '#3EBD93'}]
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'StockInLab Documentation',
            description: 'StockInLab Documentation - LIMS & ELN for researchers in academia or industry',
        },
        '/fr/': {
            lang: 'fr-FR',
            title: 'StockInLab Documentation',
            description: 'StockInLab Documentation - LIMS & ELN pour faciliter vos recherches académiques ou industrielles',
        },
    },
    themeConfig: {
        logo: '/assets/images/small_logo.svg',
        docsRepo: 'stockinlab/docs.stockinlab.com',
        docsDir: 'docs',
        editLinks: true,
        locales: {
            '/': {
                searchPlaceholder: 'Search...',
                lastUpdated: 'Last Updated',
                sidebar: [
                    {
                        title: 'Guide',
                        path: '',
                        collapsable: false,
                        children: [
                            '/',
                        ],
                    },
                    {
                        title: 'Account',
                        path: '/account',
                        collapsable: true,
                        children: [
                            '/account/settings',
                            '/account/preferences',
                            '/account/security',
                        ],
                    },
                    {
                        title: 'LIMS',
                        path: '/laboratory-information-management-system',
                        collapsable: true,
                        children: [
                            '/laboratory-information-management-system/dashboard',
                            '/laboratory-information-management-system/add-item',
                            '/laboratory-information-management-system/remove-item',
                            '/laboratory-information-management-system/link-items',
                            '/laboratory-information-management-system/label',
                            '/laboratory-information-management-system/edit-item',
                            '/laboratory-information-management-system/reserve-item',
                            '/laboratory-information-management-system/search-item',
                            '/laboratory-information-management-system/view-item',
                            '/laboratory-information-management-system/history',
                            '/laboratory-information-management-system/storage',
                            '/laboratory-information-management-system/track-sample-consumption',
                            '/laboratory-information-management-system/view-stock',
                        ],
                    },
                    {
                        title: 'ELN',
                        path: '/electronic-lab-notebook',
                        collapsable: true,
                        children: [
                            '/electronic-lab-notebook/protocols',
                        ],
                    },
                    {
                        title: 'Tools',
                        path: '/tools',
                        collapsable: true,
                        children: [
                            '/tools/serial-dilution-calculator',
                        ],
                    },
                    {
                        title: 'Super-administrator',
                        path: '/super-administrator',
                        collapsable: true,
                        children: [
                            '/super-administrator/super-administrator-management',
                            '/super-administrator/audit-trail',
                            '/super-administrator/backups',
                            '/super-administrator/group-management',
                            '/super-administrator/inventories',
                            '/super-administrator/parameters',
                            '/super-administrator/server-configuration',
                            '/super-administrator/user-management',
                        ],
                    },
                ],
            },
            '/fr/': {
                searchPlaceholder: 'Rechercher...',
                lastUpdated: 'Dernière mise à jour',
                sidebar: [
                    {
                        title: 'Guide',
                        path: '',
                        collapsable: false,
                        children: [
                            '/',
                        ],
                    },
                    {
                        title: 'Compte',
                        path: '/fr/compte',
                        collapsable: true,
                        children: [
                            '/fr/compte/parametres',
                            '/fr/compte/preferences',
                            '/fr/compte/securite',
                        ],
                    },
                    {
                        title: 'LIMS',
                        path: '/fr/laboratory-information-management-system',
                        collapsable: true,
                        children: [
                            '/fr/laboratory-information-management-system/tableau-de-bord',
                            '/fr/laboratory-information-management-system/items',
                            '/fr/laboratory-information-management-system/historique',
                            '/fr/laboratory-information-management-system/espace-de-rangement',
                            '/fr/laboratory-information-management-system/suivi-consommation-',
                            '/fr/laboratory-information-management-system/voir-stock',
                        ],
                    },
                    {
                        title: 'ELN',
                        path: '/fr/electronic-lab-notebook',
                        collapsable: true,
                        children: [
                            '/fr/electronic-lab-notebook/protocoles',
                        ],
                    },
                    {
                        title: 'Outils',
                        path: '/fr/outils',
                        collapsable: true,
                        children: [
                            '/fr/outils/serial-dilution-calculator',
                        ],
                    },
                    {
                        title: 'Super-administration',
                        path: '/fr/super-administration',
                        collapsable: true,
                        children: [
                            '/fr/super-administration/gestion-des-super-administrateurs',
                            '/fr/super-administration/audit-trail',
                            '/fr/super-administration/sauvegardes',
                            '/fr/super-administration/gestion-des-groupes',
                            '/fr/super-administration/inventaires',
                            '/fr/super-administration/parameteres',
                            '/fr/super-administration/server-configuration',
                            '/fr/super-administration/gestion-des-utilisateurs',
                        ],
                    },
                ],
            },
        },
    },
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer'),
            ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
        ]
    },
    plugins: [
        // '@vuepress/medium-zoom',
        // [
        //     'vuepress-plugin-clean-urls',
        //     {
        //         normalSuffix: '',
        //         indexSuffix: '',
        //         notFoundPath: '/404.html',
        //     },
        // ],
    ],
};
