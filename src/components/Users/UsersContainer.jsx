import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    changePage,
    follow, uploadUsers,
    setUsers,
    unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getAmountUsersOnPage,
    getCurrentPage,
    getFollowingProccess,
    getIsFetching,
    getTotalCount,
    getUsers
} from "../../redux/users-selector";


class UsersContainer extends PureComponent {

    componentDidMount() {
        console.log('ComponentUsers')
        if (this.props.users.length === 0){
            this.props.uploadUsers(this.props.currentPage, this.props.amountUsersOnPage)
        }
    }

    changePage = (page) => {
        let {pageSize} = this.props.amountUsersOnPage;
        this.props.uploadUsers(page, pageSize)
    };

    render() {
        console.log('Render-Users')
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                amountUsersOnPage={this.props.amountUsersOnPage}
                currentPage={this.props.currentPage}
                changePage={this.changePage.bind(this)}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingProccess={this.props.followingProccess}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    console.log('mapStateToPropsUsers')
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        amountUsersOnPage: getAmountUsersOnPage(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state),
        followingProccess: getFollowingProccess(state),
    }
};

export default compose(
    connect(mapStateToProps, { follow, unfollow, setUsers, uploadUsers })
)(UsersContainer);



