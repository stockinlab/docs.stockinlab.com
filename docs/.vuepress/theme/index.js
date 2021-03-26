module.exports = (options) => {
    return {
        plugins: [
            ['@vuepress/active-header-links', options.activeHeaderLinks],
            '@vuepress/plugin-nprogress',
            '@vuepress/medium-zoom',
            // ['@vuepress/pwa', {
            //     serviceWorker: true,
            //     updatePopup: {
            //         '/': {
            //             message: 'New content is available.',
            //             buttonText: 'Refresh',
            //         },
            //         '/fr/': {
            //             message: 'Nouveau contenu disponible.',
            //             buttonText: 'Actualiser',
            //         }
            //     },
            // }],
            ['container', {
                type: 'tip',
                defaultTitle: {
                    '/': 'TIP',
                    '/fr/': 'ASTUCE',
                },
                before: () => '<div class="alert alert-tip"><div class="alert-title"><svg class="h-8 w-8 text-green-500"><use href="/assets/images/icons.svg#bulb"/></svg></div><div class="alert-content">\n',
                after: () => '</div></div>\n',
            }],
            ['container', {
                type: 'warning',
                defaultTitle: {
                    '/': 'WARNING',
                    '/fr/': 'ATTENTION',
                },
                before: () => '<div class="alert alert-warning"><div class="alert-title"><svg class="h-8 w-8 text-orange-500"><use href="/assets/images/icons.svg#warning"/></svg></div><div class="alert-content">\n',
                after: () => '</div></div>\n',
            }],
            ['container', {
                type: 'danger',
                defaultTitle: {
                    '/': 'WARNING',
                    '/fr/': 'ATTENTION',
                },
                before: () => '<div class="alert alert-danger"><div class="alert-title"><svg class="h-8 w-8 text-red-500"><use href="/assets/images/icons.svg#error"/></svg></div><div class="alert-content">\n',
                after: () => '</div></div>\n',
            }],
            'smooth-scroll',
        ],
    };
};
