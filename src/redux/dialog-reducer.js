const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Kostya'},
        {id: 2, name: 'Sonya'},
        {id: 3, name: 'Roma'},
        {id: 4, name: 'Den'},
        {id: 5, name: 'Vlad'},
        {id: 6, name: 'Ira'}
    ],
    messagues: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'My name is Dima'},
        {id: 4, message: 'Ok'}
    ]
};

const dialogReducer = (state = initialState, action) => {


    /*switch (action.type) {
        case ADD_DIALOG_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            let stateCopy = {...state};
            stateCopy.messagues = [...state.messagues];
            stateCopy.messagues.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.messageText;
            return stateCopy;
        }
        default:
            return state;
    }*/

    switch (action.type) {
        case ADD_DIALOG_MESSAGE: {
            return {
                ...state,
                messagues: [...state.messagues, {id: 5, message: action.messageText}],
            };
        }
        default:
            return state;
    }
};

export const addDialogMessage = (messageText) => ({type : ADD_DIALOG_MESSAGE, messageText});

export default dialogReducer;
