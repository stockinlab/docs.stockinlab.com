const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './docs/.vuepress/dist/**/*.{js,ts,md,vue,html}',
        './docs/.vuepress/**/*.{js,ts,md,vue,html}',
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
            green: colors.emerald,
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
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
            'cool-gray': colors.slate,
        },
        extend: {
            maxWidth: {
                '8xl': '88rem',
            },
            top: {
                '8': '2rem',
                '12': '3rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
