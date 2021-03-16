<template>
    <header class="relative navbar bg-white shadow h-16">
        <div class="container flex items-center max-w-6xl mx-auto px-4 sm:px-6 py-4 h-full">
            <button class="text-gray-600 lg:hidden focus:outline-none mr-2" @click="$emit('toggle-sidebar')">
                <svg fill="none" viewBox="0 0 24 24" class="h-8 w-8 text-gray-500">
                    <path d="M4 6h16M4 12h16M4 18h7" stroke-linecap="round" stroke-width="2" stroke="currentColor"></path>
                </svg>
            </button>

            <SearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>

            <NavLinks class="can-hide"/>

            <NavbarButton @toggle-navbar="$emit('toggle-navbar')"/>
        </div>

        <div class="hidden navbar-small z-50 absolute top-16 p-6 bg-white inset-x-0 shadow p-4 sm:px-6 border-t border-gray-200 transition duration-1000 ease-in">
            <SmallNavLinks/>
        </div>
    </header>
</template>

<script>
import NavLinks from '@theme/components/NavLinks';
import SearchBox from '@theme/components/SearchBox';
import NavbarButton from '@theme/components/NavbarButton';
import SmallNavLinks from '@theme/components/SmallNavLinks';

export default {
    name: 'Navbar',

    components: {
        NavLinks,
        SearchBox,
        NavbarButton,
        SmallNavLinks,
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

<style scoped>
.navbar-open .navbar-small {
    @apply block;
}
</style>
