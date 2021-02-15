import React from 'react';
import s from './Sidebar.module.css';
import NavbarContainer from "./Navbar/NavbarContainer";
import FriendsContainer from "./WidgetFriends/widgetFriendsContainer";

function Sidebar(props) {
    return (
        <div className={s.sidebar}>
            <NavbarContainer/>
            <FriendsContainer/>
        </div>
    );
}

export default Sidebar;
