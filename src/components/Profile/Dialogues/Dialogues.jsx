import React from 'react';
import s from './Dialogues.module.css';

function Dialogues() {
    return (
        <div className={s.dialogues}>
            <div className={s.dialogues_item}>
                <div className={s.dialog}>
                    Kostya
                </div>
                <div className={s.dialog}>
                    Sonya
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
                <div className={s.dialog}>
                    Den
                </div>
                <div className={s.dialog}>
                    Vlad
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>My name is Dima</div>
                <div className={s.message}>Ok</div>
            </div>
        </div>
    );
}

export default Dialogues;
