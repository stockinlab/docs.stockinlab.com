<template>
    <li class="relative">
        <h2 class="text-xs font-semibold text-zinc-900" style="transform: none; transform-origin: 50% 50% 0;">
            {{ group.title }}
        </h2>

        <div v-if="group.children?.length > 0" class="relative mt-3 pl-2">
            <div class="absolute inset-y-0 left-2 w-px bg-zinc-900/10" style="transform: none; transform-origin: 50% 50% 0;"/>
            <div
                v-if="routeTop > 0"
                class="absolute left-2 h-6 w-px bg-emerald-500"
                :style="{
                    top: `${routeTop}px`,
                    opacity: 1,
                    transform: 'none',
                    'transform-origin': '50% 50% 0',
                }"
            />

            <ul class="border-l border-transparent" role="list">
                <li v-for="(groupChild, groupChildIndex) in group.children" :key="groupChildIndex" class="relative">
                    <NuxtLink
                        :to="groupChild._path"
                        :class="[
                            'flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 hover:text-zinc-900',
                            groupChild._path === route.path ? 'text-zinc-900' : 'text-zinc-600',
                        ]"
                    >
                        {{ groupChild.title }}
                    </NuxtLink>

                    <ul v-if="groupChild._path === route.path" role="list">
                        <li v-for="(headerToc, headerTocIndex) in toc" :key="`${groupChildIndex}-${headerTocIndex}`">
                            <NuxtLink
                                :to="`#${headerToc.props.id}`"
                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900"
                            >
                                {{ headerToc.children[0].value }}
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </li>
</template>

<script setup>
import {useRoute} from '#app';
import {computed} from 'vue';

const props = defineProps({
    group: {
        type: Object,
        required: true,
    },
    toc: {
        type: Array,
        required: true,
    },
});

const route = useRoute();

const routeTop = computed(() => {
    if (!props.group.children) {
        return -1;
    }

    const findIndex = props.group.children.findIndex(child => child._path === route.path);

    if (findIndex === -1) {
        return -1;
    }

    return 4 + 32 * findIndex;
});
</script>
