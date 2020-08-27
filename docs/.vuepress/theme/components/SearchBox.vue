<template>
    <div class="flex-1 md:relative search-box">
        <div class="w-full relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                <svg class="fill-current pointer-events-none text-gray-700 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
            </div>
            <input
                ref="input"
                aria-label="Search"
                :value="query"
                class="w-full focus:outline-none border border-gray-100 focus:bg-white focus:border-gray-500 text-gray-700 rounded-lg bg-gray-100 py-2 pr-4 pl-10 block w-full appearance-none leading-normal"
                :class="{ 'focused': focused }"
                :placeholder="placeholder"
                autocomplete="off"
                spellcheck="false"
                @input="query = $event.target.value"
                @focus="focused = true"
                @blur="focused = false"
                @keyup.enter="go(focusIndex)"
                @keyup.up="onUp"
                @keyup.down="onDown"
            >
        </div>

        <ul v-if="showSuggestions" class="absolute bg-white z-20 border border-gray-100 rounded shadow suggestions" :class="{ 'align-right': alignRight }" @mouseleave="unfocus">
            <li
                v-for="(s, i) in suggestions"
                :key="i"
                class="suggestion"
                :class="{ focused: i === focusIndex }"
                @mousedown="go(i)"
                @mouseenter="focus(i)"
            >
                <a :href="s.path" @click.prevent="" class="block focus:bg-gray-100 focus:outline-none focus:text-teal-500 font-light hover:bg-gray-100 hover:text-teal-500 leading-none leading-none px-4 py-2 text-gray-600">
                    <span v-if="s.section" class="page-section font-medium has-arrow">{{ s.section }}</span>
                    <span class="page-title" :class="{'has-arrow': s.header}">{{ s.title || s.path }}</span>
                    <span v-if="s.header" class="header text-sm">{{ s.header.title }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import matchQuery from '@theme/util/match-query';

export default {
    name: 'SearchBox',

    data() {
        return {
            query: '',
            focused: false,
            focusIndex: 0,
            placeholder: 'Search the docs (Press "/" to focus)',
            searchMaxSuggestions: 5,
            searchPaths: null,
            searchHotKeys: ['s', '/'],
        };
    },

    computed: {
        showSuggestions() {
            return (
                this.focused
                && this.suggestions
                && this.suggestions.length
            );
        },

        suggestions() {
            const query = this.query.trim().toLowerCase();

            if (!query) {
                return;
            }

            const {pages} = this.$site;
            const max = this.$site.themeConfig.searchMaxSuggestions || this.searchMaxSuggestions;
            const localePath = this.$localePath;
            const res = [];

            for (let i = 0; i < pages.length; i++) {
                if (res.length >= max) {
                    break;
                }

                let page = pages[i];

                // filter out results that do not match current locale
                if (this.getPageLocalePath(page) !== localePath) {
                    continue;
                }

                // filter out results that do not match searchable paths
                if (!this.isSearchable(page)) {
                    continue;
                }

                for (let y = 0; y < this.$themeLocaleConfig.nav.length; y++) {
                    if (page.regularPath.startsWith(this.$themeLocaleConfig.nav[y].link)) {
                        page = {
                            ...page,
                            section: this.$themeLocaleConfig.nav[y].text,
                        };
                    }
                }

                if (matchQuery(query, page) && this.$page.path !== page.path) {
                    res.push(page);
                } else if (page.headers) {
                    for (let j = 0; j < page.headers.length; j++) {
                        if (res.length >= max) {
                            break;
                        }

                        const header = page.headers[j];
                        const path = page.path + '#' + header.slug;

                        if (header.title && matchQuery(query, page, header.title) && this.$page.path !== path) {
                            res.push({
                                ...page,
                                path,
                                header,
                            });
                        }
                    }
                }
            }

            return res;
        },

        // make suggestions align right when there are not enough items
        alignRight() {
            return false;

            // const navCount = (this.$site.themeConfig.nav || []).length;
            // const repo = this.$site.repo ? 1 : 0;
            //
            // return navCount + repo <= 2;
        },
    },

    methods: {
        getPageLocalePath(page) {
            for (const localePath in this.$site.locales || {}) {
                if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
                    return localePath;
                }
            }

            return '/';
        },

        isSearchable(page) {
            let searchPaths = this.searchPaths;

            // all paths searchables
            if (searchPaths === null) {
                return true;
            }

            searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths);

            return searchPaths.filter(path => page.path.match(path)).length > 0;
        },

        onHotkey(event) {
            if (event.srcElement === document.body && this.searchHotKeys.includes(event.key)) {
                this.$refs.input.focus();
                event.preventDefault();
            }
        },

        onUp() {
            if (this.showSuggestions) {
                if (this.focusIndex > 0) {
                    this.focusIndex--;
                } else {
                    this.focusIndex = this.suggestions.length - 1;
                }
            }
        },

        onDown() {
            if (this.showSuggestions) {
                if (this.focusIndex < this.suggestions.length - 1) {
                    this.focusIndex++;
                } else {
                    this.focusIndex = 0;
                }
            }
        },

        go(i) {
            if (!this.showSuggestions) {
                return;
            }

            this.$router.push(this.suggestions[i].path);
            this.query = '';
            this.focusIndex = 0;
        },

        focus(i) {
            this.focusIndex = i;
        },

        unfocus() {
            this.focusIndex = -1;
        },
    },

    mounted() {
        document.addEventListener('keydown', this.onHotkey);
    },

    beforeDestroy() {
        document.removeEventListener('keydown', this.onHotkey);
    },
};
</script>

<style lang="scss">
.search-box {
    .suggestion {
        &.focused {
            a {
                @apply bg-gray-100 text-teal-500;

                .has-arrow:after {
                    @apply bg-teal-400;
                }
            }
        }

        a .has-arrow {
            @apply inline-flex items-center;

            &:after {
                @apply bg-gray-400;
                display: inline-block;
                content: '';
                -webkit-mask: url(/assets/images/arrow_right.svg) no-repeat 50% 50%;
                mask: url(/assets/images/arrow_right.svg) no-repeat 50% 50%;
                -webkit-mask-size: cover;
                mask-size: cover;
                width: 18px;
                height: 18px;
                margin-left: .2rem;
            }
        }

        a:hover .has-arrow:after {
            @apply bg-teal-400;
        }
    }

    .suggestions {
        left: 1.5rem;
        right: 1.5rem;
        top: 59px;
    }
}

@media (min-width: 768px) {
    .search-box .suggestions {
        left: 0;
        right: 0;
        min-width: 25rem;
        top: 48px;
    }
}
</style>
