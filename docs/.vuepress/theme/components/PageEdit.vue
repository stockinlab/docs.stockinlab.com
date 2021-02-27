<template>
    <footer class="flex flex-wrap justify-between py-4">
        <div v-if="editLink" class="font-semibold text-sm mr-2">
            <a :href="editLink" class="text-gray-700" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
            <OutboundLink/>
        </div>

        <div v-if="lastUpdated" class="text-sm">
            <span class="font-semibold text-gray-700">{{ lastUpdatedText }}:</span>
            <span class="text-gray-500 font-light">{{ lastUpdated }}</span>
        </div>
    </footer>
</template>

<script>
import isNil from 'lodash/isNil';
import {endingSlashRE, outboundRE} from '@theme/util';

export default {
    name: 'PageEdit',

    computed: {
        lastUpdated() {
            return this.$page.lastUpdated;
        },

        lastUpdatedText() {
            if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
                return this.$themeLocaleConfig.lastUpdated;
            }

            if (typeof this.$site.themeConfig.lastUpdated === 'string') {
                return this.$site.themeConfig.lastUpdated;
            }

            return 'Last Updated';
        },

        editLink() {
            const showEditLink = isNil(this.$page.frontmatter.editLink)
                ? this.$site.themeConfig.editLinks
                : this.$page.frontmatter.editLink;

            const {
                repo,
                docsDir = '',
                docsBranch = 'master',
                docsRepo = repo
            } = this.$site.themeConfig;

            if (showEditLink && docsRepo && this.$page.relativePath) {
                return this.createEditLink(
                    repo,
                    docsRepo,
                    docsDir,
                    docsBranch,
                    this.$page.relativePath
                );
            }

            return null;
        },

        editLinkText() {
            return (
                this.$themeLocaleConfig.editLinkText
                || this.$site.themeConfig.editLinkText
                || 'Edit this page'
            );
        },
    },

    methods: {
        createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
            const base = outboundRE.test(docsRepo)
                ? docsRepo
                : `https://github.com/${docsRepo}`;

            return (
                base.replace(endingSlashRE, '')
                + '/edit'
                + `/${docsBranch}/`
                + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
                + path
            );
        },
    },
};
</script>
