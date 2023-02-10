const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './nuxt.config.ts',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            orange: colors.orange,
            yellow: colors.amber,
            lime: colors.lime,
            green: colors.emerald,
            emerald: colors.emerald,
            teal: {
                50: '#edfafa',
                100: '#d5f5f6',
                200: '#afecef',
                300: '#7edce2',
                400: '#16bdca',
                500: '#0694a2',
                600: '#047481',
                700: '#036672',
                800: '#05505c',
                900: '#014451',
            },
            cyan: colors.cyan,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
            'cool-gray': colors.slate,
            zinc: colors.zinc,
        },
        extend: {
            fontSize: {
                '2xs': ['0.75rem', {lineHeight: '1.25rem'}],
                xs: ['0.8125rem', {lineHeight: '1.5rem'}],
                sm: ['0.875rem', {lineHeight: '1.5rem'}],
                base: ['1rem', {lineHeight: '1.75rem'}],
            },
            height: {
                '120': '30rem',
            },
            maxWidth: {
                '5xl': '66rem',
                '8xl': '88rem',
            },
            opacity: {
                '7.5': 0.075,
            },
            typography: ({theme}) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': '#3f3f46',
                        '--tw-prose-headings': '#18181b',
                        '--tw-prose-links': '#10b981',
                        '--tw-prose-links-hover': '#059669',
                        '--tw-prose-links-underline': 'rgba(16,185,129,.3)',
                        '--tw-prose-bold': '#18181b',
                        '--tw-prose-counters': '#71717a',
                        '--tw-prose-bullets': '#d4d4d8',
                        '--tw-prose-hr': 'rgba(24,24,27,.05)',
                        '--tw-prose-quotes': '#18181b',
                        '--tw-prose-quote-borders': '#e4e4e7',
                        '--tw-prose-captions': '#71717a',
                        '--tw-prose-code': '#18181b',
                        '--tw-prose-code-bg': '#f4f4f5',
                        '--tw-prose-code-ring': '#d4d4d8',
                        '--tw-prose-th-borders': '#d4d4d8',
                        '--tw-prose-td-borders': '#e4e4e7',

                        // Base
                        color: 'var(--tw-prose-body)',
                        fontSize: theme('fontSize.sm')[0],
                        lineHeight: theme('lineHeight.7'),
                        maxWidth: null,

                        // Text
                        p: {
                            marginTop: theme('spacing.6'),
                            marginBottom: theme('spacing.6'),
                        },
                        '[class~="lead"]': {
                            fontSize: theme('fontSize.base')[0],
                            ...theme('fontSize.base')[1],
                        },

                        // Lists
                        ol: {
                            listStyleType: 'decimal',
                            marginTop: theme('spacing.5'),
                            marginBottom: theme('spacing.5'),
                            paddingLeft: '1.625rem',
                        },
                        'ol[type="A"]': {
                            listStyleType: 'upper-alpha',
                        },
                        'ol[type="a"]': {
                            listStyleType: 'lower-alpha',
                        },
                        'ol[type="A" s]': {
                            listStyleType: 'upper-alpha',
                        },
                        'ol[type="a" s]': {
                            listStyleType: 'lower-alpha',
                        },
                        'ol[type="I"]': {
                            listStyleType: 'upper-roman',
                        },
                        'ol[type="i"]': {
                            listStyleType: 'lower-roman',
                        },
                        'ol[type="I" s]': {
                            listStyleType: 'upper-roman',
                        },
                        'ol[type="i" s]': {
                            listStyleType: 'lower-roman',
                        },
                        'ol[type="1"]': {
                            listStyleType: 'decimal',
                        },
                        ul: {
                            listStyleType: 'disc',
                            marginTop: theme('spacing.5'),
                            marginBottom: theme('spacing.5'),
                            paddingLeft: '1.625rem',
                        },
                        li: {
                            marginTop: theme('spacing.2'),
                            marginBottom: theme('spacing.2'),
                        },
                        ':is(ol, ul) > li': {
                            paddingLeft: theme('spacing[1.5]'),
                        },
                        'ol > li::marker': {
                            fontWeight: '400',
                            color: 'var(--tw-prose-counters)',
                        },
                        'ul > li::marker': {
                            color: 'var(--tw-prose-bullets)',
                        },
                        '> ul > li p': {
                            marginTop: theme('spacing.3'),
                            marginBottom: theme('spacing.3'),
                        },
                        '> ul > li > *:first-child': {
                            marginTop: theme('spacing.5'),
                        },
                        '> ul > li > *:last-child': {
                            marginBottom: theme('spacing.5'),
                        },
                        '> ol > li > *:first-child': {
                            marginTop: theme('spacing.5'),
                        },
                        '> ol > li > *:last-child': {
                            marginBottom: theme('spacing.5'),
                        },
                        'ul ul, ul ol, ol ul, ol ol': {
                            marginTop: theme('spacing.3'),
                            marginBottom: theme('spacing.3'),
                        },

                        // Horizontal rules
                        hr: {
                            borderColor: 'var(--tw-prose-hr)',
                            borderTopWidth: 1,
                            marginTop: theme('spacing.16'),
                            marginBottom: theme('spacing.16'),
                            maxWidth: 'none',
                            marginLeft: `calc(-1 * ${theme('spacing.4')})`,
                            marginRight: `calc(-1 * ${theme('spacing.4')})`,
                            '@screen sm': {
                                marginLeft: `calc(-1 * ${theme('spacing.6')})`,
                                marginRight: `calc(-1 * ${theme('spacing.6')})`,
                            },
                            '@screen lg': {
                                marginLeft: `calc(-1 * ${theme('spacing.8')})`,
                                marginRight: `calc(-1 * ${theme('spacing.8')})`,
                            },
                        },

                        // Quotes
                        blockquote: {
                            fontWeight: '500',
                            fontStyle: 'italic',
                            color: 'var(--tw-prose-quotes)',
                            borderLeftWidth: '0.25rem',
                            borderLeftColor: 'var(--tw-prose-quote-borders)',
                            quotes: '"\\201C""\\201D""\\2018""\\2019"',
                            marginTop: theme('spacing.8'),
                            marginBottom: theme('spacing.8'),
                            paddingLeft: theme('spacing.5'),
                        },
                        'blockquote p:first-of-type::before': {
                            content: 'open-quote',
                        },
                        'blockquote p:last-of-type::after': {
                            content: 'close-quote',
                        },

                        // Headings
                        h1: {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: '700',
                            fontSize: theme('fontSize.2xl')[0],
                            ...theme('fontSize.2xl')[1],
                            marginBottom: theme('spacing.2'),
                        },
                        h2: {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: '600',
                            fontSize: theme('fontSize.lg')[0],
                            ...theme('fontSize.lg')[1],
                            marginTop: theme('spacing.16'),
                            marginBottom: theme('spacing.2'),
                            scrollMarginTop: theme('spacing.24'),
                        },
                        h3: {
                            color: 'var(--tw-prose-headings)',
                            fontSize: theme('fontSize.base')[0],
                            ...theme('fontSize.base')[1],
                            fontWeight: '600',
                            marginTop: theme('spacing.10'),
                            marginBottom: theme('spacing.2'),
                        },

                        // Media
                        'img, video, figure': {
                            marginTop: theme('spacing.8'),
                            marginBottom: theme('spacing.8'),
                        },
                        'figure > *': {
                            marginTop: '0',
                            marginBottom: '0',
                        },
                        figcaption: {
                            color: 'var(--tw-prose-captions)',
                            fontSize: theme('fontSize.xs')[0],
                            ...theme('fontSize.xs')[1],
                            marginTop: theme('spacing.2'),
                        },

                        // Tables
                        table: {
                            width: '100%',
                            tableLayout: 'auto',
                            textAlign: 'left',
                            marginTop: theme('spacing.8'),
                            marginBottom: theme('spacing.8'),
                            lineHeight: theme('lineHeight.6'),
                        },
                        thead: {
                            borderBottomWidth: '1px',
                            borderBottomColor: 'var(--tw-prose-th-borders)',
                        },
                        'thead th': {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: '600',
                            verticalAlign: 'bottom',
                            paddingRight: theme('spacing.2'),
                            paddingBottom: theme('spacing.2'),
                            paddingLeft: theme('spacing.2'),
                        },
                        'thead th:first-child': {
                            paddingLeft: '0',
                        },
                        'thead th:last-child': {
                            paddingRight: '0',
                        },
                        'tbody tr': {
                            borderBottomWidth: '1px',
                            borderBottomColor: 'var(--tw-prose-td-borders)',
                        },
                        'tbody tr:last-child': {
                            borderBottomWidth: '0',
                        },
                        'tbody td': {
                            verticalAlign: 'baseline',
                        },
                        tfoot: {
                            borderTopWidth: '1px',
                            borderTopColor: 'var(--tw-prose-th-borders)',
                        },
                        'tfoot td': {
                            verticalAlign: 'top',
                        },
                        ':is(tbody, tfoot) td': {
                            paddingTop: theme('spacing.2'),
                            paddingRight: theme('spacing.2'),
                            paddingBottom: theme('spacing.2'),
                            paddingLeft: theme('spacing.2'),
                        },
                        ':is(tbody, tfoot) td:first-child': {
                            paddingLeft: '0',
                        },
                        ':is(tbody, tfoot) td:last-child': {
                            paddingRight: '0',
                        },

                        // Inline elements
                        a: {
                            color: 'var(--tw-prose-links)',
                            textDecoration: 'underline transparent',
                            fontWeight: '500',
                            transitionProperty: 'color, text-decoration-color',
                            transitionDuration: theme('transitionDuration.DEFAULT'),
                            transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
                            '&:hover': {
                                color: 'var(--tw-prose-links-hover)',
                                textDecorationColor: 'var(--tw-prose-links-underline)',
                            },
                        },
                        ':is(h1, h2, h3) a': {
                            color: 'inherit',
                            fontWeight: 'inherit',
                            textDecorationLine: 'none',
                        },
                        strong: {
                            color: 'var(--tw-prose-bold)',
                            fontWeight: '600',
                        },
                        ':is(a, blockquote, thead th) strong': {
                            color: 'inherit',
                        },
                        code: {
                            color: 'var(--tw-prose-code)',
                            borderRadius: theme('borderRadius.lg'),
                            paddingTop: theme('padding.1'),
                            paddingRight: theme('padding[1.5]'),
                            paddingBottom: theme('padding.1'),
                            paddingLeft: theme('padding[1.5]'),
                            boxShadow: 'inset 0 0 0 1px var(--tw-prose-code-ring)',
                            backgroundColor: 'var(--tw-prose-code-bg)',
                            fontSize: theme('fontSize.2xs'),
                        },
                        ':is(a, h1, h2, h3, blockquote, thead th) code': {
                            color: 'inherit',
                        },
                        'h2 code': {
                            fontSize: theme('fontSize.base')[0],
                            fontWeight: 'inherit',
                        },
                        'h3 code': {
                            fontSize: theme('fontSize.sm')[0],
                            fontWeight: 'inherit',
                        },

                        // Overrides
                        ':is(h1, h2, h3) + *': {
                            marginTop: '0',
                        },
                        '> :first-child': {
                            marginTop: '0 !important',
                        },
                        '> :last-child': {
                            marginBottom: '0 !important',
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
