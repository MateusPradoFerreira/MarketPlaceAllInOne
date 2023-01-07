import { styled } from "../../sititchesConfig";

export const LogoCSS = styled('img',{
    width: 60,
    maxHeight: 60,
    height: 60,
    objectFit: 'cover',
})

export const LogoNameCSS = styled('h1',{
    fontFamily: '$Roboto',
    fontWeight: 700,
    fontSize: 30,
    color: '$Grey50',

    variants: {
        vertical: {
            true: {
                marginLeft: 20,
            }
        }
    }
})