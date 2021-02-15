import React from 'react';
import StoreContext from "../../../storeContext";
import Friends from "./widgetFriends";
import {connect} from "react-redux";
import Navbar from "../Navbar/Navbar";

/*function FriendsContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    return <Friends friends={state.sidebarPage.friends}/>
                }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const FriendsContainer  = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
