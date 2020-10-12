import React from 'react';
import s from './Sidebar.module.css';
import Navbar from "./Navbar/Navbar"
import WidgetFriends from "./WidgetFriends/widgetFriends"

function Sidebar(props) {
    return (
        <div className={s.sidebar}>
            <Navbar state={props.state}/>
            <WidgetFriends state={props.state}/>
        </div>
    );
}

export default Sidebar;
