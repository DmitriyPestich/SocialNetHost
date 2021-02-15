import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.logo}>SocNet</div>
            {props.isAuth ?
                <div>
                    <span className={s.login}>{props.login}</span>
                    <button onClick={props.logout}>Logout</button>
                </div>
                :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </header>
    );
}

export default Header;
