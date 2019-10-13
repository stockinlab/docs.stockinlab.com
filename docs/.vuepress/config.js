module.exports = {
    base: '/',
    title: 'StockInLab',
    description: 'StockInLab Documentation - StockInLab Laboratory Inventory Management System (LIMS) for researchers in academia or industry',
    head: [
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://www.stockinlab.com/favicon-32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://www.stockinlab.com/favicon-16.png'}],
        ['meta', {name: 'og:type', content: 'website'}],
        ['meta', {name: 'og:title', content: 'StockInLab Documentation'}],
        ['meta', {name: 'og:description', content: 'StockInLab Documentation - StockInLab Laboratory Inventory Management System (LIMS) for researchers in academia or industry'}],
        ['meta', {name: 'og:image', content: 'https://www.stockinlab.com/images/og-image.png'}],
        ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
        ['meta', {name: 'twitter:title', content: 'StockInLab Documentation'}],
        ['meta', {name: 'twitter:description', content: 'StockInLab Documentation - StockInLab Laboratory Inventory Management System (LIMS) for researchers in academia or industry'}],
        ['meta', {name: 'twitter:image', content: 'https://www.stockinlab.com/images/og-image.png'}],
        ['meta', {name: 'theme-color', content: '#3EBD93'}]
    ],
    themeConfig: {
        logo: '/assets/images/small_logo.svg',
        docsRepo: 'stockinlab/docs.stockinlab.com',
        docsDir: 'docs',
        editLinks: true,
        searchPlaceholder: 'Search...',
        lastUpdated: 'Last Updated',
        sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: [
                    '',
                ],
            },
            {
                title: 'Account',
                collapsable: false,
                children: [
                    '/account/settings',
                    '/account/preferences',
                    '/account/security',
                ],
            },
            {
                title: 'LIMS',
                path: '/lims',
                collapsable: false,
                children: [
                    '/lims/dashboard',
                    '/lims/items',
                    '/lims/history',
                    '/lims/storage',
                    '/lims/track-sample-consumption',
                    '/lims/view-stock',
                ],
            },
            {
                title: 'Tools',
                collapsable: false,
                children: [
                    '/tools/serial-dilution-calculator',
                ],
            },
            {
                title: 'Super-administrator',
                path: '/super-administrator',
                collapsable: false,
                children: [
                    '/super-administrator/add-super-administrator',
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
    plugins: ['@vuepress/medium-zoom'],
};