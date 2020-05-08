<template>
    <!--    <div-->
    <!--        class="theme-container"-->
    <!--        :class="pageClasses"-->
    <!--        @touchstart="onTouchStart"-->
    <!--        @touchend="onTouchEnd"-->
    <!--    >-->
    <!--        <Navbar-->
    <!--            v-if="shouldShowNavbar"-->
    <!--            @toggle-sidebar="toggleSidebar"-->
    <!--        />-->

    <!--        <div-->
    <!--            class="sidebar-mask"-->
    <!--            @click="toggleSidebar(false)"-->
    <!--        />-->

    <!--        <Sidebar-->
    <!--            :items="sidebarItems"-->
    <!--            @toggle-sidebar="toggleSidebar"-->
    <!--        >-->
    <!--            <template #top>-->
    <!--                <slot name="sidebar-top" />-->
    <!--            </template>-->
    <!--            <template #bottom>-->
    <!--                <slot name="sidebar-bottom" />-->
    <!--            </template>-->
    <!--        </Sidebar>-->

    <!--        <Home v-if="$page.frontmatter.home" />-->

    <!--        <Page-->
    <!--            v-else-->
    <!--            :sidebar-items="sidebarItems"-->
    <!--        >-->
    <!--            <template #top>-->
    <!--                <slot name="page-top" />-->
    <!--            </template>-->
    <!--            <template #bottom>-->
    <!--                <slot name="page-bottom" />-->
    <!--            </template>-->
    <!--        </Page>-->
    <!--    </div>-->
    <div
        class=""
        :class="pageClasses"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <Navbar
            v-if="shouldShowNavbar"
            @toggle-sidebar="toggleSidebar"
        />

        <div
            class="sidebar-mask"
            @click="toggleSidebar(false)"
        />

        <div class="w-full flex-auto py-8">
            <div class="container max-w-8xl mx-auto px-6 md:px-8 py-4">
                <div class="flex flex-col lg:flex-row">
                    <aside class="hidden lg:block lg:w-64 mr-8">
                        <nav>
                            <div v-for="(item, index) in sidebarItems" :key="index" class="mb-6">
                                <h3 class="text-gray-900 text-uppercase font-bold text-sm px-4 mb-2">{{ item.title }}</h3>

                                <ul>
                                    <li v-for="(child, indexChild) in item.children" :key="`${index}${indexChild}`">
                                        <sidebar-link :item="child"/>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </aside>

                    <main class="flex-1 flex">
                        <div class="lg:w-2/3 xl:w-3/4 py-4 px-6 md:py-0 md:px-0 documentation-content">
                            <Content class=""/>
                            <!--                        <Content class="xl:w-3/4 bg-white py-4 px-6 md:py-6 md:px-8 lg:p-8 sm:shadow sm:rounded-lg"/>-->
                            <PageEdit/>

                            <PageNav v-bind="{ sidebarItems }"/>
                        </div>

                        <div class="hidden text-sm px-8 lg:block lg:w-1/3 xl:w-1/4">
                            <div class="flex flex-col justify-between overflow-y-auto sticky top-16 max-h-(screen-16) pt-12 pb-4 -mt-12">
                                <div class="mb-8">
                                    <content-table/>
                                </div>
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
// import Sidebar from '@theme/components/Sidebar.vue';
import ContentTable from '@theme/components/ContentTable';
import Navbar from '@theme/components/Navbar.vue';
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import SidebarLink from '@theme/components/SidebarLink';
import {resolveSidebarItems} from '../util';

export default {
    name: 'Layout',

    components: {
        // Home,
        // Page,
        // Sidebar,
        ContentTable,
        Navbar,
        PageEdit,
        PageNav,
        SidebarLink,
    },

    data() {
        return {
            isSidebarOpen: false
        }
    },

    computed: {
        shouldShowNavbar() {
            const {themeConfig} = this.$site
            const {frontmatter} = this.$page
            if (
                frontmatter.navbar === false
                || themeConfig.navbar === false) {
                return false
            }
            return (
                this.$title
                || themeConfig.logo
                || themeConfig.repo
                || themeConfig.nav
                || this.$themeLocaleConfig.nav
            )
        },

        shouldShowSidebar() {
            const {frontmatter} = this.$page
            return (
                !frontmatter.home
                && frontmatter.sidebar !== false
                && this.sidebarItems.length
            )
        },

        sidebarItems() {
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            )
        },

        pageClasses() {
            const userPageClass = this.$page.frontmatter.pageClass
            return [
                {
                    'no-navbar': !this.shouldShowNavbar,
                    'sidebar-open': this.isSidebarOpen,
                    'no-sidebar': !this.shouldShowSidebar
                },
                userPageClass
            ]
        }
    },

    mounted() {
        this.$router.afterEach(() => {
            this.isSidebarOpen = false
        })
    },

    methods: {
        toggleSidebar(to) {
            this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
            this.$emit('toggle-sidebar', this.isSidebarOpen)
        },

        // side swipe
        onTouchStart(e) {
            this.touchStart = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY
            }
        },

        onTouchEnd(e) {
            const dx = e.changedTouches[0].clientX - this.touchStart.x
            const dy = e.changedTouches[0].clientY - this.touchStart.y
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                if (dx > 0 && this.touchStart.x <= 80) {
                    this.toggleSidebar(true)
                } else {
                    this.toggleSidebar(false)
                }
            }
        }
    }
}
</script>
