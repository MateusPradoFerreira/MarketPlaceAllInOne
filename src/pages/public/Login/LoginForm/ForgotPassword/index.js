import { Container } from "../../../../../components/containers/Container";
import { ForgotPasswordCSS } from "./styles";

function ForgotPassword({ action, error, children }) {
    return (
        <Container css={{ display: 'flex', justifyContent: 'space-between' }} >
            <ForgotPasswordCSS error>
                {error ? children : ''}
            </ForgotPasswordCSS>
            <ForgotPasswordCSS onClick={() => action()} css={{ cursor: 'pointer' }}>
                forgot your password?
            </ForgotPasswordCSS>
        </Container>
    );
}

export default ForgotPassword;