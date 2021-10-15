<template>
    <RouterLink :to="item.link" :class="containerClass">
        <span :class="spanClass">
            <svg :class="svgClass">
                <use href="/assets/images/sprite.svg#chevron-right"/>
            </svg>
            <span class="truncate">{{ item.text }}</span>
        </span>
    </RouterLink>
</template>

<script setup lang="ts">
import {computed, PropType, ref, toRef, watch} from 'vue';
import {RouteLocationNormalizedLoaded, useRoute} from 'vue-router';
import {ResolvedSidebarItem} from '../../shared';

const normalizePath = (path: string): string => {
    return decodeURI(path)
        .replace(/#.*$/, '')
        .replace(/(index)?\.(md|html)$/, '');
};

const isActiveLink = (route: RouteLocationNormalizedLoaded, link?: string): boolean => {
    if (link === undefined) {
        return false;
    }

    if (route.hash === link) {
        return true;
    }

    const currentPath = normalizePath(route.path);
    const targetPath = normalizePath(link);

    return currentPath === targetPath;
};

const isActiveItem = (route: RouteLocationNormalizedLoaded, item: ResolvedSidebarItem): boolean => {
    if (isActiveLink(route, item.link)) {
        return true;
    }

    if (item.children) {
        return item.children.some((child) => isActiveItem(route, child));
    }

    return false;
};

// eslint-disable-next-line no-undef
const props = defineProps({
    item: {
        type: Object as PropType<ResolvedSidebarItem>,
        required: true,
    },
});

const item = toRef<ResolvedSidebarItem>(props, 'item');
const linkIsActive = ref<boolean>(false);

// classes
const containerClass = computed(() => [
    {
        'group block px-3 py-2 rounded-lg text-sm font-medium': true,
        'bg-teal-100 text-teal-900': linkIsActive.value,
        'text-gray-900 hover:bg-cool-gray-100': !linkIsActive.value,
    },
]);
const spanClass = computed(() => [
    {
        'flex items-center': true,
        'group-hover:translate-r-5px duration-100': !linkIsActive.value,
    },
]);
const svgClass = computed(() => [
    {
        'h-5 w-5 mr-1 flex-shrink-0': true,
        'text-teal-500': linkIsActive.value,
        'text-cool-gray-400': !linkIsActive.value,
    },
]);

const route = useRoute();

watch(
    () => route.path,
    () => {
        linkIsActive.value = isActiveItem(route, item.value);
    },
    {immediate: true}
);

watch(item, () => {linkIsActive.value = isActiveItem(route, item.value);});
</script>
