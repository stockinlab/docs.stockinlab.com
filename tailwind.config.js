const colors = require('tailwindcss/colors');

module.exports = {
    purge: false,
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
            'cool-gray': colors.blueGray,
        },
        extend: {
            colors: {
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
            },
            maxWidth: {
                '8xl': '88rem',
            },
        },
    },
    variants: {
        borderRadius: ['responsive', 'focus'],
        borderWidth: ['responsive', 'active', 'focus'],
        width: ['responsive', 'focus'],
    },
};
