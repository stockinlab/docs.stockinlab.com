<template>
    <RouterLink :to="item.path" :class="classes">
        <span :class="spanClasses">
            <svg :class="svgClasses">
                <use href="/assets/images/sprite.svg#chevron-right"/>
            </svg>
            <span class="truncate">{{ item.title }}</span>
        </span>
    </RouterLink>
</template>

<script>
import {isActive} from '@theme/util';

export default {
    props: ['item'],

    data() {
        return {
            isActive: false,
        };
    },

    computed: {
        classes() {
            return {
                'group block px-3 py-2 rounded-lg text-sm font-medium': true,
                'bg-teal-100 text-teal-900': this.isActive,
                'text-gray-900 hover:bg-cool-gray-100': !this.isActive,
            };
        },

        spanClasses() {
            return {
                'flex items-center': true,
                'group-hover:translate-r-5px duration-100': !this.isActive,
            };
        },

        svgClasses() {
            return {
                'h-5 w-5 mr-1': true,
                'text-teal-500': this.isActive,
                'text-cool-gray-400': !this.isActive,
            };
        },
    },

    watch: {
        $route: {
            handler(value) {
                this.isActive = isActive(value, this.item.path);
            },
            immediate: true,
        },
    },
};
</script>
