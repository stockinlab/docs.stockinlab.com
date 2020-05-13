<template>
    <RouterLink
        v-if="isInternal"
        :to="link"
        class="block rounded px-4 py-1 truncate"
        :class="classes"
        :exact="exact"
        @focusout.native="focusoutAction"
    >
        {{ item.text }}
    </RouterLink>
    <a
        v-else
        :href="link"
        class="nav-link external"
        :target="target"
        :rel="rel"
        @focusout="focusoutAction"
    >
        {{ item.text }}
        <OutboundLink v-if="isBlankTarget"/>
    </a>
</template>

<script>
import {ensureExt, isExternal, isMailto, isTel, normalize} from '@theme/util';

export default {
    name: 'NavLink',

    props: {
        item: {
            required: true,
        },
    },

    computed: {
        link() {
            return ensureExt(this.item.link);
        },

        active() {
            const routePath = normalize(this.$route.path);
            const pagePath = normalize(this.item.link);

            return routePath.startsWith(pagePath);
        },

        exact() {
            if (this.$site.locales) {
                return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link);
            }

            return this.link === '/';
        },

        isNonHttpURI() {
            return isMailto(this.link) || isTel(this.link);
        },

        isBlankTarget() {
            return this.target === '_blank';
        },

        isInternal() {
            return !isExternal(this.link) && !this.isBlankTarget;
        },

        target() {
            if (this.isNonHttpURI) {
                return null;
            }

            if (this.item.target) {
                return this.item.target;
            }

            return isExternal(this.link) ? '_blank' : '';
        },

        rel() {
            if (this.isNonHttpURI) {
                return null;
            }

            if (this.item.rel) {
                return this.item.rel;
            }

            return this.isBlankTarget ? 'noopener noreferrer' : '';
        },

        classes() {
            return {
                'focus:outline-none': true,
                'font-semibold bg-teal-500 text-white focus:shadow-outline-teal': this.active,
                'text-gray-600 font-light hover:bg-gray-100 focus:bg-gray-100 hover:text-teal-500 focus:text-teal-500': !this.active,
            };
        },
    },

    methods: {
        focusoutAction() {
            this.$emit('focusout');
        },
    },
};
</script>
