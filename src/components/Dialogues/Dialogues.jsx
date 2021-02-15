import React from 'react';
import s from './Dialogues.module.css';
import DialoguesItem from './DialogsItem/DialoguesItem';
import MessagesItem from './MessagesItem/MessagesItem';
import DialogForm from "./DialogForm";

function Dialogues(props) {

    let dialogs = props.dialogs.map(dialog => <DialoguesItem id={dialog.id} name={dialog.name} key={dialog.id}/>);
    let messagues = props.messagues.map(message => <MessagesItem message={message.message} key={message.id}/>);

    let onSubmit = (value) => {
        props.addDialogMessage(value.message)
    };

    return (
        <div className={s.dialogues}>
            <div className={s.dialogues_item}>
                {dialogs}
            </div>
            <div className={s.container}>
                <div className={s.messages}>
                    {messagues}
                </div>
                <DialogForm onSubmit={onSubmit}
                            newMessageText={props.newMessageText}
                            addDialogMessage={props.addDialogMessage}
                />
            </div>
        </div>
    );
}

export default Dialogues;
