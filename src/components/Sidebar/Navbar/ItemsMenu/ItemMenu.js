import React from 'react';
import s from './ItemMenu.module.css';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <div className={s.item}>
            <NavLink to={props.url} activeClassName={s.active}>{props.title}</NavLink>
        </div>
    );
}

export default Navbar;
