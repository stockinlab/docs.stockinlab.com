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
            '',
            {
                title: 'Account',
                path: '/account',
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
                    {
                        title: 'Dashboard',
                        path: '/lims/dashboard/',
                        children: [
                            '/lims/dashboard/categories',
                            '/lims/dashboard/locations',
                            '/lims/dashboard/parameters',
                            '/lims/dashboard/import-workspace',
                            '/lims/dashboard/audit-trail',
                            '/lims/dashboard/user-management',
                        ],
                    },
                    'lims/history/',
                    // {
                    //     title: 'History',
                    //     path: '/lims/history',
                    // },
                    {
                        title: 'Items',
                        path: '/lims/items',
                        children: [
                            '/lims/items/add',
                            '/lims/items/edit',
                            '/lims/items/label',
                            '/lims/items/link',
                            '/lims/items/remove',
                            '/lims/items/reserve',
                            '/lims/items/search',
                            '/lims/items/view',
                        ],
                    },
                    {
                        title: 'Stock',
                        path: '/lims/stock',
                        children: [
                            '/lims/stock/sample-consumption',
                            '/lims/stock/view',
                        ],
                    },
                    {
                        title: 'Storage',
                        path: '/lims/storage',
                        children: [
                            '/lims/storage/capacity',
                            '/lims/storage/overview',
                        ],
                    },
                ],
            },
            {
                title: 'Tools',
                path: '/tools',
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
};