<template>
    <Dialog
        :open="true"
        class="fixed inset-0 z-50"
        @close="emitClose"
    >
        <TransitionRoot
            appear
            :show="showSearch"
            class="fixed inset-0 bg-zinc-400/25 backdrop-blur-sm"
            enter="transition-opacity duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
        />

        <div id="close" class="fixed inset-0 overflow-y-auto px-4 py-4 sm:py-20 sm:px-6 md:py-32 lg:px-8 lg:py-[15vh]">
            <TransitionRoot
                appear
                :as="DialogPanel"
                :show="showSearch"
                class="mx-auto overflow-hidden rounded-lg bg-zinc-50 shadow-xl ring-1 ring-zinc-900/7.5 sm:max-w-xl"
                enter="transition duration-300"
                enter-from="opacity-0 scale-75"
                enter-to="opacity-100 scale-100"
                leave="transition duration-200"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-75"
            >
                <Combobox v-model="selectedResult" as="div">
                    <form action="" novalidate="" role="search">
                        <div class="group relative flex h-12">
                            <MagnifyingGlassIcon class="pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500"/>
                            <ComboboxInput
                                class="flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden pr-4"
                                placeholder="Find something..."
                                :display-value="() => search"
                                @change="search = $event.target.value"
                            />
                        </div>
                        <div v-show="results.length > 0" class="border-t border-zinc-200 bg-white">
                            <ComboboxOptions>
                                <ComboboxOption
                                    v-for="result in results"
                                    :key="result._path"
                                    v-slot="{ active }"
                                    as="template"
                                    :value="result._path"
                                >
                                    <li
                                        :class="{
                                            'group block cursor-default px-4 py-3': true,
                                            'bg-zinc-50': active,
                                        }"
                                    >
                                        <div
                                            :class="[
                                                'text-sm font-medium',
                                                active ? 'text-emerald-500' : 'text-zinc-900',
                                            ]"
                                            v-html="result.title"
                                        />
                                        <div class="mt-1 truncate whitespace-nowrap text-2xs text-zinc-500">
                                            <template v-for="(item, index) in result.breadcrumb" :key="item">
                                                <span class="first-letter:capitalize">{{ item }}</span>
                                                <span :class="index === result.breadcrumb.length -1 ? 'sr-only' : 'mx-2 text-zinc-300'">/</span>
                                            </template>
                                        </div>
                                    </li>
                                </ComboboxOption>
                            </ComboboxOptions>
                        </div>
                    </form>
                </Combobox>
            </TransitionRoot>
        </div>
    </Dialog>
</template>

<script setup>
import {navigateTo} from '#app';
import {MagnifyingGlassIcon} from '@heroicons/vue/24/outline';
import {Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Dialog, DialogPanel, TransitionRoot} from '@headlessui/vue';
import {ref, watch} from 'vue';

const emit = defineEmits(['close']);

const search = ref('');
const results = ref([]);
const selectedResult = ref('');
const showSearch = ref(true);

watch(
    search,
    async value => {
        if (value.length < 3) {
            results.value = [];

            return;
        }

        const searchResults = await queryContent('/')
            .only(['_path', 'title'])
            .where({_title_insensitive: {$contains: value.toLowerCase()}})
            .limit(5)
            .find();

        results.value = searchResults.map(result => ({
            title: result.title.replace(new RegExp(value.toLowerCase(), 'gi'), '<mark class="underline bg-transparent text-emerald-500">$&</mark>'),
            breadcrumb: result._path
                .split('/')
                .filter(i => i !== '')
                .map(i => {
                    const format = i.replaceAll('-', ' ');

                    return format.charAt(0).toUpperCase() + format.slice(1);
                }),
            _path: result._path,
        }));
    },
);

watch(
    selectedResult,
    value => {
        navigateTo(value);
    },
);

function emitClose() {
    showSearch.value = false;

    window.setTimeout(() => {
        emit('close');
    }, 150);
}
</script>
