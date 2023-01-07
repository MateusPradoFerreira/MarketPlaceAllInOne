import { styled } from "../../sititchesConfig";

export const DarkText = styled('p',{
    color: '$Grey50',
    fontWeight: 400,
    fontSize: 14,
    fontFamily: '$Roboto',
    marginTop: 30,

    '& span': {
        color: '$LightCyan',
    }
})