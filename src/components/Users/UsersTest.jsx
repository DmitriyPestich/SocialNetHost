import React from 'react';
import s from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";

function UsersTest(props) {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;
                props.setUsers(response.data.items);
            });
        }
    }

    let users = props.users.map(user =>
        <User photos={user.photos}
              fullName={user.name}
              status={user.status}
              followed={user.followed}
              id={user.id}
              follow={props.follow}
              unfollow={props.unfollow}
              key={user.id}
        />);

    return (
        <div className={s.users_container}>
            <button onClick={getUsers}>Get users</button>
            {users}
        </div>
    );
}

export default UsersTest;
