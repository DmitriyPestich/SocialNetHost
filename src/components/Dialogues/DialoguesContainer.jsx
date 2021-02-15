import React from 'react';
import {addDialogMessage} from "../../redux/dialog-reducer.js";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


/*function DialoguesContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let onAddMessage = () => {
                        store.dispatch(addDialogMessageActionCreator());
                    };
                    let onChangeValue = (text) => {
                        let action = updateNewMessageTextActionCreator(text);
                        store.dispatch(action);
                    };
                    return <Dialogues
                        updateNewMessageText={onChangeValue}
                        addDialogMessage={onAddMessage}
                        newMessageText={state.dialoguesPage.newMessageText}
                        dialogs={state.dialoguesPage.dialogs}
                        messagues={state.dialoguesPage.messagues}
                    />
                }
            }
        </StoreContext.Consumer>

    );


}*/

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialoguesPage.dialogs,
        newMessageText: state.dialoguesPage.newMessageText,
        messagues: state.dialoguesPage.messagues,
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
        addDialogMessage: () => {
            dispatch(addDialogMessageActionCreator());
        }
    }
};*/

const DialoguesContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, {addDialogMessage})
)(Dialogues);


export default DialoguesContainer;
