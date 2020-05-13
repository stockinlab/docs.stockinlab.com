<template>
    <div :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

        <div class="sidebar-mask" @click="toggleSidebar(false)"/>

        <div class="w-full flex-auto py-8 full-content">
            <div class="container max-w-8xl mx-auto px-6 md:px-8 py-4">
                <div class="flex flex-col lg:flex-row">
                    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar"/>

                    <main class="flex-1 flex">
                        <div class="lg:w-2/3 xl:w-3/4 documentation-block">
                            <Content class="documentation-content pb-8"/>

                            <PageEdit/>

                            <PageNav v-bind="{ sidebarItems }"/>
                        </div>

                        <div class="hidden text-sm lg:block lg:w-1/3 xl:w-1/4 ml-8">
                            <div class="flex flex-col justify-between overflow-y-auto sticky top-8">
                                <ContentTable class="mb-8"/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Home from '@theme/components/Home.vue';
// import Page from '@theme/components/Page.vue';
import {resolveSidebarItems} from '../util';
import ContentTable from '@theme/components/ContentTable';
import Navbar from '@theme/components/Navbar';
import PageEdit from '@theme/components/PageEdit';
import PageNav from '@theme/components/PageNav';
import Sidebar from '@theme/components/Sidebar.vue';

export default {
    name: 'Layout',

    components: {
        // Home,
        // Page,
        ContentTable,
        Navbar,
        PageEdit,
        PageNav,
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
