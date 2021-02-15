export const getUsers = (state) => {
    return state.usersPage.users;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getAmountUsersOnPage = (state) => {
    return state.usersPage.amountUsersOnPage;
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingProccess = (state) => {
    return state.usersPage.followingProccess;
}
