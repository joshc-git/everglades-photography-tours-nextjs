import React from 'react';

const Login = (props) => (
    <div id="intro-block">
        <h1>Admin Login</h1>
        <p>Sign in to manage tour details &amp; reservations.</p><br />
        <button className="large-button" onClick={() => props.authenticate('Github')}>Log In With Github</button>
    </div>
);

export default Login;
