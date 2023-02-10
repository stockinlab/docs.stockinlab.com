<template>
    <Dialog
        :open="true"
        class="fixed inset-0 z-50 lg:hidden"
        @close="emitClose"
    >
        <TransitionRoot
            appear
            :show="showMenu"
            class="fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm"
            enter="transition-opacity duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
        />

        <DialogPanel>
            <div class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80 bg-white opacity-100" style="--bg-opacity-light: 0.5;">
                <div class="absolute inset-x-0 top-full h-px transition bg-zinc-900/7.5"/>

                <div class="flex items-center gap-5 lg:hidden">
                    <button
                        type="button"
                        class="flex h-6 w-6 items-center justify-center rounded transition hover:bg-zinc-900/5 focus:outline-none"
                        aria-label="Toggle navigation"
                        @click="emitClose"
                    >
                        <XMarkIcon class="w-5 h-5 stroke-zinc-900"/>
                    </button>
                    <NuxtLink to="/" aria-label="Home" class="flex">
                        <img src="/images/logo.svg" class="w-6 h-6 mr-2 rounded" alt="StockInLab">
                        StockInLab
                    </NuxtLink>
                </div>

                <div class="flex items-center gap-5">
                    <nav>
                        <ul role="list" class="flex items-center gap-8">
                            <li>
                                <NuxtLink to="/general/account/settings" class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900">
                                    General
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/laboratory-information-management-system" class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900">
                                    LIMS
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/tools" class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900">
                                    Tools
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>

                    <div class="hidden md:block lg:hidden md:h-5 md:w-px md:bg-zinc-900/10"/>

                    <div class="flex lg:hidden gap-4">
                        <div class="contents lg:hidden">
                            <button
                                type="button"
                                class="flex h-6 w-6 items-center justify-center rounded transition hover:bg-zinc-900/5 lg:hidden focus:outline-none"
                                aria-label="Find something..."
                                @click="emit('open-search')"
                            >
                                <MagnifyingGlassIcon class="h-4 w-4 stroke-zinc-900"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <TransitionRoot
                appear
                :show="showMenu"
                class="fixed left-0 top-14 bottom-0 w-full overflow-y-auto bg-white px-4 pt-6 pb-4 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/7.5 min-[416px]:max-w-sm sm:px-6 sm:pb-10"
                enter="transition duration-300"
                enter-from="translate-x-[-384px]"
                enter-to="translate-x-0"
                leave="transition duration-200"
                leave-from="translate-x-0"
                leave-to="translate-x-[-384px]"
            >
                <nav>
                    <ul class="space-y-6" role="list">
                        <DocNavigationGroup
                            v-for="(group, groupIndex) in navigation.children"
                            :key="`doc-navigation-${groupIndex}`"
                            :group="group"
                            :toc="toc"
                        />
                    </ul>
                </nav>
            </TransitionRoot>
        </DialogPanel>
    </Dialog>
</template>

<script setup>
import {useRoute} from '#app';
import {MagnifyingGlassIcon, XMarkIcon} from '@heroicons/vue/24/outline';
import {Dialog, DialogPanel, TransitionRoot} from '@headlessui/vue';
import {ref, watch} from 'vue';

defineProps({
    navigation: {
        type: Object,
        required: true,
    },
    toc: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['close', 'open-search']);

const route = useRoute();

const showMenu = ref(true);

watch(
    () => route.hash,
    () => {
        emitClose();
    },
);

function emitClose() {
    showMenu.value = false;

    window.setTimeout(() => {
        emit('close');
    }, 150);
}
</script>
