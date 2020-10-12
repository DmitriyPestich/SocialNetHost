import React from 'react';
import s from '../widgetFriends.module.css';

function Friend(props) {

    return (
        <div className={s.friend}>
            <img className={s.avatar} src="https://99px.ru/sstorage/56/2019/09/mid_324597_239159.jpg"/>
            <h5 className={s.name}>{props.name}</h5>
        </div>
    );
}

export default Friend;