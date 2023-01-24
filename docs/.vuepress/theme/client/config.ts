import {defineClientConfig} from '@vuepress/client';
import {setupDarkMode, setupSidebarItems, useScrollPromise} from './composables';
import ExternalLinkIcon from './components/global/ExternalLinkIcon.vue';

import './styles/index.scss';

export default defineClientConfig({
    enhance({app, router}) {
        // override the `<ExternalLinkIcon>` provided by @vuepress/plugin-external-link-icon
        delete app._context.components.ExternalLinkIcon;
        app.component('ExternalLinkIcon', ExternalLinkIcon);

        // // compat with @vuepress/plugin-docsearch and @vuepress/plugin-search
        // app.component('NavbarSearch', () => {
        //     const SearchComponent =
        //         app.component('Docsearch') || app.component('SearchBox')
        //     if (SearchComponent) {
        //         return h(SearchComponent)
        //     }
        //     return null
        // })

        // handle scrollBehavior with transition
        const scrollBehavior = router.options.scrollBehavior!;
        router.options.scrollBehavior = async (...args) => {
            await useScrollPromise().wait();
            return scrollBehavior(...args);
        };
    },
    setup() {
        setupDarkMode();
        setupSidebarItems();
    },
});
