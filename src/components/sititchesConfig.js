import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '@import': "url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')",
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: '$Poppins'
    },
    html: {
        backgroundColor: '$Grey50',
        scrollBehavior: 'smooth',
    },
});


export const { css, styled } = createStitches({
    theme: {
        colors: {
            DarkBluePlus: '#09091D',
            DarkBlue: '#1C1B4D',
            Magenta: '#B80E4B',
            Red400: '#F00731',
            Red300: '#F4133C',
            LightCyan: '#1791B1',
            Grey50: '#FAFAFA',
            Grey100: '#F5F5F5',
            Grey200: '#EEEEEE',
            Grey300: '#E0E0E0',
            Grey500: '#9E9E9E',
            Grey900: '#212121',
            Grey1000: '#141414',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
        },
        fontSizes: {
            1: '11px',
            2: '12px',
            3: '16px',
            4: '18px',
            5: '20px',
            6: '24px',
            7: '30px',
            8: '55px',
            9: '72px',
            10: '90px',
            11: '120px',
            12: '145px',
        },
        fonts: {
            Poppins: 'Poppins, sans-serif',
            Roboto: 'Roboto, sans-serif',
        },
    },
    utils: {
        layout: (value) => ({
            width: '100%',
            maxWidth: value,
            margin: '0 auto',
        })
    }
});