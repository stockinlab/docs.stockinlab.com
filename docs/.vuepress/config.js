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
                    '/laboratory-information-management-system/items',
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
    plugins: [
        '@vuepress/medium-zoom',
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