import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {
        return (
            <div className={s.main_content}>
                <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>
                <MyPosts
                    postData={props.postData}
                    addPost={props.addPost}
                />
            </div>
        );
}

export default Profile;
