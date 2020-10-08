import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <div className={s.logo}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/863px-Apple_logo_black.svg.png'/> </div>
        </header>
    );
}

export default Header;
