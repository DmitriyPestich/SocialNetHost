import User from "./User/User";
import s from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";


let Users = (props) => {
    let users = props.users.map(user =>
        <User dataUser={user}
              {...props}
        />);

    return (
        <div>
            <Paginator totalCount={props.totalCount}
                       amountUsersOnPage={props.amountUsersOnPage}
                       currentPage={props.currentPage}
                       changePage={props.changePage}
                       step={10}
                       visiblePages={4}
            />
            <div className={s.users_container}>
                {users}
            </div>
        </div>
    );
};

export default Users;
