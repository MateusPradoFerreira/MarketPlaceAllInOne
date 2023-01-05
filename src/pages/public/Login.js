import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

function Login() {
    const { authenticated, login } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onLoginSubmit(e) {
        e.preventDefault();
        login(username, password);
    }

    return (
        <div>
            Login

            <form onSubmit={onLoginSubmit}>
                {String(authenticated)} <br/>
                <p>username</p>
                <input type='text' name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br/>
                <p>password</p> 
                <input type='password' name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br/>
                <button type="submit">login</button>
            </form>
        </div>
    );
}

export default Login;