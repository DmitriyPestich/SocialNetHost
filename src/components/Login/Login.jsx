import React from 'react';
import LoginForm from "./LoginForm";

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={props.login}
                       logout={props.logout}
                       blocked={props.blocked}
                       infoMessage={props.infoMessage}
                       isAuth={props.isAuth}/>
        </div>
    );
};

export default Login;
