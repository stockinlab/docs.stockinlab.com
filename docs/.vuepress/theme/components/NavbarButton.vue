<template>
    <button type="button" class="block p-1 lg:hidden ml-4 text-gray-600 hover:bg-gray-100 focus:bg-gray-100 hover:text-teal-500 focus:text-teal-500 focus:outline-none" @click="toggleSidebar">
        <svg class="inline-flex h-10 w-10 fill-current">
            <use v-if="navbarIsOpen" href="/assets/images/icons.svg#close"/>
            <use v-else href="/assets/images/icons.svg#menu"/>
        </svg>
    </button>
</template>

<script>
export default {
    data: () => ({
        navbarIsOpen: false,
    }),

    methods: {
        toggleSidebar() {
            this.$emit('toggle-navbar');
            this.navbarIsOpen = !this.navbarIsOpen;
        },
    },
};
</script>
