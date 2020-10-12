import React from 'react';
import s from './Navbar.module.css';
import ItemMenu from "./ItemsMenu/ItemMenu";

function Navbar(props) {
    let itemMenu = props.state.itemMenu.map(item => <ItemMenu url={item.url} title={item.title}/>);
    return (
        <nav className={s.nav}>
            {itemMenu}
        </nav>
    );
}

export default Navbar;
