import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {FormControl} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field el={"input"} name={"email"} type={"text"} component={FormControl} validate={[required]}/>
            </div>
            <div>
                <Field el={"input"} name={"password"} type={"text"} component={FormControl}/>
            </div>
            <div>
                <Field el={"input"} name={"rememberMe"} type={"checkbox"} component={FormControl}/>
            </div>
            <div>
                {!props.isAuth ?
                    <button disabled={props.blocked}>Login</button>
                    :
                    <button disabled={props.blocked}
                            onClick={props.logout}
                    >Logout</button>
                }
            </div>
            { props.error &&
                <div className={s.error}>{props.error}</div>
            }
            {props.blocked ? <div>Loading...</div> : ''}
        </form>
    )
};

export default compose(reduxForm({form: 'login'}))(LoginForm);


