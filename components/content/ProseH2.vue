<template>
    <h2 :id="id">
        <a v-if="id && generate" :href="`#${id}`" class="group text-inherit no-underline hover:text-inherit">
            <div class="absolute mt-1 ml-[calc(-1*var(--width))] hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.12))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
                <div class="group/anchor flex items-center justify-center h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500">
                    <LinkIcon class="h-4 w-4 text-zinc-500 transition"/>
                </div>
            </div>
            <slot/>
        </a>
        <slot v-else/>
    </h2>
</template>

<script setup lang="ts">
import {useRuntimeConfig} from '#imports';
import {LinkIcon} from '@heroicons/vue/20/solid';

defineProps<{ id?: string }>();
const heading = 2;
const {anchorLinks} = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>
