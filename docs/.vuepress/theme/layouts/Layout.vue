<template>
    <div :class="pageClasses">
        <Sidebar
            :items="sidebarItems"
            :isSidebarOpen="isSidebarOpen"
            @toggle-sidebar="toggleSidebar"
        />

        <div class="flex-1 min-w-0 flex flex-col lg:ml-64">
            <Navbar
                v-if="shouldShowNavbar"
                @toggle-sidebar="toggleSidebar"
                @toggle-navbar="toggleNavbar"
            />

            <div class="sidebar-mask" @click="toggleNavbar(false)"/>

            <main class="flex container max-w-6xl mx-auto px-4 sm:px-6 py-8">
                <div class="xl:w-3/4">
                    <Content class="prose max-w-none pb-4"/>

                    <PageEdit/>

                    <PageNav v-bind="{ sidebarItems }"/>
                </div>

                <div class="hidden text-sm xl:block xl:w-1/4 ml-8">
                    <div class="flex flex-col justify-between overflow-y-auto sticky top-8">
                        <ContentTable class="mb-8"/>
                    </div>
                </div>
            </main>
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
            isNavbarOpen: false,
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
                    'navbar-open': this.isNavbarOpen,
                    'no-sidebar': !this.shouldShowSidebar
                },
                userPageClass,
            ];
        }
    },

    methods: {
        toggleNavbar(to) {
            this.isNavbarOpen = typeof to === 'boolean' ? to : !this.isNavbarOpen;
            this.$emit('toggle-navbar', this.isSidebarOpen);
        },

        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
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
                    this.toggleNavbar(true);
                } else {
                    this.toggleNavbar(false);
                }
            }
        },
    },

    mounted() {
        this.$router.afterEach(() => {
            this.isSidebarOpen = false;
            this.isNavbarOpen = false;
        });
    },
};
</script>
