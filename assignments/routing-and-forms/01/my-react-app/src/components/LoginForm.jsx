import { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!email.includes("@")) {
            setMessage(
                "Error: invalid email address.\n"
                + "The email address must include"
                +" the character '@'."
            );
        } else if (password.length < 6) {
            setMessage(
                "Error: invalid password length.\n"
                + "The password must be at least"
                +" 6 characters long."
            );
        } else {
            setMessage("Login successful!");
        }
    }

    return (
        <div style={{textAlign: 'left'}}>
            <form>
                <label>Email</label>
                <input type='email' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <br />
                <label>Password</label>
                <input type='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <br />
                <button type='submit' onClick={handleSubmit}>Login</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default LoginForm;