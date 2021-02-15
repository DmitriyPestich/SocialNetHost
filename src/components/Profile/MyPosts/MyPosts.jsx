import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import ProfileForm from "./ProfileForm";

function MyPosts(props) {

    let postElements = props.postData.map( postElem => <Post message={postElem.message} CountLike={postElem.CountLike} key={postElem.id}/>);

    let onSubmit = (value) => {
        props.addPost(value.profileMessage)
    };

    return (
        <div className={s.container}>
            <h3 className={s.title}>My posts</h3>
            <ProfileForm onSubmit={onSubmit}/>
            {postElements}
        </div>
    );
}

export default MyPosts;
