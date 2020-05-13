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
                    '/laboratory-information-management-system/': getLIMSSidebar('LIMS', 'Records', 'Storage', 'Dashboard', 'Super-administration'),
                    '/electronic-lab-notebook/': getELNSidebar('ELN', 'Protocols', 'Projects'),
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
                    '/fr/laboratory-information-management-system/': getLIMSSidebar('LIMS', 'Éléments', 'Stockage', 'Tableau de bord', 'Super-administration'),
                    '/fr/electronic-lab-notebook/': getELNSidebar('ELN', 'Protocoles', 'Projects'),
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
                'account/settings',
                'account/preferences',
                'account/security',
                'account/groups-management',
            ],
        },
        {
            title: superAdministrationTitle,
            collapsable: false,
            children: [
                'super-administration/server-configuration',
                'super-administration/groups-management',
                'super-administration/users-management',
                'super-administration/super-administrator-management',
                'super-administration/audit-trail',
                'super-administration/backups',
            ],
        },
    ];
}

function getLIMSSidebar(limsTitle, recordsTitle, storageTitle, dashboardTitle, superAdministrationTitle) {
    return [
        {
            title: limsTitle,
            collapsable: false,
            children: [
                '',
            ],
        },
        {
            title: recordsTitle,
            collapsable: false,
            children: [
                'records/add-record',
                'records/remove-record',
                'records/link-records',
                'records/label',
                'records/edit-record',
                'records/reserve-record',
                'records/search',
                'records/view-record',
                'records/history',
                'records/track-sample-consumption',
            ],
        },
        {
            title: storageTitle,
            collapsable: false,
            children: [
                'storage/stock',
                'storage/overview',
                'storage/capacity',
            ],
        },
        {
            title: dashboardTitle,
            collapsable: false,
            children: [
                'dashboard/parameters-management',
                'dashboard/locations-management',
                'dashboard/categories-management',
                'dashboard/users-management',
                'dashboard/import-workspace',
                'dashboard/audit-trail',
            ],
        },
        {
            title: superAdministrationTitle,
            collapsable: false,
            children: [
                'super-administration/inventories-management',
                'super-administration/global-parameters-management',
            ],
        },
    ];
}

function getELNSidebar(elnTitle, protocolsTitle, projectsTitle) {
    return [
        {
            title: elnTitle,
            collapsable: false,
            children: [
                '',
            ],
        },
        {
            title: protocolsTitle,
            collapsable: false,
            children: [
                'protocols/',
            ],
        },
        {
            title: projectsTitle,
            collapsable: false,
            children: [
                'projects/',
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
