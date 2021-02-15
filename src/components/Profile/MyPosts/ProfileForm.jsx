import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import s from "./MyPosts.module.css";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const ProfileForm = (props) => {
    return (
        <div className={s.add_post}>
            <form onSubmit={props.handleSubmit}>
                <Field el={"textarea"} name="profileMessage" component={FormControl} validate={[required, maxLength10]}/>
                <button>Add post</button>
            </form>
        </div>
    )
};

export default compose(reduxForm({form: 'profile'}))(ProfileForm);


