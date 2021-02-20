<template>
    <div :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

        <div class="sidebar-mask" @click="toggleSidebar(false)"/>

        <div class="relative container max-w-8xl mx-auto px-6 md:px-8 py-12">
            <div class="flex flex-col lg:flex-row">
                <Sidebar :items="sidebarItems" class="lg:hidden" @toggle-sidebar="toggleSidebar"/>

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

<script>
import {resolveSidebarItems} from '../util';
import Navbar from '@theme/components/Navbar';
import Sidebar from '@theme/components/Sidebar.vue';

export default {
    name: 'Layout',

    components: {
        Navbar,
        Sidebar,
    },

    data() {
        return {
            isSidebarOpen: false,
        };
    },

    computed: {
        shouldShowNavbar() {
            const {themeConfig} = this.$site;
            const {frontmatter} = this.$page;

            if (frontmatter.navbar === false || themeConfig.navbar === false) {
                return false;
            }

            return (
                this.$title
                || themeConfig.logo
                || themeConfig.repo
                || themeConfig.nav
                || this.$themeLocaleConfig.nav
            );
        },

        shouldShowSidebar() {
            const {frontmatter} = this.$page;

            return (
                !frontmatter.home
                && frontmatter.sidebar !== false
                && this.sidebarItems.length
            );
        },

        sidebarItems() {
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            );
        },

        pageClasses() {
            const userPageClass = this.$page.frontmatter.pageClass;

            return [
                {
                    'no-navbar': !this.shouldShowNavbar,
                    'sidebar-open': this.isSidebarOpen,
                    'no-sidebar': !this.shouldShowSidebar
                },
                userPageClass,
            ];
        }
    },

    methods: {
        toggleSidebar(to) {
            this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
            this.$emit('toggle-sidebar', this.isSidebarOpen);
        },

        // side swipe
        onTouchStart(e) {
            this.touchStart = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY,
            };
        },

        onTouchEnd(e) {
            const dx = e.changedTouches[0].clientX - this.touchStart.x;
            const dy = e.changedTouches[0].clientY - this.touchStart.y;

            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                if (dx > 0 && this.touchStart.x <= 80) {
                    this.toggleSidebar(true);
                } else {
                    this.toggleSidebar(false);
                }
            }
        },
    },

    mounted() {
        this.$router.afterEach(() => {
            this.isSidebarOpen = false;
        });
    },
};
</script>
