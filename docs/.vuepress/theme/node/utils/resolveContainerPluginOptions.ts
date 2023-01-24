import type {LocaleData} from '@vuepress/shared';
import type {ContainerPluginOptions} from '@vuepress/plugin-container';
import type {DefaultThemeData} from '../../shared';

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For custom containers default title
 */
export const resolveContainerPluginOptions = (
    localeOptions: DefaultThemeData,
    type: 'tip' | 'warning' | 'danger'
): ContainerPluginOptions => {
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
