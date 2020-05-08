<template>
    <div v-if="links.length > 1">
        <h5 class="text-blue-grey-500 uppercase tracking-wide font-bold text-sm lg:text-xs mb-2 flex items-center">
            <svg class="inline-flex h-5 w-5 mr-2 text-gray-400">
                <use href="/assets/images/icons.svg#toc"/>
            </svg>
            On this page
        </h5>

        <ul class="overflow-x-hidden">
            <li v-for="(link, index) in links" :key="index" class="mb-2">
                <a :href="link.href" class="block text-gray-600 hover:text-teal-500 focus:text-teal-500 font-light text-sm">{{ link.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [],
            try: 0,
        };
    },

    watch: {
        $page() {
            this.links = [];
            this.try = 0;
            this.getLinks();
        },
    },

    methods: {
        getLinks() {
            this.try += 1;
            this.links = [...document.querySelectorAll('h2')]
                .map(el => {
                    if (el.id) {
                        return {
                            href: `#${el.id}`,
                            text: el.innerText
                                .replace('# ', '')
                                .replace('#\n', ''),
                        };
                    }

                    return null;
                })
                .filter(el => el);

            if (this.links.length === 0 && this.try < 10) {
                requestAnimationFrame(this.getLinks);
            }
        },
    },

    mounted() {
        this.getLinks();
    },
}
</script>
