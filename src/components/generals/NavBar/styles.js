import { css } from "../../sititchesConfig"

export const NavBarContainerCSS = css({
    listStyle: 'none',
    display: 'flex',
    gap: 25,
})

export const NavBarAnchorCSS = css({
    color: '$Grey500',
    textTransform: 'uppercase',
    fontFamily: '$Poppins',
    fontSize: 12,
    textDecoration: 'none',
    fontWeight: 600,

    '&:hover': {
        color: '$LightCyan',
    }
})