<template>
    <div v-if="links.length > 1" class="border-l border-gray-200">
        <h5 class="text-blue-grey-500 uppercase tracking-wide font-bold text-sm lg:text-xs mb-2 flex items-center pl-4">
            <svg class="inline-flex h-5 w-5 mr-2 text-gray-400">
                <use href="/assets/images/icons.svg#subject"/>
            </svg>
            On this page
        </h5>

        <ul class="overflow-x-hidden -ml-px flex flex-col">
            <li v-for="(link, index) in links" :key="index">
                <a :href="`#${link.id}`" class="block text-gray-600 hover:text-teal-500 focus:text-teal-500 font-light text-sm pl-4 py-1 border-l-2" :class="{'border-teal-500 text-teal-500': currentViewedId === link.id, 'border-transparent': currentViewedId !== link.id, 'pl-4': link.level === 0, 'pl-8': link.level === 1}">
                    {{ link.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titles: [],
            links: [],
            try: 0,
            currentViewedId: null,
        };
    },

    watch: {
        $page() {
            this.titles = [];
            this.links = [];
            this.try = 0;
            this.getLinks();
        },
    },

    methods: {
        getLinks() {
            this.try += 1;
            this.titles = [...document.querySelectorAll('.prose h2')];
            // this.titles = [...document.querySelectorAll('.documentation-content h2, .documentation-content h3')];
            this.links = this.titles
                .map(el => {
                    if (el.id) {
                        return {
                            id: el.id,
                            text: el.innerText
                                .replace('# ', '')
                                .replace('#\n', ''),
                            level: parseInt(el.tagName.replace('H', ''), 10) - 2,
                        };
                    }

                    return null;
                })
                .filter(el => el);

            if (this.links.length === 0 && this.try < 10) {
                requestAnimationFrame(this.getLinks);
            } else {
                document.addEventListener('scroll', this.followFirstVisibleId);
                // document.addEventListener('scroll', this.animationFrame);
                // document.addEventListener('scroll', () => {
                //     this.followFirstVisibleId()
                // requestAnimationFrame();
                // });
            }
        },

        animationFrame() {
            requestAnimationFrame(this.followFirstVisibleId);
        },

        followFirstVisibleId() {
            let currentViewedId = null;
            const titlesLength = this.titles.length;

            for (let i = titlesLength - 1; i >= 0; i--) {
                const boundingClientRect = this.titles[i].getBoundingClientRect();

                if (boundingClientRect.top <= 25) {
                    currentViewedId = this.titles[i].id;
                    break;
                }
            }

            this.currentViewedId = currentViewedId;
        },
    },

    mounted() {
        this.getLinks();
    },

    beforeDestroy() {
        document.removeEventListener('scroll', this.followFirstVisibleId);
        // document.removeEventListener('scroll', this.animationFrame);
    },
};
</script>
