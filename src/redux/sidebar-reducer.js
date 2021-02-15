
let initialState = {
    itemMenu: [
        {url: '/profile', title: 'Profile'},
        {url: '/messages', title: 'Messages'},
        {url: '/users', title: 'Users'},
        {url: '/login', title: 'Login'},
        {url: '/news', title: 'News'},
        {url: '/music', title: 'Music'},
        {url: '/settings', title: 'Settings'}
    ],
    friends: [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Den'}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;
