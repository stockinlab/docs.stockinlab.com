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
                label: 'English',
                searchPlaceholder: 'Search...',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                sidebar: [
                    ...getGuideSidebar('Guide'),
                    ...getAccountSidebar('Account'),
                    ...getLIMSSidebar('LIMS'),
                    ...getELNSidebar('ELN'),
                    ...getToolsSidebar('Tools'),
                    ...getSuperAdministrationSidebar('Super-administration'),
                ],
            },
            '/fr/': {
                label: 'English',
                searchPlaceholder: 'Rechercher...',
                selectText: 'Langues',
                ariaLabel: 'Sélectionner la langue',
                editLinkText: 'Modifier la page sur GitHub',
                lastUpdated: 'Dernière mise à jour',
                sidebar: [
                    ...getGuideSidebar('Guide', '/fr'),
                    ...getAccountSidebar('Compte', '/fr'),
                    ...getLIMSSidebar('LIMS', '/fr'),
                    ...getELNSidebar('ELN', '/fr'),
                    ...getToolsSidebar('Outils', '/fr'),
                    ...getSuperAdministrationSidebar('Super-administration', '/fr'),
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

function getGuideSidebar(title, prefix = '') {
    return [
        {
            title,
            collapsable: false,
            children: [
                prefix,
            ],
        },
    ];
}

function getAccountSidebar(title, prefix = '') {
    return [
        {
            title,
            collapsable: false,
            children: [
                `${prefix}/account/settings`,
                `${prefix}/account/preferences`,
                `${prefix}/account/security`,
            ],
        },
    ];
}

function getLIMSSidebar(title, prefix = '') {
    return [
        {
            title,
            collapsable: false,
            children: [
                `${prefix}/laboratory-information-management-system/dashboard`,
                `${prefix}/laboratory-information-management-system/add-item`,
                `${prefix}/laboratory-information-management-system/remove-item`,
                `${prefix}/laboratory-information-management-system/link-items`,
                `${prefix}/laboratory-information-management-system/label`,
                `${prefix}/laboratory-information-management-system/edit-item`,
                `${prefix}/laboratory-information-management-system/reserve-item`,
                `${prefix}/laboratory-information-management-system/search-item`,
                `${prefix}/laboratory-information-management-system/view-item`,
                `${prefix}/laboratory-information-management-system/history`,
                `${prefix}/laboratory-information-management-system/storage`,
                `${prefix}/laboratory-information-management-system/track-sample-consumption`,
                `${prefix}/laboratory-information-management-system/view-stock`,
            ],
        },
    ];
}

function getELNSidebar(title, prefix = '') {
    return [
        {
            title,
            collapsable: false,
            children: [
                `${prefix}/electronic-lab-notebook/protocols`,
            ],
        },
    ];
}

function getToolsSidebar(title, prefix = '') {
    return [
        {
            title,
            collapsable: false,
            children: [
                `${prefix}/tools/serial-dilution-calculator`,
            ],
        },
    ];
}

function getSuperAdministrationSidebar(title, prefix = '') {
    return [
        {
            title,
            collapsable: false,
            children: [
                `${prefix}/super-administration/super-administrator-management`,
                `${prefix}/super-administration/audit-trail`,
                `${prefix}/super-administration/backups`,
                `${prefix}/super-administration/group-management`,
                `${prefix}/super-administration/inventories`,
                `${prefix}/super-administration/parameters`,
                `${prefix}/super-administration/server-configuration`,
                `${prefix}/super-administration/user-management`,
            ],
        },
    ];
}
