<template>
    <nav v-if="navbarLinks.length" class="nav-links" v-bind="$attrs">
        <div v-for="item in navbarLinks" :key="item.link" class="nav-item">
            <NavbarLink :item="item"/>
        </div>
    </nav>
</template>

<script setup lang="ts">
import type {ComputedRef} from 'vue';
import {computed} from 'vue';
import {isString} from '@vuepress/shared';
import type {NavbarGroup, NavbarItem, ResolvedNavbarItem} from '../../shared';
import {useNavLink, useThemeLocaleData} from '../composables';
import NavbarLink from './NavbarLink.vue';

const resolveNavbarItem = (item: NavbarItem | NavbarGroup | string): ResolvedNavbarItem => {
    if (isString(item)) {
        return useNavLink(item);
    }

    if ((item as NavbarGroup).children) {
        return {
            ...item,
            children: (item as NavbarGroup).children.map(resolveNavbarItem),
        };
    }

    return item as ResolvedNavbarItem;
};

const useNavbarConfig = (): ComputedRef<ResolvedNavbarItem[]> => {
    const themeLocale = useThemeLocaleData();
    return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
};

const navbarConfig = useNavbarConfig();

const navbarLinks = computed(() => [
    ...navbarConfig.value,
]);
</script>

<style lang="scss">
.nav-links .nav-item {
    @apply relative inline-block;

    &:first-child {
        @apply ml-0;
    }
}

@media (min-width: 640px) {
    .nav-links {
        .nav-item,
        .repo-link {
            @apply ml-2;
        }
    }
}
</style>
