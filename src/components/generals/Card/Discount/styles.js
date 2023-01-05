import { css } from "../../../sititchesConfig";

export const DiscountCSS = css({
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
    width: 'auto',
    height: 30,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 5,
    alignItems: 'center',
    backgroundColor: '$Red400',
    padding: '0 5px',
    borderRadius: 5,
    color: '$Grey50',
    fontWeight: 600,
    fontSize: 14,
    fontFamily: '$Roboto',

    '& img': {
        width: 20,
        height: 20,
    }
})