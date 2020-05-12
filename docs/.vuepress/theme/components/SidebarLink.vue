<script>
import {groupHeaders, hashRE, isActive} from '@theme/util';

export default {
    functional: true,

    props: ['item', 'sidebarDepth'],

    render(h,
        {
            parent: {
                $page,
                $site,
                $route,
                $themeConfig,
                $themeLocaleConfig
            },
            props: {
                item,
                sidebarDepth
            }
        }) {
        // use custom active class matching logic
        // due to edge case of paths ending with / + hash
        const selfActive = isActive($route, item.path);
        // for sidebar: auto pages, a hash link should be active if one of its child
        // matches
        const active = item.type === 'auto'
            ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
            : selfActive;
        const link = item.type === 'external'
            ? renderExternal(h, item.path, item.title || item.path)
            : renderLink(h, item.path, item.title || item.path, active);

        const maxDepth = [
            $page.frontmatter.sidebarDepth,
            sidebarDepth,
            $themeLocaleConfig.sidebarDepth,
            $themeConfig.sidebarDepth,
            1
        ].find(depth => depth !== undefined);

        const displayAllHeaders = $themeLocaleConfig.displayAllHeaders
            || $themeConfig.displayAllHeaders;

        if (item.type === 'auto') {
            return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth)];
        } else if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {
            const children = groupHeaders(item.headers);
            return [link, renderChildren(h, children, item.path, $route, maxDepth)];
        } else {
            return link;
        }
    },
};

function renderLink(h, to, text, active, level) {
    const component = {
        props: {
            to,
            activeClass: '',
            exactActiveClass: ''
        },
        class: {
            active,
            'block text-sm rounded px-4 py-1 truncate focus:outline-none focus:shadow-outline-teal': true,
            'font-semibold bg-teal-500 text-white': active,
            'text-gray-600 font-light hover:bg-gray-100 focus:bg-gray-100 hover:text-teal-500 focus:text-teal-500': !active,
        },
    };

    return h('RouterLink', component, text);
}

function renderChildren(h, children, path, route, maxDepth, depth = 1) {
    return;

    if (!children || depth > maxDepth) {
        return null;
    }

    return h('ul', {class: 'sidebar-sub-headers'}, children.map(c => {
        const active = isActive(route, path + '#' + c.slug);

        return h('li', {class: 'sidebar-sub-header'}, [
            renderLink(h, path + '#' + c.slug, c.title, active, c.level - 1),
            renderChildren(h, c.children, path, route, maxDepth, depth + 1)
        ]);
    }));
}

function renderExternal(h, to, text) {
    return h('a', {
        attrs: {
            href: to,
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        class: {
            'sidebar-link': true
        }
    }, [text, h('OutboundLink')]);
}
</script>
