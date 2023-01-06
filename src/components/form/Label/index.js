import { styled } from "../../sititchesConfig";

export const Label = styled('label',{
    width: '100%',
    fontWeight: 500,
    textTransform: 'uppercase',
    fontSize: 11,
    fontFamily: '$Poppins',
    color: '$LightCyan',

    variants: {
        error: {
            true: {
                color: '$Red300'
            }
        }
    }
})