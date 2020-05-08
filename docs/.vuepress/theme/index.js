const path = require('path');

module.exports = (options, ctx) => {
    const { themeConfig, siteConfig } = ctx;

    const isAlgoliaSearch = (
        themeConfig.algolia
        || Object
            .keys(siteConfig.locales && themeConfig.locales || {})
            .some(base => themeConfig.locales[base].algolia)
    );

    const enableSmoothScroll = themeConfig.smoothScroll === true;

    return {
        plugins: [
            ['@vuepress/active-header-links', options.activeHeaderLinks],
            '@vuepress/search',
            '@vuepress/plugin-nprogress',
            '@vuepress/medium-zoom',
            ['container', {
                type: 'tip',
                defaultTitle: {
                    '/': 'TIP',
                    '/fr/': 'ASTUCE',
                },
            }],
            ['container', {
                type: 'warning',
                defaultTitle: {
                    '/': 'WARNING',
                    '/fr/': 'ATTENTION',
                },
            }],
            ['container', {
                type: 'danger',
                defaultTitle: {
                    '/': 'WARNING',
                    '/fr/': 'ATTENTION',
                },
            }],
            ['smooth-scroll', enableSmoothScroll],
        ],
    };
};
