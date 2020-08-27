<template>
    <div v-if="prev || next" class="py-4 border-t border-gray-200">
        <div class="float-left mr-4">
            <p v-if="prev">
                ←
                <a v-if="prev.type === 'external'" class="prev" :href="prev.path" target="_blank" rel="noopener noreferrer">
                  {{ prev.title || prev.path }}
                  <OutboundLink/>
                </a>

                <RouterLink v-else :to="prev.path" class="text-teal-500 font-medium no-underline hover:underline focus:underline">
                  {{ prev.title || prev.path }}
                </RouterLink>
            </p>
        </div>

        <div class="float-right">
            <p v-if="next" class="next">
                <a v-if="next.type === 'external'" :href="next.path" target="_blank" rel="noopener noreferrer">
                  {{ next.title || next.path }}
                  <OutboundLink/>
                </a>

                <RouterLink v-else :to="next.path" class="text-teal-500 font-medium no-underline hover:underline focus:underline">
                  {{ next.title || next.path }}
                </RouterLink>
                →
            </p>
        </div>
    </div>
</template>

<script>
import {resolvePage} from '@theme/util';
import isString from 'lodash/isString';
import isNil from 'lodash/isNil';

export default {
    name: 'PageNav',

    props: ['sidebarItems'],

    computed: {
        prev() {
            return resolvePageLink(LINK_TYPES.PREV, this);
        },

        next() {
            return resolvePageLink(LINK_TYPES.NEXT, this);
        },
    },
};

function resolvePrev(page, items) {
    return find(page, items, -1);
}

function resolveNext(page, items) {
    return find(page, items, 1);
}

const LINK_TYPES = {
    NEXT: {
        resolveLink: resolveNext,
        getThemeLinkConfig: ({nextLinks}) => nextLinks,
        getPageLinkConfig: ({frontmatter}) => frontmatter.next,
    },
    PREV: {
        resolveLink: resolvePrev,
        getThemeLinkConfig: ({prevLinks}) => prevLinks,
        getPageLinkConfig: ({frontmatter}) => frontmatter.prev,
    },
};

function resolvePageLink(
    linkType,
    {$themeConfig, $page, $route, $site, sidebarItems}
) {
    const {resolveLink, getThemeLinkConfig, getPageLinkConfig} = linkType;

    // Get link config from theme
    const themeLinkConfig = getThemeLinkConfig($themeConfig);

    // Get link config from current page
    const pageLinkConfig = getPageLinkConfig($page);

    // Page link config will overwrite global theme link config if defined
    const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig;

    if (link === false) {
        return;
    } else if (isString(link)) {
        return resolvePage($site.pages, link, $route.path);
    } else {
        return resolveLink($page, sidebarItems);
    }
}

function find(page, items, offset) {
    const res = [];
    flatten(items, res);

    for (let i = 0; i < res.length; i++) {
        const cur = res[i];

        if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
            return res[i + offset];
        }
    }
}

function flatten(items, res) {
    for (let i = 0, l = items.length; i < l; i++) {
        if (items[i].type === 'group') {
            flatten(items[i].children || [], res);
        } else {
            res.push(items[i]);
        }
    }
}
</script>
