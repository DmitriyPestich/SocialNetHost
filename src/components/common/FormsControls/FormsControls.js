import React from "react";
import s from "./FormsControls.module.css";

export const FormControl = ({el, input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>{React.createElement(el, {...input, ...props}, null)}</div>
            {  hasError && <span>{error}</span> }
        </div>
    )
}

