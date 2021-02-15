import React from 'react';
import Navbar from "./Navbar";
import StoreContext from "../../../storeContext";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "../../Profile/MyPosts/MyPosts";

/*function NavbarContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    return <Navbar itemMenu={state.sidebarPage.itemMenu}/>
                }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        itemMenu: state.sidebarPage.itemMenu
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const NavbarContainer  = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
