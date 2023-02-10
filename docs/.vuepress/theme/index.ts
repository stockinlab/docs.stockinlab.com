import {Theme} from '@vuepress/core';
import {fs, getDirname, path} from '@vuepress/utils';
import {activeHeaderLinksPlugin} from '@vuepress/plugin-active-header-links';
import {containerPlugin} from '@vuepress/plugin-container';
import {gitPlugin} from '@vuepress/plugin-git';
import {mediumZoomPlugin} from '@vuepress/plugin-medium-zoom';
import {nprogressPlugin} from '@vuepress/plugin-nprogress';
import {searchPlugin} from '@vuepress/plugin-search';
import {themeDataPlugin} from '@vuepress/plugin-theme-data';
import {assignDefaultLocaleOptions, DefaultThemeOptions, DefaultThemePageData, resolveContainerPluginOptions} from './node';
import {Page} from 'vuepress-webpack';

const __dirname = getDirname(import.meta.url);

export const defaultTheme = ({themePlugins = {}, ...localeOptions}: DefaultThemeOptions = {}): Theme => {
    assignDefaultLocaleOptions(localeOptions);

    return {
        name: 'vuepress-stockinlab',

        layouts: {
            Home: path.resolve(__dirname, './theme/client/layouts/Home.vue'),
            Layout: path.resolve(__dirname, './theme/client/layouts/Layout.vue'),
            404: path.resolve(__dirname, './theme/client/layouts/404.vue'),
        },

        // templateBuild: path.resolve(__dirname, '../../templates/index.build.html'),

        alias: Object.fromEntries(
            fs
                .readdirSync(path.resolve(__dirname, './theme/client/components'))
                .filter((file) => file.endsWith('.vue'))
                .map((file) => [
                    `@theme/${file}`,
                    path.resolve(__dirname, './theme/client/components', file),
                ])
        ),

        clientConfigFile: path.resolve(__dirname, './theme/client/config.ts'),

        extendsPage: (page: Page<Partial<DefaultThemePageData>>) => {
            // save relative file path into page data to generate edit link
            page.data.filePathRelative = page.filePathRelative;
            // save title into route meta to generate navbar and sidebar
            page.routeMeta.title = page.title;
        },

        plugins: [
            // @vuepress/plugin-active-header-link
            activeHeaderLinksPlugin({
                headerLinkSelector: 'a.sidebar-item',
                headerAnchorSelector: '.header-anchor',
                // should greater than page transition duration
                delay: 300,
            }),

            // @vuepress/plugin-container
            containerPlugin(resolveContainerPluginOptions(localeOptions, 'tip')),
            containerPlugin(resolveContainerPluginOptions(localeOptions, 'warning')),
            containerPlugin(resolveContainerPluginOptions(localeOptions, 'danger')),

            // @vuepress/plugin-git
            gitPlugin({
                createdTime: false,
                updatedTime: localeOptions.lastUpdated !== false,
                contributors: localeOptions.contributors !== false,
            }),

            // @vuepress/plugin-medium-zoom
            mediumZoomPlugin({
                selector:
                    '.theme-default-content > img, .theme-default-content :not(a) > img',
                zoomOptions: {},
                // should greater than page transition duration
                delay: 300,
            }),

            // @vuepress/plugin-nprogress
            nprogressPlugin(),

            // @vuepress/plugin-search
            searchPlugin({
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/fr/': {
                        placeholder: 'Rechercher',
                    },
                },
                isSearchable: (page: Page) => page.path !== '/',
            }),

            // @vuepress/plugin-theme-data
            themeDataPlugin({themeData: localeOptions}),
        ],
    };
};

export default defaultTheme;
