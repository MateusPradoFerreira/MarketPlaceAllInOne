import { styled } from "../../../../components/sititchesConfig";

export const LoginForm = styled('form', {
    width: 550,
    padding: 50,
    backgroundColor: '$Grey100',
    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus': {
        '-webkit-box-shadow': '0 0 0px 1000px #F5F5F5 inset',
        transition: 'background - color 5000s ease -in -out 0s',
        fontWeight: 300,
        fontSize: 16,
        fontFamily: '$Roboto',
    }
})