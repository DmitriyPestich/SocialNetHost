import profileReducer, {addPost, deletePost} from "./profile-reducer";
import {act} from "@testing-library/react";
import ReactDOM from "react-dom";
import SocNetApp from "../App";
import React from "react";

let state = {
    post: [
        {id: 1, message: 'Hello', CountLike: 12},
        {id: 2, message: 'Hello, how are you', CountLike: 5},
        {id: 3, message: 'I`m ok', CountLike: 16}
    ]
};

test('new post should be added', () => {
    // 1. test data
    let action = addPost("Hello world");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(4);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPost("Hello world");
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post[3].message).toBe("Hello world");
});

test('the post should be deleted', () => {
    // 1. test data
    let action = deletePost(3);
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(2);
});

test('after deleted length shouldn`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(3);
});
