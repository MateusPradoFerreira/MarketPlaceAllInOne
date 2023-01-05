import { css } from "../../sititchesConfig";

export const CardContainerCSS = css({
    width: 250,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0,
})

export const CardImageCSS = css({
    width: 250,
    height: 180,
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '5px 5px 0 0',
})

export const CardNameCSS = css({
    fontSize: 14,
    fontFamily: '$Roboto',
    fontWeight: 400,
    color: '$Grey900',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
})

export const CardTagCSS = css({
    fontSize: 12,
    color: '$Grey500',
    fontFamily: '$Roboto',
    fontWeight: 400,
})

export const CardPriceCSS = css({
    fontSize: 14,
    color: '$LightCyan',
    fontWeight: 500,
    fontFamily: '$Poppins',
    marginLeft: 10,
})

export const CardContentCSS = css({
    width: '100%',
    padding: 15,
    paddingBottom: 20,
    border: '1px solid $Grey500',
    borderTop: 'none',
    borderRadius: '0 0 5px 5px',
    margin: 0,
    backgroundColor: '$Grey50'
})

