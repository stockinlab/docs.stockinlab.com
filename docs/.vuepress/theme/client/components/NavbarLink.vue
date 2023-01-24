<template>
    <RouterLink
        v-if="isRouterLink"
        :class="linkClass"
        :to="item.link"
        :aria-label="linkAriaLabel"
        v-bind="$attrs"
    >
        {{ item.text }}
    </RouterLink>
    <a
        v-else
        :class="linkClass"
        :href="item.link"
        :rel="linkRel"
        :target="linkTarget"
        :aria-label="linkAriaLabel"
        v-bind="$attrs"
    >
        {{ item.text }}
        <ExternalLinkIcon v-if="isBlankTarget"/>
    </a>
</template>

<script setup lang="ts">
import type {PropType} from 'vue';
import {computed, defineProps, toRefs} from 'vue';
import {useRoute} from 'vue-router';
import {useSiteData} from '@vuepress/client';
import {isLinkHttp, isLinkMailto, isLinkTel} from '@vuepress/shared';
import {NavLink} from '../../shared';
import ExternalLinkIcon from './global/ExternalLinkIcon.vue';

const props = defineProps({
    item: {
        type: Object as PropType<NavLink>,
        required: true,
    },
});

const route = useRoute();
const site = useSiteData();
const {item} = toRefs(props);

// if the link has http protocol
const hasHttpProtocol = computed(() => isLinkHttp(item.value.link));
// if the link has non-http protocol
const hasNonHttpProtocal = computed(
    () => isLinkMailto(item.value.link) || isLinkTel(item.value.link)
);

// resolve the `target` attr
const linkTarget = computed(() => {
    if (hasNonHttpProtocal.value) {
        return undefined;
    }

    if (item.value.target) {
        return item.value.target;
    }

    if (hasHttpProtocol.value) {
        return '_blank';
    }

    return undefined;
});

// if the `target` attr is '_blank'
const isBlankTarget = computed(() => linkTarget.value === '_blank');
// is `<RouterLink>` or not
const isRouterLink = computed(
    () =>
        !hasHttpProtocol.value &&
        !hasNonHttpProtocal.value &&
        !isBlankTarget.value
);

// resolve the `rel` attr
const linkRel = computed(() => {
    if (hasNonHttpProtocal.value) {
        return undefined;
    }

    if (item.value.rel) {
        return item.value.rel;
    }

    if (isBlankTarget.value) {
        return 'noopener noreferrer';
    }

    return undefined;
});
// resolve the `aria-label` attr
const linkAriaLabel = computed(
    () => item.value.ariaLabel || item.value.text
);

// should be active when current route is a subpath of this link
const shouldBeActiveInSubpath = computed(() => {
    const localeKeys = Object.keys(site.value.locales);

    if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
    }

    return item.value.link !== '/';
});
// if this link is active in subpath
const isActiveInSubpath = computed(() => {
    if (!isRouterLink.value || !shouldBeActiveInSubpath.value) {
        return false;
    }

    return route.path.startsWith(item.value.link);
});

const linkClass = computed(() => {
    return {
        'block rounded px-4 py-1 truncate focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-teal-500': true,
        'font-semibold bg-teal-500 text-white': isActiveInSubpath.value,
        'text-gray-600 font-light hover:bg-gray-100 hover:text-teal-500 focus:text-teal-500': !isActiveInSubpath.value,
    };
});
</script>
