<template>
    <header class="navbar bg-white shadow h-16">
        <div class="container flex items-center max-w-8xl mx-auto px-6 md:px-8 py-4 h-full">
            <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

            <RouterLink :to="$localePath" class="block lg:hidden lg:w-56 mr-8 home-link">
                <img src="/assets/images/small_logo.svg" class="h-10" alt="StockInLab small logo">
            </RouterLink>
            <RouterLink :to="$localePath" class="hidden lg:block lg:w-56 mr-8 home-link">
                <img src="/assets/images/logo.svg" class="h-10" alt="StockInLab logo">
            </RouterLink>

            <div class="flex flex-1 items-center">
                <SearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
                <NavLinks class="can-hide"/>
            </div>
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
