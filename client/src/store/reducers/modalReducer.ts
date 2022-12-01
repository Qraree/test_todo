import {ModalAction, ModalActionTypes, ModalState, showModalAction} from "../../types/modal";
import {DateTime} from "luxon";

export const initialState = {
    showModal: false,
    currentTask: {
        _id: '1',
        name: 'Task',
        description: 'Just a simple description for the task',
        createdAt: DateTime.now(),
        deadline: DateTime.now(),
        priority: 1,
        files: [{name: 'File.1', added: DateTime.now()}, {name: 'File.2', added: DateTime.now()}],
        status: 'QUEUE',
        checkList: [{
            name: 'Call mom',
            done: false
        },
            {
                name: 'call DAd',
                done: true
            }],
        projectId: '1',
        comments: [
            {content: 'Bla-bla-bla', replies: [{content: 'You okay?'}]},
            {content: 'I will do this task!'}
        ]

    },
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
                currentTask: {...state.currentTask, name: ''}
            }
        default:
            return state
    }
}

