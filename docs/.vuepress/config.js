module.exports = {
    base: '/',
    title: 'StockInLab',
    description: 'StockInLab Documentation - LIMS & ELN for researchers in academia or industry',
    head: [
        ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
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
        shouldPrefetch: false,
        locales: {
            '/': {
                label: 'English',
                searchPlaceholder: 'Search...',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {
                        text: 'General',
                        link: '/general/',
                    },
                    {
                        text: 'LIMS',
                        link: '/laboratory-information-management-system/',
                    },
                    {
                        text: 'ELN',
                        link: '/electronic-lab-notebook/',
                    },
                    {
                        text: 'Tools',
                        link: '/tools/',
                    },
                ],
                sidebar: {
                    '/general/': getGeneralSidebar('Guide', 'Account', 'Super-administration'),
                    '/laboratory-information-management-system/': getLIMSSidebar('Items', 'Storage', 'Dashboard', 'Super-administration'),
                    '/electronic-lab-notebook/': getELNSidebar('ELN'),
                    '/tools/': getToolsSidebar('Tools'),
                },
            },
            '/fr/': {
                label: 'Français',
                searchPlaceholder: 'Rechercher...',
                selectText: 'Langues',
                ariaLabel: 'Sélectionner la langue',
                editLinkText: 'Modifier la page sur GitHub',
                lastUpdated: 'Dernière mise à jour',
                nav: [
                    {
                        text: 'Général',
                        link: '/fr/general/',
                    },
                    {
                        text: 'LIMS',
                        link: '/fr/laboratory-information-management-system/',
                    },
                    {
                        text: 'ELN',
                        link: '/fr/electronic-lab-notebook/',
                    },
                    {
                        text: 'Outils',
                        link: '/fr/tools/',
                    },
                ],
                sidebar: {
                    '/fr/general/': getGeneralSidebar('Guide', 'Account', 'Super-administration'),
                    '/fr/laboratory-information-management-system/': getLIMSSidebar('Éléments', 'Stockage', 'Tableau de bord', 'Super-administration'),
                    '/fr/electronic-lab-notebook/': getELNSidebar('ELN'),
                    '/fr/tools/': getToolsSidebar('Tools'),
                },
            },
        },
    },
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer'),
        ],
    },
    plugins: [
        '@kawarimidoll/tailwind',
    ],
};

function getGeneralSidebar(guideTitle, accountTitle, superAdministrationTitle) {
    return [
        {
            title: guideTitle,
            collapsable: false,
            children: [
                '',
            ],
        },
        {
            title: accountTitle,
            collapsable: false,
            children: [
                'account-settings',
                'account-preferences',
                'account-security',
            ],
        },
        {
            title: superAdministrationTitle,
            collapsable: false,
            children: [
                'super-administration-super-administrator-management',
                'super-administration-audit-trail',
                'super-administration-backups',
                'super-administration-group-management',
                'super-administration-server-configuration',
                'super-administration-user-management',
            ],
        },
    ];
}

function getLIMSSidebar(itemsTitle, storageTitle, dashboardTitle, superAdministrationTitle) {
    return [
        {
            title: itemsTitle,
            collapsable: false,
            children: [
                'add-item',
                'remove-item',
                'link-items',
                'label',
                'edit-item',
                'reserve-item',
                'search-item',
                'view-item',
                'history',
                'track-sample-consumption',
            ],
        },
        {
            title: storageTitle,
            collapsable: false,
            children: [
                'stock',
                'storage-overview',
                'storage-capacity',
            ],
        },
        {
            title: dashboardTitle,
            collapsable: false,
            children: [
                'dashboard-parameters',
                'dashboard-categories',
                'dashboard-locations',
                'import-workspace',
                'dashboard-users-management',
                'dashboard-audit-trail',
            ],
        },
        {
            title: superAdministrationTitle,
            collapsable: false,
            children: [
                'super-administration-inventories',
                'super-administration-parameters',
            ],
        },
    ];
}

function getELNSidebar(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                'protocols',
            ],
        },
    ];
}

function getToolsSidebar(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                'serial-dilution-calculator',
            ],
        },
    ];
}
