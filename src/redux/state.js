let state = {
    profilePage: {
        post: [
            {id: 1, message: 'Hello', CountLike: 12},
            {id: 2, message: 'Hello, how are you', CountLike: 5},
            {id: 3, message: 'I`m ok', CountLike: 16}
        ]
    },
    dialoguesPage: {
        dialogs: [
            {id: 1, name: 'Kostya'},
            {id: 2, name: 'Sonya'},
            {id: 3, name: 'Roma'},
            {id: 4, name: 'Den'},
            {id: 5, name: 'Vlad'},
            {id: 6, name: 'Ira'}
        ],
        messagues: [
            {id: 1, massage: 'Hi'},
            {id: 2, massage: 'Hello'},
            {id: 3, massage: 'My name is Dima'},
            {id: 4, massage: 'Ok'}
        ]
    },
    sidebarPage: {
        itemMenu: [
            {url: '/profile', title: 'Profile'},
            {url: '/messages', title: 'Messages'},
            {url: '/news', title: 'News'},
            {url: '/music', title: 'Music'},
            {url: '/settings', title: 'Settings'}
        ],
        friends: [
            {id: 1, name: 'Roma'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Den'}
        ]
    }
}
export default state;