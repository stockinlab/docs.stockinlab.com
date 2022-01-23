import type {LocaleData} from '@vuepress/shared';
import type {ContainerPluginOptions} from '@vuepress/plugin-container';
import type {DefaultThemeData, DefaultThemePluginsOptions} from '../../shared';

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For custom containers default title
 */
export const resolveContainerPluginOptions = (
    themePlugins: DefaultThemePluginsOptions,
    localeOptions: DefaultThemeData,
    type: 'tip' | 'warning' | 'danger'
): ContainerPluginOptions | boolean => {
    if (themePlugins?.container?.[type] === false) {
        return false;
    }

    const locales = Object.entries(localeOptions.locales || {}).reduce(
        (result: LocaleData, [key, value]) => {
            result[key] = {
                defaultInfo: value?.[type] ?? localeOptions[type],
            };

            return result;
        },
        {}
    );

    const icon = {
        danger: 'error',
        tip: 'bulb',
        warning: 'warning',
    };

    return {
        type,
        locales,
        before: () => `<div class="alert alert-${type}"><div class="alert-title"><svg class="h-8 w-8"><use href="/assets/images/icons.svg#${icon[type]}"/></svg></div><div class="alert-content">\n`,
        after: () => '</div></div>\n',
    };
};

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For details container
 */
export const resolveContainerPluginOptionsForDetails = (
    themePlugins: DefaultThemePluginsOptions
): ContainerPluginOptions | boolean => {
    if (themePlugins?.container?.details === false) {
        return false;
    }

    return {
        type: 'details',
        before: (info) =>
            `<details class="custom-container details">${
                info ? `<summary>${info}</summary>` : ''
            }\n`,
        after: () => '</details>\n',
    };
};

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For code-group container
 */
export const resolveContainerPluginOptionsForCodeGroup = (
    themePlugins: DefaultThemePluginsOptions
): ContainerPluginOptions | boolean => {
    if (themePlugins?.container?.codeGroup === false) {
        return false;
    }

    return {
        type: 'code-group',
        before: () => '<CodeGroup>\n',
        after: () => '</CodeGroup>\n',
    };
};

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For code-group-item block
 */
export const resolveContainerPluginOptionsForCodeGroupItem = (
    themePlugins: DefaultThemePluginsOptions
): ContainerPluginOptions | boolean => {
    if (themePlugins?.container?.codeGroupItem === false) {
        return false;
    }

    return {
        type: 'code-group-item',
        before: (info) => `<CodeGroupItem title="${info}">\n`,
        after: () => '</CodeGroupItem>\n',
    };
};
