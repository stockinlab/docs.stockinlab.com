<template>
    <aside
        class="fixed z-30 inset-y-0 left-0 w-64 p-8 bg-cool-gray-50 border-r border-gray-200 overflow-auto lg:translate-x-0 ease-in duration-200"
        :class="{'-translate-x-full': !isSidebarOpen}"
    >
        <button
            id="sidebar-button"
            class="absolute z-50 text-gray-600 lg:hidden focus:outline-none"
            style="top: 1rem; right: 1rem;"
            aria-label="Sidebar menu"
            @click="emit('toggle-sidebar', false)"
        >
            <svg class="h-6 w-6">
                <use href="/assets/images/sprite.svg#close"/>
            </svg>
            <span class="sr-only">{{ themeLocale.toggleSidebar }}</span>
        </button>

        <div class="-mx-3">
            <RouterLink :to="`/`" aria-label="StockInLab" class="px-3 inline-flex items-center text-gray-800 duration-200 focus:outline-none focus:bg-gray-100 hover:text-teal-500 focus:text-teal-500 text-2xl rounded-md home-link">
                <img src="/assets/images/logo.svg" class="h-10 rounded-md mr-2" alt="StockInLab logo">
                StockInLab
            </RouterLink>
        </div>

        <nav>
            <div v-for="(item, index) in sidebarItems" :key="index" class="mt-8">
                <h3 v-if="item.children.length > 0" class="flex items-center text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {{ item.text }}
                </h3>

                <div class="mt-2 -mx-3 space-y-1">
                    <SidebarLink
                        v-for="(child, indexChild) in item.children"
                        :key="`${index}${indexChild}`"
                        :item="child"
                    />
                </div>
            </div>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';
import {useSidebarItems, useThemeLocaleData} from '../composables';
import SidebarLink from './SidebarLink.vue';

defineProps({
    isSidebarOpen: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const emit = defineEmits(['toggle-sidebar']);

const sidebarItems = useSidebarItems();
const themeLocale = useThemeLocaleData();
</script>
