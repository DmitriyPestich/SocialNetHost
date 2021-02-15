import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import Login from "./Login";

let mapStateToProps = (state) => {
    return {
        blocked: state.auth.blocked,
        infoMessage: state.auth.infoMessage,
        isAuth: state.auth.isAuth
    }
};

const LoginContainer = compose(connect(mapStateToProps, {login, logout}))(Login);

export default LoginContainer;
