<template>
    <header class="navbar bg-white shadow h-16">
        <div class="container flex items-center max-w-8xl mx-auto px-6 md:px-8 py-4 h-full">
            <div class="flex lg:w-56 mr-4 lg:mr-8">
                <RouterLink :to="$localePath" aria-label="StockInLab" class="inline-flex items-center text-gray-800 duration-200 focus:outline-none focus:bg-gray-100 hover:text-teal-500 focus:text-teal-500 text-2xl rounded-md home-link">
                    <img src="/assets/images/logo.svg" class="h-10 rounded-md" alt="">
                    <span class="hidden lg:block px-2">StockInLab</span>
                </RouterLink>
            </div>

            <div class="flex flex-1 items-center">
                <SearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
                <NavLinks class="can-hide"/>
            </div>

            <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
        </div>
    </header>
</template>

<script>
import NavLinks from '@theme/components/NavLinks';
import SearchBox from '@theme/components/SearchBox';
import SidebarButton from '@theme/components/SidebarButton';

export default {
    name: 'Navbar',

    components: {
        NavLinks,
        SearchBox,
        SidebarButton,
    },

    data() {
        return {
            linksWrapMaxWidth: null,
        };
    },

    mounted() {
        const MOBILE_DESKTOP_BREAKPOINT = 719;
        const NAVBAR_VERTICAL_PADDING = 0;

        const handleLinksWrapWidth = () => {
            if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
                this.linksWrapMaxWidth = null;
            } else {
                this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
                    - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0);
            }
        };

        handleLinksWrapWidth();

        window.addEventListener('resize', handleLinksWrapWidth, false);
    },
};
</script>
