<template>
    <DocMobileMenu
        v-if="navigation.length > 0 && showMobileMenu"
        :navigation="navigation[0]"
        :toc="toc"
        @close="showMobileMenu = false"
        @open-search="showSearch = true"
    />
    <DocSearch
        v-if="showSearch"
        @close="showSearch = false"
    />

    <div class="lg:ml-72 xl:ml-80">
        <header class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
            <div class="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 xl:w-80">
                <div class="hidden lg:flex">
                    <NuxtLink to="/" aria-label="Home" class="flex">
                        <img src="/images/logo.svg" class="w-6 h-6 mr-2 rounded" alt="StockInLab">
                        StockInLab
                    </NuxtLink>
                </div>

                <div class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80 backdrop-blur-sm lg:left-72 xl:left-80 bg-white/[var(--bg-opacity-light)]" style="--bg-opacity-light:0.5;">
                    <div class="absolute inset-x-0 top-full h-px transition bg-zinc-900/7.5"></div>

                    <div class="hidden lg:block lg:max-w-md lg:flex-auto">
                        <button type="button" class="hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 lg:flex focus:[&:not(:focus-visible)]:outline-none" @click="showSearch = true">
                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-5 w-5 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
                            </svg>
                            Find something...<kbd class="ml-auto text-2xs text-zinc-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">K</kbd></kbd></button>
                    </div>

                    <div class="flex items-center gap-5 lg:hidden">
                        <button v-if="navigation.length > 0" type="button" class="flex h-6 w-6 items-center justify-center rounded transition hover:bg-zinc-900/5" aria-label="Toggle navigation" @click="showMobileMenu = true">
                            <Bars3Icon class="w-5 h-5 stroke-zinc-900"/>
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

                        <div class="hidden md:block lg:hidden md:h-5 md:w-px md:bg-zinc-900/10"></div>

                        <div class="flex lg:hidden gap-4">
                            <div class="contents lg:hidden">
                                <button
                                    type="button"
                                    class="flex h-6 w-6 items-center justify-center rounded transition hover:bg-zinc-900/5 lg:hidden focus:outline-none"
                                    aria-label="Find something..."
                                    @click="showSearch = true"
                                >
                                    <MagnifyingGlassIcon class="h-4 w-4 stroke-zinc-900"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <DocNavigation v-if="navigation.length > 0" :navigation="navigation[0]" :toc="toc"></DocNavigation>
            </div>
        </header>

        <div class="relative px-4 pt-10 sm:px-6 lg:px-8">
            <main class="py-16">
                <ContentRenderer tag="article" :value="activePage" class="prose"/>
            </main>

            <footer class="mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
                <div class="flex">
                    <div v-if="surround[0]" class="flex flex-col items-start gap-3">
                        <NuxtLink :to="surround[0]._path" class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200" :aria-label="`Previous: ${surround[0].title}`">
                            <ArrowLongLeftIcon class="mt-0.5 h-5 w-5 -ml-1"/>
                            Previous
                        </NuxtLink>
                        <NuxtLink :to="surround[0]._path" class="text-base font-semibold text-zinc-900 transition hover:text-zinc-600" tabindex="-1" aria-hidden="true">
                            {{ surround[0].title }}
                        </NuxtLink>
                    </div>
                    <div v-if="surround[1]" class="flex flex-col items-end gap-3 ml-auto">
                        <NuxtLink :to="surround[1]._path" class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200" :aria-label="`Next: ${surround[1].title}`">
                            Next
                            <ArrowLongRightIcon class="mt-0.5 h-5 w-5 -mr-1"/>
                        </NuxtLink>
                        <NuxtLink :to="surround[1]._path" class="text-base font-semibold text-zinc-900 transition hover:text-zinc-600" tabindex="-1" aria-hidden="true">
                            {{ surround[1].title }}
                        </NuxtLink>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import {Bars3Icon, MagnifyingGlassIcon} from '@heroicons/vue/24/outline';
import {ArrowLongLeftIcon, ArrowLongRightIcon} from '@heroicons/vue/20/solid';

const route = useRoute();

const showMobileMenu = ref(false);
const showSearch = ref(false);

const fetchFolder = route.path.split('/')[1] ?? '';

let navigation;
let surround;

if (route.path === '/') {
    navigation = [];
    surround = [null, null];
} else {
    const fetchContentNavigationResponse = await useAsyncData('navigation', () => fetchContentNavigation(fetchFolder + '/'));

    navigation = fetchContentNavigationResponse.data;

    surround = await queryContent(fetchFolder + '/')
        .only(['_path', 'title'])
        .findSurround(route.path);
}

const {data: activePage} = await useAsyncData('active-page', () => queryContent(route.path).findOne());

useContentHead(activePage);

const toc = computed(() => {
    if (activePage.value === null) {
        return [];
    }

    return activePage.value.body.children.filter(element => element.tag === 'h2');
});

onMounted(() => {
    document.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.keyCode === 75) {
            showSearch.value = true;

            event.preventDefault();
            event.stopPropagation();
        }
    });
});
</script>
