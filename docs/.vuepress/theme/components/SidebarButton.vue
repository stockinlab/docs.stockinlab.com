<template>
    <button type="button" class="block p-2 lg:hidden mr-4 " @click="$emit('toggle-sidebar')">
        <svg class="inline-flex h-10 w-10 text-gray-600">
            <use href="/assets/images/icons.svg#menu"/>
        </svg>
    </button>
</template>
