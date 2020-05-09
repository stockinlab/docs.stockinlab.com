<template>
    <nav v-if="userLinks.length || repoLink" class="flex items-center nav-links">
        <div v-for="item in userLinks" :key="item.link" class="nav-item">
            <DropdownLink v-if="item.type === 'links'" :item="item"/>
            <NavLink v-else :item="item"/>
        </div>

        <a
            v-if="repoLink"
            :href="repoLink"
            class="repo-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            {{ repoLabel }}
            <OutboundLink/>
        </a>
    </nav>
</template>

<script>
import {resolveNavLinkItem} from '@theme/util';
import DropdownLink from '@theme/components/DropdownLink';
import NavLink from '@theme/components/NavLink';

export default {
    name: 'NavLinks',

    components: {
        DropdownLink,
        NavLink,
    },

    computed: {
        userNav() {
            return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
        },

        nav() {
            const {locales} = this.$site;

            if (locales && Object.keys(locales).length > 1) {
                const currentLink = this.$page.path;
                const routes = this.$router.options.routes;
                const themeLocales = this.$site.themeConfig.locales || {};
                const languageDropdown = {
                    text: this.$themeLocaleConfig.selectText || 'Languages',
                    ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
                    items: Object.keys(locales).map(path => {
                        const locale = locales[path];
                        const text = themeLocales[path] && themeLocales[path].label || locale.lang;
                        let link;

                        if (locale.lang === this.$lang) {
                            link = currentLink;
                        } else {
                            link = currentLink.replace(this.$localeConfig.path, path);
                            if (!routes.some(route => route.path === link)) {
                                link = path;
                            }
                        }

                        return {text, link};
                    })
                }

                return [...this.userNav, languageDropdown];
            }

            return this.userNav;
        },

        userLinks() {
            return (this.nav || []).map(link => {
                return Object.assign(resolveNavLinkItem(link), {
                    items: (link.items || []).map(resolveNavLinkItem),
                });
            });
        },

        repoLink() {
            const {repo} = this.$site.themeConfig;

            if (repo) {
                return /^https?:/.test(repo)
                    ? repo
                    : `https://github.com/${repo}`;
            }

            return null;
        },

        repoLabel() {
            if (!this.repoLink) {
                return;
            }

            if (this.$site.themeConfig.repoLabel) {
                return this.$site.themeConfig.repoLabel;
            }

            const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0];
            const platforms = ['GitHub', 'GitLab', 'Bitbucket'];

            for (let i = 0; i < platforms.length; i++) {
                const platform = platforms[i];

                if (new RegExp(platform, 'i').test(repoHost)) {
                    return platform;
                }
            }

            return 'Source';
        },
    },
};
</script>

<style lang="scss">
.nav-links {
    display: inline-block;

    a {
        line-height: 1.4rem;
        color: inherit;

        &:hover, &.router-link-active {
            color: green;
        }
    }

    .nav-item {
        position: relative;
        display: inline-block;
        margin-left: 1.5rem;
        line-height: 2rem;

        &:first-child {
            margin-left: 0;
        }
    }

    .repo-link {
        margin-left: 1.5rem;
    }
}

@media (max-width: 1024px) {
    .nav-links {
        .nav-item, .repo-link {
            margin-left: 0;
        }
    }
}

@media (min-width: 1024px) {
    .nav-links a {
        &:hover, &.router-link-active {
            color: red;
        }
    }

    .nav-item > a:not(.external) {
        &:hover, &.router-link-active {
            margin-bottom: -2px;
            border-bottom: 2px solid lighten(green, 8%);
        }
    }
}
</style>
