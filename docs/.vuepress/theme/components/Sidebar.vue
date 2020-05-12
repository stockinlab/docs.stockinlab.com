<template>
    <aside class="hidden bg-white z-10 lg:block lg:w-56 lg:mr-8 sidebar">
        <div class="sm:hidden pb-8 border-b border-gray-200">
            <NavLink v-for="item in userNav" :key="item.link" :item="item"/>
        </div>

        <nav class="pt-8 sm:pt-0">
            <div v-for="(item, index) in items" :key="index" class="mb-6">
                <h3 class="text-gray-900 text-uppercase font-bold text-sm px-4 mb-2">{{ item.title }}</h3>

                <ul>
                    <li v-for="(child, indexChild) in item.children" :key="`${index}${indexChild}`">
                        <SidebarLink :item="child"/>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script>
import NavLink from '@theme/components/NavLink';
import SidebarLink from '@theme/components/SidebarLink';

export default {
    name: 'Sidebar',

    components: {
        SidebarLink,
        NavLink,
    },

    props: ['items'],

    computed:{
        userNav() {
            return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
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
