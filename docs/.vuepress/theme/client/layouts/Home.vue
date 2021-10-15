<template>
    <div
        :class="containerClass"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

        <div class="relative container max-w-8xl mx-auto px-6 md:px-8 py-12">
            <div class="flex flex-col lg:flex-row">

                <main class="flex-1 flex flex-col">
                    <div class="text-center flex flex-col justify-center">
                        <img src="/assets/images/logo.svg" class="mb-12 rounded-md w-64 h-64 mx-auto" alt="">

                        <h1 class="text-cool-gray-700 font-bold text-4xl md:text-5xl max-w-2xl text-center mx-auto leading-tight mb-8">
                            StockInLab Documentation
                        </h1>

                        <div class="flex justify-center">
                            <Router-Link to="/general" class="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 rounded-md shadow">
                                Get Started
                                <svg class="ml-2 -mr-1 mr-2 h-5 w-5">
                                    <use href="/assets/images/sprite.svg#arrow-right" class="text-white"/>
                                </svg>
                            </Router-Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {usePageData, usePageFrontmatter} from '@vuepress/client';
import {computed, onMounted, onUnmounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useScrollPromise, useSidebarItems, useThemeLocaleData,} from '../composables';
import {DefaultThemePageFrontmatter} from '../../shared';
import Navbar from '../components/Navbar.vue';

const page = usePageData();
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();
const themeLocale = useThemeLocaleData();

// navbar
const shouldShowNavbar = computed(
    () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
);

// sidebar
const sidebarItems = useSidebarItems();
const isSidebarOpen = ref(false);
const toggleSidebar = (to?: boolean): void => {
    isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value;
};
const touchStart = {x: 0, y: 0};
const onTouchStart = (e): void => {
    touchStart.x = e.changedTouches[0].clientX;
    touchStart.y = e.changedTouches[0].clientY;
};
const onTouchEnd = (e): void => {
    const dx = e.changedTouches[0].clientX - touchStart.x;
    const dy = e.changedTouches[0].clientY - touchStart.y;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
            toggleSidebar(true);
        } else {
            toggleSidebar(false);
        }
    }
};

// classes
const containerClass = computed(() => [
    {
        'no-navbar': !shouldShowNavbar.value,
        'no-sidebar': !sidebarItems.value.length,
        'sidebar-open': isSidebarOpen.value,
    },
    frontmatter.value.pageClass,
]);

// close sidebar after navigation
let unregisterRouterHook;
onMounted(() => {
    const router = useRouter();
    unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
    });
});
onUnmounted(() => {
    unregisterRouterHook();
});

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;
</script>
