<template>
    <div class="my-6 flex gap-2.5 rounded border border-red-500/20 bg-red-50/50 p-4 leading-6 text-red-900">
        <ShieldExclamationIcon class="mt-1 h-5 w-5 flex-none fill-red-500 stroke-white dark:fill-red-200/20 dark:stroke-red-200"/>
        <div class="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
            <slot/>
        </div>
    </div>
</template>

<script setup>
import {ShieldExclamationIcon} from '@heroicons/vue/24/outline';
</script>
