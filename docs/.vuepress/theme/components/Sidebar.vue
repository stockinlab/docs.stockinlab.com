<template>
    <div class="fixed z-30 inset-y-0 left-0 w-64 p-8 bg-cool-gray-50 border-r border-gray-200 overflow-auto -translate-x-full lg:translate-x-0 ease-in duration-200" ref="sidebar">
        <button class="absolute z-50 text-gray-600 lg:hidden focus:outline-none" style="top: 1rem; right: 1rem;" id="sidebar-button" @click="$emit('toggle-sidebar', false)">
            <svg class="h-6 w-6">
                <use href="/assets/images/sprite.svg#close"/>
            </svg>
        </button>
        <nav>
            <div class="-mx-3">
                <RouterLink :to="$localePath" aria-label="StockInLab" class="px-3 inline-flex items-center text-gray-800 duration-200 focus:outline-none focus:bg-gray-100 hover:text-teal-500 focus:text-teal-500 text-2xl rounded-md home-link">
                    <img src="/assets/images/logo.svg" class="h-10 rounded-md mr-2" alt="">
                    StockInLab
                </RouterLink>
            </div>

            <div v-for="(item, index) in items" :key="index" class="mt-8">
                <h3 v-if="item.children.length > 0" class="flex items-center text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {{ item.title }}
                </h3>

                <div class="mt-2 -mx-3 space-y-1">
                    <NewSidebarLink v-for="(child, indexChild) in item.children" :key="`${index}${indexChild}`" :item="child"/>
                </div>
            </div>

<!--            <div class="mt-8">-->
<!--                <h3 class="flex items-center text-xs font-semibold text-gray-600 uppercase tracking-wide">-->
<!--                    <svg class="h-5 w-5 mr-1 text-cool-gray-400">-->
<!--                        <use href="/images/sprite.svg#cog-outline"/>-->
<!--                    </svg>-->
<!--                    Server settings-->
<!--                </h3>-->

<!--                <div class="mt-2 -mx-3 space-y-1">-->
<!--                    <a href="{{ route('super-admin.configurations.index') }}" class="group block px-3 py-2 rounded-lg text-sm font-medium {{ Str::startsWith(Request::fullUrl(), route('super-admin.configurations.index')) ? 'bg-teal-100 text-teal-900' : 'text-gray-900 hover:bg-cool-gray-100' }}">-->
<!--                        <span class="flex items-center {{ Str::startsWith(Request::fullUrl(), route('super-admin.configurations.index')) ? '' : 'group-hover:translate-r-5px duration-100' }}">-->
<!--                            <svg class="h-5 w-5 mr-1 {{ Str::startsWith(Request::fullUrl(), route('super-admin.configurations.index')) ? 'text-teal-500' : 'text-cool-gray-400' }}">-->
<!--                                <use href="/images/sprite.svg#chevron-right"/>-->
<!--                            </svg>-->
<!--                        Configuration-->
<!--                        </span>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->
        </nav>
    </div>
    <!--    <aside class="hidden bg-white z-10 lg:block lg:w-56 lg:mr-8 sidebar">-->
    <!--        <div class="md:hidden pb-8 border-b border-gray-200">-->
    <!--            <NavLink v-for="item in userNav" :key="item.link" :item="item"/>-->
    <!--        </div>-->

    <!--        <nav class="pt-8 md:pt-0">-->
    <!--            <div v-for="(item, index) in items" :key="index" class="mt-8 first:mt-0">-->
    <!--                <h3 v-if="item.children.length > 0" class="flex items-center text-xs font-semibold text-gray-600 uppercase tracking-wide">{{ item.title }}</h3>-->

    <!--                <ul class="mt-2 -mx-2 space-y-1">-->
    <!--                    <li v-for="(child, indexChild) in item.children" :key="`${index}${indexChild}`">-->
    <!--                        <NewSidebarLink :item="child"/>-->
    <!--                    </li>-->
    <!--                </ul>-->
    <!--            </div>-->
    <!--        </nav>-->
    <!--    </aside>-->
</template>

<script>
import NavLink from '@theme/components/NavLink';
import NewSidebarLink from '@theme/components/NewSidebarLink';

export default {
    name: 'Sidebar',

    components: {
        NewSidebarLink,
        NavLink,
    },

    props: ['items', 'isSidebarOpen'],

    computed: {
        userNav() {
            return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
        },
    },

    watch: {
        isSidebarOpen() {
            this.$refs.sidebar.classList.toggle('-translate-x-full');
        },
    },
};
</script>

<style lang="scss">
/*
    // position: relative sur le block du contenu
    ----- Premiere proposition de sidebar open -----
    display: block;
    position: fixed;
    top: 82px;
    left: 0;
    background: white;
    z-index: 10;
    padding-right: 2rem;
    overflow-y: scroll;
    padding-left: 2rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    bottom: 0;

    ----- Deuxieme proposition de sidebar open -----
    // display: none sur le block de documentation
    position: absolute;
    top: 2px;
    display: block;
    left: 0;
    right: 0;
    padding: 2rem 1rem 0 1rem;
    margin-right: 0;
    z-index: 10;
    background: white;
 */
</style>
