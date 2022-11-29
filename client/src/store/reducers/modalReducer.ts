import {ModalAction, ModalActionTypes, ModalState, showModalAction} from "../../types/modal";

export const initialState = {
    showModal: false,
    currentTask: {name: 'Task'}
}


export const modalReducer = (state = initialState, action: ModalAction): ModalState => {
    switch (action.type) {
        case ModalActionTypes.SHOW_MODAL:
            return {
                showModal: true,
                currentTask: action.payload,
            }
        case ModalActionTypes.HIDE_MODAL:
            return {
                showModal: false,
                currentTask: {name: ''}
            }
        default:
            return state
    }
}

