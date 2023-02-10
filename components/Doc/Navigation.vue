<template>
    <nav class="hidden lg:mt-10 lg:block">
        <ul class="space-y-6" role="list">
            <DocNavigationGroup
                v-for="(group, groupIndex) in navigation.children"
                :key="`doc-navigation-${groupIndex}`"
                :group="group"
                :toc="toc"
            />
        </ul>
    </nav>
</template>

<script setup>
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
</script>
