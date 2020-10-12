import React from 'react';
import s from '../Dialogues.module.css';

function MessagesItem(props) {
    return (
        <div className={s.message}><p>{props.message}</p></div>
    );
}


export default MessagesItem;
