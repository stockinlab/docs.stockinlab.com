<template>
    <aside class="hidden bg-white z-10 lg:block lg:w-56 lg:mr-4 sidebar">
<!--        <NavLinks/>-->

        <nav>
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
import NavLinks from '@theme/components/NavLinks';
import SidebarLink from '@theme/components/SidebarLink';

export default {
    name: 'Sidebar',

    components: {
        SidebarLink,
        NavLinks,
    },

    props: ['items'],
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
