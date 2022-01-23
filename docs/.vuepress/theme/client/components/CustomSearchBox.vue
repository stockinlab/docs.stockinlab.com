<template>
    <form class="search-form flex-1 md:relative" role="search">
        <div class="w-full relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                <svg class="fill-current pointer-events-none text-gray-700 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
            </div>
            <input
                ref="input"
                type="search"
                aria-label="Search"
                :value="query"
                class="w-full focus:outline-none border border-gray-100 focus:bg-white focus:border-gray-500 text-gray-700 rounded-lg bg-gray-100 py-2 pr-4 pl-10 block w-full appearance-none leading-normal"
                :class="{ 'focused': isActive }"
                :placeholder="locale.placeholder"
                autocomplete="off"
                spellcheck="false"
                @input="query = $event.target.value"
                @focus="isActive = true"
                @blur="isActive = false"
                @keyup.enter="goTo(focusIndex)"
                @keyup.up="onArrowUp"
                @keyup.down="onArrowDown"
            >
        </div>

        <ul v-if="showSuggestions" class="absolute bg-white z-20 border border-gray-100 rounded shadow suggestions mt-1" @mouseleave="focusIndex = -1">
            <li
                v-for="(suggestion, index) in suggestions"
                :key="index"
                class="suggestion"
                :class="{ focused: index === focusIndex }"
                @mousedown="goTo(index)"
                @mouseenter="focusIndex = index"
            >
                <a :href="suggestion.link" class="block focus:bg-gray-100 focus:outline-none focus:text-teal-500 font-light hover:bg-gray-100 hover:text-teal-500 leading-none leading-none px-4 py-2 text-gray-600" @click.prevent="">
                    <!--                    <span v-if="s.section" class="page-section font-medium has-arrow">{{ s.section }}</span>-->
                    <!--                    <span class="page-title" :class="{'has-arrow': s.header}">{{ s.title || s.path }}</span>-->
                    <!--                    <span v-if="s.header" class="header text-sm">{{ s.header.title }}</span>-->
                    <span class="page-title" :class="{'has-arrow': suggestion.header}">{{ suggestion.title || suggestion.link }}</span>
                    <span v-if="suggestion.header" class="header text-sm">{{ suggestion.header }}</span>
                </a>
            </li>
        </ul>
    </form>
</template>

<script setup lang="ts">
import {useRouteLocale} from '@vuepress/client';
import {useHotKeys, useSearchIndex, useSearchSuggestions, useSuggestionsFocus} from '@vuepress/plugin-search/lib/client';
import type {LocaleConfig} from '@vuepress/shared';
import {computed, ref} from 'vue';
import {useRouter} from 'vue-router';

export type SearchBoxLocales = LocaleConfig<{
    placeholder: string,
}>

const locales = ref<SearchBoxLocales>(__SEARCH_LOCALES__);
const hotKeys = ref<Array<string>>(__SEARCH_HOT_KEYS__);
const maxSuggestions = ref<number>(__SEARCH_MAX_SUGGESTIONS__);

const router = useRouter();
const routeLocale = useRouteLocale();
const searchIndex = useSearchIndex();

const input = ref<HTMLInputElement | null>(null);
const isActive = ref(false);
const query = ref('');
const locale = computed(() => locales.value[routeLocale.value] ?? {});

const suggestions = useSearchSuggestions({
    searchIndex,
    routeLocale,
    query,
    maxSuggestions,
});
const {focusIndex, focusNext, focusPrev} = useSuggestionsFocus(suggestions);
useHotKeys({input, hotKeys});

const showSuggestions = computed(
    () => isActive.value && !!suggestions.value.length
);
const onArrowUp = (): void => {
    if (!showSuggestions.value) {
        return;
    }
    focusPrev();
};
const onArrowDown = (): void => {
    if (!showSuggestions.value) {
        return;
    }
    focusNext();
};
const goTo = (index: number): void => {
    if (!showSuggestions.value) {
        return;
    }

    const suggestion = suggestions.value[index];

    if (!suggestion) {
        return;
    }

    router.push(suggestion.link).then(() => {
        query.value = '';
        focusIndex.value = 0;
    });
};
</script>

<style lang="scss">
.search-form {
    .suggestion {
        &.focused {
            a {
                @apply bg-gray-100 text-teal-500;

                .has-arrow:after {
                    @apply bg-teal-300;
                }
            }
        }

        a .has-arrow {
            @apply inline-flex items-center;

            &:after {
                @apply inline-block bg-cool-gray-200 h-5 w-5 ml-1;
                content: '';
                -webkit-mask: url('../../../public/assets/images/arrow-right.svg') no-repeat 50% 50%;
                //-webkit-mask: url('./assets/images/arrow-right.svg') no-repeat 50% 50%;
                mask: url('../../../public/assets/images/arrow-right.svg') no-repeat 50% 50%;
                //mask: url('./assets/images/arrow-right.svg') no-repeat 50% 50%;
                -webkit-mask-size: cover;
                mask-size: cover;
            }
        }

        a:hover .has-arrow:after {
            @apply bg-teal-300;
        }
    }

    .suggestions {
        left: 1.5rem;
        right: 1.5rem;
        top: 59px;
    }
}

@media (min-width: 768px) {
    .search-form .suggestions {
        left: 0;
        right: 0;
        min-width: 25rem;
        top: 48px;
    }
}
</style>
