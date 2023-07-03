import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    breakpoints: {
        xs: '414px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
    fonts: {
        heading: '"Poppins", sans-serif',
        body: '"Poppins", sans-serif',
    },
    semanticTokens: {
        colors: {
            'chakra-body-text': {
                _light: '#515458',
            },
            primary: {
                _light: '#038103',
            },
        },
    },
    components: {
        Button: {
            variants: {
                primary: props => ({
                    background: 'primary',
                    color: '#FFF',
                    _hover: {
                        background: '#00005dc9',

                        _disabled: {
                            background: 'primary',
                        },
                    },
                }),
            },
        },
        Link: {
            baseStyle: {
                _hover: {
                    textDecoration: 'none',
                },
            },
        },
    },
})

export default theme
