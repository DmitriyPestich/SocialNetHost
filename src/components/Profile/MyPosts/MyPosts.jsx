import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(props) {

    let postElements = props.postData.map( postElem => <Post message={postElem.message} CountLike={postElem.CountLike}/>)
    return (
        <div className={s.container}>
            <h3 className={s.title}>My posts</h3>
            <div className={s.add_post}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postElements}
        </div>
    );
}

export default MyPosts;
