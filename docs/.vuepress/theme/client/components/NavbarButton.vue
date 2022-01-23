<template>
    <button
        type="button"
        class="block p-1 md:hidden ml-4 text-gray-600 hover:bg-gray-100 focus:bg-gray-100 hover:text-teal-500 focus:text-teal-500 focus:outline-none"
        aria-label="Menu"
        @click="emit('toggle-navbar')"
    >
        <svg class="inline-flex h-10 w-10 fill-current">
            <use v-if="isNavbarOpen" href="/assets/images/icons.svg#close"/>
            <use v-else href="/assets/images/icons.svg#menu"/>
        </svg>
    </button>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';

defineProps({
    isNavbarOpen: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const emit = defineEmits(['toggle-navbar']);
</script>
