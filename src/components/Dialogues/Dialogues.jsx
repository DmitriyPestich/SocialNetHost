import React from 'react';
import s from './Dialogues.module.css';
import DialoguesItem from './DialogsItem/DialoguesItem';
import MessagesItem from './MessagesItem/MessagesItem';


function Dialogues(props) {

    let dialogs = props.state.dialogs.map(dialog => <DialoguesItem id={dialog.id} name={dialog.name}/>);
    let messagues = props.state.messagues.map(messege => <MessagesItem message={messege.massage}/>);

    return (
        <div className={s.dialogues}>
            <div className={s.dialogues_item}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messagues}
            </div>
        </div>
    );
}

export default Dialogues;
