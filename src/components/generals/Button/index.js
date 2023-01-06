import { styled } from "../../sititchesConfig";

export const Button = styled('button', {
    cursor: 'pointer',

    variants: {
        style: {
            icon: {
                width: 24,
                height: 24,
                backgroundColor: 'transparent',
                border: 'none',
                overflow: 'hidden',

                'img': {
                    width: '100%',
                    height: '100%',
                },

                '&:hover': {
                    border: 'none',
                }
            },
            text: {
                padding: '10px 30px',
                fontSize: 12,
                borderRadius: 100,
                fontWeight: 600,
                fontFamily: '$Poppins',
            },
        },
        color: {
            none: {
                backgroundColor: 'transparent',
                border: 'none',
            },
            grey: {
                backgroundColor: 'transparent',
                border: '2px solid $Grey500',
                color: '$Grey500',

                '&:disabled': {
                    backgroundColor: 'transparent',
                    border: '2px solid $Grey900',
                    color: '$Grey900',
                    cursor: 'auto',

                    '&:hover': {
                        backgroundColor: 'transparent',
                        border: '2px solid $Grey900',
                        color: '$Grey900',
                    }
                },

                '&:hover': {
                    backgroundColor: 'transparent',
                    border: '2px solid $Grey300',
                    color: '$Grey300',
                }
            },
            darkGrey: {
                backgroundColor: 'transparent',
                border: '2px solid $Grey900',
                color: '$Grey900',

                '&:hover': {
                    backgroundColor: '$Grey900',
                    border: '2px solid $Grey900',
                    color: '$Grey900',
                }
            },
            cyan: {
                backgroundColor: '$LightCyan',
                border: '2px solid $LightCyan',
                color: '$Grey50',

                '&:disabled': {
                    backgroundColor: 'transparent',
                    border: '2px solid $Grey900',
                    color: '$Grey900',
                    cursor: 'auto',

                    '&:hover': {
                        backgroundColor: 'transparent',
                        border: '2px solid $Grey900',
                        color: '$Grey900',
                    }
                },

                '&:hover': {
                    backgroundColor: 'transparent',
                    border: '2px solid $LightCyan',
                    color: '$LightCyan',
                }
            },
            magenta: {
                backgroundColor: '$Magenta',
                border: '2px solid $Magenta',
                color: '$Grey50',

                '&:disabled': {
                    backgroundColor: 'transparent',
                    border: '2px solid $Grey900',
                    color: '$Grey900',
                    cursor: 'auto',

                    '&:hover': {
                        backgroundColor: 'transparent',
                        border: '2px solid $Grey900',
                        color: '$Grey900',
                    }
                },

                '&:hover': {
                    backgroundColor: 'transparent',
                    border: '2px solid $Magenta',
                    color: '$Magenta',
                }
            },
        }
    },

    defaultVariants: {
        style: 'text',
        color: 'grey',
    },
})