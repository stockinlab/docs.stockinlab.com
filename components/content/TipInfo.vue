<template>
    <div class="my-6 flex gap-2.5 rounded border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900">
        <InformationCircleIcon class="mt-1 h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"/>
        <div class="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
            <slot/>
        </div>
    </div>
</template>

<script setup>
import {InformationCircleIcon} from '@heroicons/vue/24/outline';
</script>
