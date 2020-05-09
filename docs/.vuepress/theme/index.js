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
                before: info => `<div class="custom-block tip"><div class="custom-block-title"><svg class="inline-flex h-5 w-5 mr-2 text-green-400"><use href="/assets/images/icons.svg#bulb"/></svg>${info}</div>\n`,
                after: () => '</div>\n',
            }],
            ['container', {
                type: 'warning',
                defaultTitle: {
                    '/': 'WARNING',
                    '/fr/': 'ATTENTION',
                },
                before: info => `<div class="custom-block warning"><div class="custom-block-title"><svg class="inline-flex h-5 w-5 mr-2 text-orange-400"><use href="/assets/images/icons.svg#warning"/></svg>${info}</div>\n`,
                after: () => '</div>\n',
            }],
            ['container', {
                type: 'danger',
                defaultTitle: {
                    '/': 'WARNING',
                    '/fr/': 'ATTENTION',
                },
                before: info => `<div class="custom-block danger"><div class="custom-block-title"><svg class="inline-flex h-5 w-5 mr-2 text-red-400"><use href="/assets/images/icons.svg#error"/></svg>${info}</div>\n`,
                after: () => '</div>\n',
            }],
            ['smooth-scroll', enableSmoothScroll],
        ],
    };
};
