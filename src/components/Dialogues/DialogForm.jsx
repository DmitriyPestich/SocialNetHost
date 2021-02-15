import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import s from "./Dialogues.module.css";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const DialogForm = (props) => {
    return (
        <div className={s.add_massage}>
            <form onSubmit={props.handleSubmit}>
                <Field el={"textarea"} name="message" component={FormControl} validate={[required, maxLength100]}/>
                <button>Add Message</button>
            </form>
        </div>
    )
};

export default compose(reduxForm({form: 'dialogMessage'}))(DialogForm);


