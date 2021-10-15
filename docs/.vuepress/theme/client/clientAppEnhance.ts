import {defineClientAppEnhance} from '@vuepress/client';
import {useScrollPromise} from './composables';
import OutboundLink from './components/global/OutboundLink.vue';

import './styles/index.scss';

export default defineClientAppEnhance(({app, router}) => {
    // unregister the built-in `<OutboundLink>` to avoid warning
    delete app._context.components.OutboundLink;
    // override the built-in `<OutboundLink>`
    app.component('OutboundLink', OutboundLink);

    // unregister the built-in `<OutboundLink>` to avoid warning
    delete app._context.components.SearchBox;
    // override the built-in `<OutboundLink>`
    // app.component('SearchBox', SearchBox);

    // handle scrollBehavior with transition
    const scrollBehavior = router.options.scrollBehavior!;
    router.options.scrollBehavior = async (...args) => {
        await useScrollPromise().wait();

        return scrollBehavior(...args);
    };
});
