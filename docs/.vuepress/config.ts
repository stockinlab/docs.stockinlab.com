import {defineUserConfig} from '@vuepress/cli';
import {path} from '@vuepress/utils';
import type {DefaultThemeOptions} from './theme/node';
import {navbar, sidebar} from './configs';

const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig<DefaultThemeOptions>({
    theme: path.resolve(__dirname, './theme'),

    base: '/',
    title: 'StockInLab',
    description: 'StockInLab Documentation - LIMS & ELN for researchers in academia or industry',

    head: [
        ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png'}],
        ['meta', {name: 'og:type', content: 'website'}],
        ['meta', {name: 'og:title', content: 'StockInLab Documentation'}],
        ['meta', {name: 'og:description', content: 'StockInLab Documentation - LIMS & ELN for researchers in academia or industry'}],
        ['meta', {name: 'og:image', content: '/assets/images/og-image.png'}],
        ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
        ['meta', {name: 'twitter:title', content: 'StockInLab Documentation'}],
        ['meta', {name: 'twitter:description', content: 'StockInLab Documentation - LIMS & ELN for researchers in academia or industry'}],
        ['meta', {name: 'twitter:image', content: '/assets/images/og-image.png'}],
        ['meta', {name: 'theme-color', content: '#0694a2'}]
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
        docsBranch: 'main',
        repo: null,
        darkMode: false,
        sidebarDepth: 2,
        // temporary disable edit link because filePathRelative doest not exists
        editLink: true,
        lastUpdated: true,
        contributors: false,

        locales: {
            '/': {
                // navbar
                navbar: navbar.en,
                selectLanguageText: 'Languages',
                selectLanguageAriaLabel: 'Select language',

                // sidebar
                sidebar: sidebar.en,

                // page meta
                editLinkText: 'Edit this page on Github',
                lastUpdatedText: 'Last Updated',
                contributorsText: 'Contributors',

                // 404 page messages
                notFound: [
                    'There\'s nothing here.',
                    'How did we get here?',
                    'That\'s a Four-Oh-Four.',
                    'Looks like we\'ve got some broken links.',
                ],
                backToHome: 'Take me home',

                // a11y
                openInNewWindow: 'open in new window',
                toggleDarkMode: 'toggle dark mode',
                toggleSidebar: 'toggle sidebar',
            },
            '/fr/': {
                // navbar
                navbar: navbar.fr,
                selectLanguageText: 'Langues',
                selectLanguageAriaLabel: 'Sélectionner la langue',

                // sidebar
                sidebar: sidebar.fr,

                // page meta
                editLinkText: 'Modifier la page sur GitHub',
                lastUpdatedText: 'Dernière mise à jour',
                contributorsText: 'Contributeurs',

                // 404 page messages
                notFound: [
                    'Il n\'y a rien içi.',
                    'Comment êtes-vous arrivés là ?',
                    'C\'est une page 404.',
                    'Il semblerait que nous avons des liens cassés.',
                ],
                backToHome: 'Retour à l\'accueil',

                // a11y
                openInNewWindow: 'ouvrir dans un nouvel onglet',
                toggleDarkMode: 'active/désactive le mode nuit',
                toggleSidebar: 'ouvrir/fermer la sidebar',
            },
        },

        themePlugins: {
            git: isProd,
        }
    },

    bundlerConfig: {
        postcss: {
            postcssOptions: {
                plugins: [
                    require('tailwindcss')('./tailwind.config.js'),
                    require('autoprefixer'),
                ],
            },
        },
    },
});
