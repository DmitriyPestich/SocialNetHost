import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.container}>
            My posts
            <div className={s.title}>New posts</div>
            <Post message='Hello' CountLike='0'/>
            <Post message='Hello, how are you' CountLike='5'/>
            <Post message='I`m ok' CountLike='14'/>
        </div>
    );
}

export default MyPosts;
