<template>
    <div
        :class="containerClass"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <Sidebar
            :items="sidebarItems"
            :is-sidebar-open="isSidebarOpen"
            @toggle-sidebar="toggleSidebar"
        />

        <div class="flex-1 min-w-0 flex flex-col lg:ml-64">
            <Navbar
                v-if="shouldShowNavbar"
                @toggle-sidebar="toggleSidebar(true)"
            />

            <div class="sidebar-mask" @click="toggleSidebar(false)"/>

            <Transition
                name="fade-slide-y"
                mode="out-in"
                @before-enter="onBeforeEnter"
                @before-leave="onBeforeLeave"
            >
                <main class="flex container max-w-6xl mx-auto px-4 sm:px-6 py-8">
                    <div class="w-full xl:w-3/4">
                        <div class="prose max-w-none pb-4">
                            <Content/>
                        </div>

                        <PageMeta/>

                        <PageNav/>
                    </div>

                    <div class="hidden text-sm xl:block xl:w-1/4 ml-8">
                        <div class="flex flex-col justify-between overflow-y-auto sticky top-8">
                            <ContentTable class="mb-8"/>
                        </div>
                    </div>
                </main>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import {usePageFrontmatter} from '@vuepress/client';
import {computed, onMounted, onUnmounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useScrollPromise, useSidebarItems, useThemeLocaleData,} from '../composables';
import {DefaultThemePageFrontmatter} from '../../shared';
import ContentTable from '../components/ContentTable.vue';
import Navbar from '../components/Navbar.vue';
import PageMeta from '../components/PageMeta.vue';
import PageNav from '../components/PageNav.vue';
import Sidebar from '../components/Sidebar.vue';

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
const onTouchStart = (e: TouchEvent): void => {
    touchStart.x = e.changedTouches[0].clientX;
    touchStart.y = e.changedTouches[0].clientY;
};
const onTouchEnd = (e: TouchEvent): void => {
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
