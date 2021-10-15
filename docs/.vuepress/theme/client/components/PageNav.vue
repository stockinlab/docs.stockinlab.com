<template>
    <div v-if="prevNavLink || nextNavLink" class="py-4 border-t border-gray-200">
        <div class="float-left mr-4">
            <p v-if="prevNavLink">
                ←
                <a v-if="prevNavLink.type === 'external'" class="prev" :href="prevNavLink.link" target="_blank" rel="noopener noreferrer">
                    {{ prevNavLink.text || prevNavLink.link }}
                    <OutboundLink/>
                </a>

                <RouterLink v-else :to="prevNavLink.link" class="text-teal-500 font-medium no-underline hover:underline focus:underline">
                    {{ prevNavLink.text || prevNavLink.link }}
                </RouterLink>
            </p>
        </div>

        <div class="float-right">
            <p v-if="nextNavLink" class="next">
                <a v-if="nextNavLink.type === 'external'" :href="nextNavLink.link" target="_blank" rel="noopener noreferrer">
                    {{ nextNavLink.text || nextNavLink.link }}
                    <OutboundLink/>
                </a>

                <RouterLink v-else :to="nextNavLink.link" class="text-teal-500 font-medium no-underline hover:underline focus:underline">
                    {{ nextNavLink.text || nextNavLink.link }}
                </RouterLink>
                →
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {usePageFrontmatter} from '@vuepress/client';
import {isPlainObject, isString} from '@vuepress/shared';
import type {NavLink as NavLinkType, ResolvedSidebarItem} from '../../shared';
import {useNavLink, useSidebarItems} from '../composables';
// import NavLink from './NavLink.vue';

/**
 * Resolve `prev` or `next` config from frontmatter
 */
const resolveFromFrontmatterConfig = (conf: unknown): null | false | NavLinkType => {
    if (conf === false) {
        return null;
    }

    if (isString(conf)) {
        return useNavLink(conf);
    }

    if (isPlainObject<NavLinkType>(conf)) {
        return conf;
    }

    return false;
};

/**
 * Resolve `prev` or `next` config from sidebar items
 */
const resolveFromSidebarItems = (sidebarItems: ResolvedSidebarItem[], currentPath: string, offset: number): null | NavLinkType => {
    const index = sidebarItems.findIndex((item) => item.link === currentPath);

    if (index !== -1) {
        const targetItem = sidebarItems[index + offset];

        if (!targetItem?.link) {
            return null;
        }

        return targetItem as NavLinkType;
    }

    for (const item of sidebarItems) {
        if (item.children) {
            const childResult = resolveFromSidebarItems(
                item.children,
                currentPath,
                offset
            );

            if (childResult) {
                return childResult;
            }
        }
    }

    return null;
};

const frontmatter = usePageFrontmatter();
const sidebarItems = useSidebarItems();
const route = useRoute();

const prevNavLink = computed(() => {
    const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);

    if (prevConfig !== false) {
        return prevConfig;
    }

    return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
});

const nextNavLink = computed(() => {
    const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);

    if (nextConfig !== false) {
        return nextConfig;
    }

    return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
});
</script>
