<template>
    <footer class="flex flex-wrap justify-between py-4">
        <div v-if="editNavLink" class="font-semibold text-sm mr-2">
            <a :href="editNavLink.link" class="text-gray-700" target="_blank" rel="noopener noreferrer">
                {{ editNavLink.text }}
                <ExternalLinkIcon/>
            </a>
        </div>

        <div v-if="lastUpdated" class="text-sm">
            <span class="font-semibold text-gray-700">{{ themeLocale.lastUpdatedText }}: </span>
            <span class="text-gray-500 font-light">{{ lastUpdated }}</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
import {usePageData, usePageFrontmatter, useSiteLocaleData,} from '@vuepress/client';
import type {ComputedRef} from 'vue';
import {computed} from 'vue';
import type {DefaultThemeNormalPageFrontmatter, DefaultThemePageData, NavLink as NavLinkType,} from '../../shared';
import {useThemeLocaleData} from '../composables';
import {resolveEditLink} from '../utils';

const useEditNavLink = (): ComputedRef<null | NavLinkType> => {
    const themeLocale = useThemeLocaleData();
    const page = usePageData<DefaultThemePageData>();
    const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();

    return computed(() => {
        const showEditLink = frontmatter.value.editLink ?? themeLocale.value.editLink ?? true;

        if (!showEditLink) {
            return null;
        }

        const {
            repo,
            docsRepo = repo,
            docsBranch = 'main',
            docsDir = '',
            editLinkText,
        } = themeLocale.value;

        if (!docsRepo) {
            return null;
        }

        const editLink = resolveEditLink({
            docsRepo,
            docsBranch,
            docsDir,
            filePathRelative: page.value.filePathRelative,
            editLinkPattern: frontmatter.value.editLinkPattern ?? themeLocale.value.editLinkPattern,
        });

        if (!editLink) {
            return null;
        }

        return {
            text: editLinkText ?? 'Edit this page',
            link: editLink,
        };
    });
};

const useLastUpdated = (): ComputedRef<null | string> => {
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const page = usePageData<DefaultThemePageData>();
    const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();

    return computed(() => {
        const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;

        if (!showLastUpdated) {
            return null;
        }

        if (!page.value.git?.updatedTime) {
            return null;
        }

        const updatedDate = new Date(page.value.git?.updatedTime);

        return updatedDate.toLocaleString(siteLocale.value.lang);
    });
};

const useContributors = (): ComputedRef<null | Required<DefaultThemePageData['git']>['contributors']> => {
    const themeLocale = useThemeLocaleData();
    const page = usePageData<DefaultThemePageData>();
    const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();

    return computed(() => {
        const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;

        if (!showContributors) {
            return null;
        }

        return page.value.git?.contributors ?? null;
    });
};

const themeLocale = useThemeLocaleData();
const editNavLink = useEditNavLink();
const lastUpdated = useLastUpdated();
const contributors = useContributors();
</script>
