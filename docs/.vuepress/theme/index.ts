import {Theme} from '@vuepress/core';
import {path} from '@vuepress/utils';
import {assignDefaultLocaleOptions, DefaultThemeOptions, DefaultThemePageData, resolveActiveHeaderLinksPluginOptions, resolveContainerPluginOptions, resolveGitPluginOptions, resolveMediumZoomPluginOptions} from './node';
import {Page} from 'vuepress-webpack';

export const defaultTheme: Theme<DefaultThemeOptions> = ({themePlugins = {}, ...localeOptions}) => {
    assignDefaultLocaleOptions(localeOptions);

    return {
        name: 'vuepress-stockinlab',

        layouts: {
            Home: path.resolve(__dirname, './client/layouts/Home.vue'),
            Layout: path.resolve(__dirname, './client/layouts/Layout.vue'),
            404: path.resolve(__dirname, './client/layouts/404.vue'),
        },

        // templateBuild: path.resolve(__dirname, '../../templates/index.build.html'),

        clientAppEnhanceFiles: path.resolve(__dirname, './client/clientAppEnhance.ts'),
        clientAppSetupFiles: path.resolve(__dirname, './client/clientAppSetup.ts'),

        extendsPage: (page: Page<DefaultThemePageData>) => {
            // save relative file path into page data to generate edit link
            page.data.filePathRelative = page.filePathRelative;
            // save title into route meta to generate navbar and sidebar
            page.routeMeta.title = page.title;
        },

        plugins: [
            ['@vuepress/active-header-links', resolveActiveHeaderLinksPluginOptions(themePlugins)],
            ['@vuepress/container', resolveContainerPluginOptions(themePlugins, localeOptions, 'danger')],
            ['@vuepress/container', resolveContainerPluginOptions(themePlugins, localeOptions, 'tip')],
            ['@vuepress/container', resolveContainerPluginOptions(themePlugins, localeOptions, 'warning')],
            ['@vuepress/git', resolveGitPluginOptions(themePlugins, localeOptions)],
            ['@vuepress/medium-zoom', resolveMediumZoomPluginOptions(themePlugins)],
            ['@vuepress/nprogress'],
            [
                '@vuepress/plugin-search',
                {
                    locales: {
                        '/': {
                            placeholder: 'Search',
                        },
                        '/fr/': {
                            placeholder: 'Rechercher',
                        },
                    },
                    isSearchable: (page: Page) => page.path !== '/',
                },
            ],
            ['@vuepress/theme-data', {themeData: localeOptions}],
        ],
    };
};

export default defaultTheme;
