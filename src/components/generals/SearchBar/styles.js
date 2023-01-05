import { css, styled } from "../../sititchesConfig";

export const SearchBarCSS = styled('div',{
    display: 'flex',
    border: '2px solid $Grey500',
    borderRadius: 100,
    padding: '10px 20px',

    '& img': {
        width: 24,
        height: 24,
        cursor: 'pointer',
    }
})

export const SearchBarInputCSS = css({
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    fontSize: 12,
    color: '$Grey900',

    '&:placeholder': {
        color: '$Grey500',
    }
})