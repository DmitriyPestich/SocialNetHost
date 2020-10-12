import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={s.main_content}>
            <ProfileInfo/>
            <MyPosts postData={props.state.post}/>
        </div>
    );
}

export default Profile;
