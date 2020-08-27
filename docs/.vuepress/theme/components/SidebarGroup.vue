<template>
    <section
        class="sidebar-group"
        :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0
      },
      `depth-${depth}`
    ]"
    >
        <RouterLink
            v-if="item.path"
            class="sidebar-heading clickable"
            :class="{
        open,
        'active': isActive($route, item.path)
      }"
            :to="item.path"
            @click.native="$emit('toggle')"
        >
            <span>{{ item.title }}</span>
            <span
                v-if="collapsable"
                class="arrow"
                :class="open ? 'down' : 'right'"
            />
        </RouterLink>

        <p
            v-else
            class="sidebar-heading"
            :class="{ open }"
            @click="$emit('toggle')"
        >
            <span>{{ item.title }}</span>
            <span
                v-if="collapsable"
                class="arrow"
                :class="open ? 'down' : 'right'"
            />
        </p>

        <DropdownTransition>
            <SidebarLinks
                v-if="open || !collapsable"
                class="sidebar-group-items"
                :items="item.children"
                :sidebar-depth="item.sidebarDepth"
                :depth="depth + 1"
            />
        </DropdownTransition>
    </section>
</template>

<script>
import {isActive} from '@theme/util';
import DropdownTransition from '@theme/components/DropdownTransition';

export default {
    name: 'SidebarGroup',

    components: {
        DropdownTransition
    },

    props: [
        'item',
        'open',
        'collapsable',
        'depth'
    ],

    // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
    beforeCreate() {
        this.$options.components.SidebarLinks = require('@theme/components/SidebarLinkse').default;
    },

    methods: {isActive}
};
</script>
