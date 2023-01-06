import { styled } from "../../../../../components/sititchesConfig";

export const ForgotPasswordCSS = styled('p',{
    fontFamily: '$Roboto',
    fontWeight: 400,
    fontSize: 11,
    color: '$Grey900',

    variants: {
        error: {
            true: {
                color: '$Red300'
            }
        }
    }
})