<template>
    <header ref="navbar" class="relative navbar bg-white shadow h-16" :class="{'navbar-open': isNavbarOpen}">
        <div class="container flex items-center max-w-6xl mx-auto px-4 sm:px-6 py-4 h-full">
            <button v-if="route.path !== '/'" class="text-gray-600 lg:hidden focus:outline-none mr-2" @click="emit('toggle-sidebar')">
                <svg fill="none" viewBox="0 0 24 24" class="h-8 w-8 text-gray-500">
                    <path
                        d="M4 6h16M4 12h16M4 18h7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                    />
                </svg>
            </button>

            <CustomSearchBox/>

            <NavbarLinks
                class="can-hide hidden md:flex md:ml-4 lg:ml-8 items-center justify-end"
            />

            <NavbarButton
                v-if="route.path !== '/'"
                :is-navbar-open="isNavbarOpen"
                @toggle-navbar="toggleNavbar"
            />
        </div>

        <div
            v-if="route.path !== '/'"
            :class="{
                'navbar-small z-50 absolute top-16 p-6 bg-white inset-x-0 shadow p-4 sm:px-6 border-t border-gray-200 transition duration-1000 ease-in': true,
                'hidden': !isNavbarOpen,
            }"
        >
            <NavbarLinks class="space-y-2"/>
        </div>
    </header>
</template>

<script setup lang="ts">
import {defineEmits, onMounted, onUnmounted, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import NavbarLinks from './NavbarLinks.vue';
import CustomSearchBox from './CustomSearchBox.vue';
import NavbarButton from './NavbarButton.vue';
// import SmallNavLinks from './SmallNavLinks.vue';

const navbar = ref<HTMLElement | null>(null);
const route = useRoute();

const emit = defineEmits(['toggle-sidebar']);

// navbar
const isNavbarOpen = ref(false);
const toggleNavbar = (to?: boolean): void => {
    isNavbarOpen.value = typeof to === 'boolean' ? to : !isNavbarOpen.value;
};

// close sidebar after navigation
let unregisterRouterHook;
onMounted(() => {
    const router = useRouter();

    unregisterRouterHook = router.afterEach(() => {
        toggleNavbar(false);
    });
});
onUnmounted(() => {
    unregisterRouterHook();
});
</script>

<style scoped>
.navbar-open .navbar-small {
    @apply block;
}
</style>
