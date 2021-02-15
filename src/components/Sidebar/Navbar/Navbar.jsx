import React from 'react';
import s from './Navbar.module.css';
import ItemMenu from "./ItemsMenu/ItemMenu";

function Navbar(props) {
    let itemMenu = props.itemMenu.map(item => <ItemMenu url={item.url} title={item.title} key={item.id}/>);
    return (
        <nav className={s.nav}>
            {itemMenu}
        </nav>
    );
}

export default Navbar;
