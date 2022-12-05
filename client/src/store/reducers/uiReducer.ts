import {UiAction, UiActionTypes, UiState} from "../../types/ui";


export const initialState = {
    showDescription: true,
    currentProject:{
        _id: '2',
        name: 'hello',
        taskColumns: []
    },
    currentBoard: null,
    currentTask: null,
}

export const uiReducer = (state = initialState, action: UiAction): UiState => {
    switch (action.type) {
        case UiActionTypes.DESCRIPTION_SHOW_MODE:
            return {
                ...state,
                showDescription: true
            }
        case  UiActionTypes.DESCRIPTION_EDIT_MODE:
            return {
                ...state,
                showDescription: false
            }
        case UiActionTypes.SET_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: action.payload
            }
        case UiActionTypes.SET_CURRENT_BOARD:
            return {
                ...state,
                currentBoard: action.payload
            }
        case UiActionTypes.SET_CURRENT_TASK:
            return {
                ...state,
                currentTask: action.payload
            }
        default:
            return state
    }
}