import {UiAction, UiActionTypes, UiState} from "../../types/ui";


export const initialState = {
    showDescription: true,
    currentProject: '',
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
        default:
            return state
    }
}