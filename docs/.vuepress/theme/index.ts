import {Theme} from '@vuepress/core';
import {fs, path} from '@vuepress/utils';
import {assignDefaultLocaleOptions, DefaultThemeOptions, DefaultThemePageData, resolveContainerPluginOptions} from './node';
import {Page} from 'vuepress-webpack';

/* eslint-disable */
const {activeHeaderLinksPlugin} = require('@vuepress/plugin-active-header-links');
const {containerPlugin} = require('@vuepress/plugin-container');
const {gitPlugin} = require('@vuepress/plugin-git');
const {mediumZoomPlugin} = require('@vuepress/plugin-medium-zoom');
const {nprogressPlugin} = require('@vuepress/plugin-nprogress');
const {searchPlugin} = require('@vuepress/plugin-search');
const {themeDataPlugin} = require('@vuepress/plugin-theme-data');
/* eslint-enable */

export const defaultTheme = ({themePlugins = {}, ...localeOptions}: DefaultThemeOptions = {}): Theme => {
    assignDefaultLocaleOptions(localeOptions);

    return {
        name: 'vuepress-stockinlab',

        layouts: {
            Home: path.resolve(__dirname, './client/layouts/Home.vue'),
            Layout: path.resolve(__dirname, './client/layouts/Layout.vue'),
            404: path.resolve(__dirname, './client/layouts/404.vue'),
        },

        // templateBuild: path.resolve(__dirname, '../../templates/index.build.html'),

        alias: Object.fromEntries(
            fs
                .readdirSync(path.resolve(__dirname, './client/components'))
                .filter((file) => file.endsWith('.vue'))
                .map((file) => [
                    `@theme/${file}`,
                    path.resolve(__dirname, './client/components', file),
                ])
        ),

        clientConfigFile: path.resolve(__dirname, './client/config.ts'),

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
