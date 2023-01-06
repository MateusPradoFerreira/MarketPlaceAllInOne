import { Container } from "../../../../../components/containers/Container";
import { Button } from "../../../../../components/generals/Button";
import { LoginFormGoogleCSS } from "./styles";

export default function LoginFormGoogle({ onClick }) {
    return (
        <Container css={{ marginTop: 35, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={() => onClick()} type="button" style="icon" color="none">
                <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="icon" />
            </Button>
            <LoginFormGoogleCSS onClick={() => onClick()}> Sing in with Google? </LoginFormGoogleCSS>
        </Container>
    );
}