<template>
    <main class="page">
        <slot name="top"/>

        <Content class="theme-default-content"/>
        <PageEdit/>

        <PageNav v-bind="{ sidebarItems }"/>

        <slot name="bottom"/>
    </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit';
import PageNav from '@theme/components/PageNav';

export default {
    components: {PageEdit, PageNav},
    props: ['sidebarItems']
};
</script>
