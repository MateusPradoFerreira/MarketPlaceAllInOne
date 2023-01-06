import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth";
import { LoginMain } from "./LoginMain";
import { Container } from "../../../components/containers/Container";
import { LoginComplement } from "./LoginComplement";
import { LoginForm } from "./LoginForm";
import { Label } from "../../../components/form/Label";
import { Input } from "../../../components/form/Input";
import { Button } from "../../../components/generals/Button";
import { LoginFormTitle } from "./LoginForm/LoginFormTitle";
import ForgotPassword from "./LoginForm/ForgotPassword";
import LoginFormGoogle from "./LoginForm/LoginFormGoogle";
import { LoginFormSingUp } from "./LoginForm/LoginFormSingUp";

function Login() {
    const { login, isError, setIsError } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onLoginSubmit(e) {
        e.preventDefault();
        login(username, password);
    }

    var errorMessage = "Username or Password incorrect!";

    if (username === '' || password === '') {
        var errorMessage = "All fields must be filled in";
    }

    return (
        <LoginMain>
            <Container css={{ display: 'flex', borderRadius: 10, overflow: 'hidden' }}>
                <LoginComplement>

                </LoginComplement>
                <LoginForm onSubmit={onLoginSubmit}>
                    <LoginFormTitle> Welcome Back! </LoginFormTitle>

                    <Label error={isError}> username </Label>
                    <Input error={isError} type='text' name="username" placeholder="username" value={username} onChange={(e) => { setIsError(false); setUsername(e.target.value) }} />
                    <Label error={isError}> password </Label>
                    <Input error={isError} type='password' name="password" placeholder="password" value={password} onChange={(e) => { setIsError(false); setPassword(e.target.value) }} />

                    <ForgotPassword error={isError}> {errorMessage}  </ForgotPassword>

                    <Container css={{ marginTop: 35, display: 'flex', justifyContent: 'center' }}>
                        <Button css={{ width: 200, margin: '0 auto' }} type="submit" color='cyan' > Sign In </Button>
                    </Container>

                    <LoginFormGoogle onClick={() => { }} />
                    <LoginFormSingUp css={{ marginTop: 15 }}>
                        Doesn't have an account? <span> Sign Up </span>
                    </LoginFormSingUp>
                </LoginForm>
            </Container>
        </LoginMain>
    );
}

export default Login;