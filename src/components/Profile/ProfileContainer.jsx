import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPost,
    getProfileStatus,
    getUserProfile,
    updateProfileStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {


    componentDidMount() {
        console.log('ComponentProfile')
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.curentUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        console.log('RenderProfile')
        if (!this.props.profile) {
            return <Preloader />
        }else {
            return (
                <Profile {...this.props}/>
            );
        }
    }
}

let mapStateToProps = (state) => {
    console.log('mapStateToPropsProfile')
    return {
        fake: state.usersPage.fake,
        postData: state.profilePage.post,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        curentUserId: state.auth.userId,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {
        addPost,
        getUserProfile,
        getProfileStatus,
        updateProfileStatus,
    })
)(ProfileContainer);

