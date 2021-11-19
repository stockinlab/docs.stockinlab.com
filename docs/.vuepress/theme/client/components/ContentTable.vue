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
                <a :href="`#${link.id}`" class="block text-gray-600 hover:text-teal-500 focus:text-teal-500 font-light text-sm pl-4 py-1 border-l-2" :class="{'border-teal-500 text-teal-500': currentViewId === link.id, 'border-transparent': currentViewId !== link.id, 'pl-4': link.level === 0, 'pl-8': link.level === 1}">
                    {{ link.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router';

type TableLink = {
    id: string,
    text: string,
    level: number,
};

const route = useRoute();

const titles = ref<HTMLHeadingElement[]>([]);
const links = ref<TableLink[]>([]);
const retry = ref<number>(0);
const currentViewId = ref<string>('');
const isEventRegistered = ref<boolean>(false);

const followFirstVisibleId = () => {
    let currentViewedId = '';
    const titlesLength = titles.value.length;

    for (let i = titlesLength - 1; i >= 0; i--) {
        const boundingClientRect = titles.value[i].getBoundingClientRect();

        if (boundingClientRect.top <= 25) {
            currentViewedId = titles.value[i].id;
            break;
        }
    }

    currentViewId.value = currentViewedId;
};

const getLinks = () => {
    retry.value += 1;
    titles.value = [...document.querySelectorAll<HTMLHeadingElement>('.prose h2')];
    links.value = titles.value
        .filter((element: HTMLHeadingElement) => element.id)
        .map((element: HTMLHeadingElement) => ({
            id: element.id,
            text: element.innerText
                .replace('# ', '')
                .replace('#\n', ''),
            level: parseInt(element.tagName.replace('H', ''), 10) - 2,
        }));

    if (links.value.length === 0 && retry.value < 10) {
        requestAnimationFrame(getLinks);
    } else if (isEventRegistered.value === false) {
        document.addEventListener('scroll', followFirstVisibleId);
        isEventRegistered.value = true;
    }
};

watch(
    () => route.path,
    () => {
        titles.value = [];
        links.value = [];
        retry.value = 0;
        getLinks();
    }
);

onMounted(() => {
    getLinks();
});
onUnmounted(() => {
    document.removeEventListener('scroll', followFirstVisibleId);
});
</script>
