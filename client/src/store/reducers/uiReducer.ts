import {UiAction, UiActionTypes, UiState} from "../../types/ui";


export const initialState = {
    showDescription: false,
}

export const uiReducer = (state = initialState, action: UiAction): UiState => {
    switch (action.type) {
        case UiActionTypes.DESCRIPTION_SHOW_MODE:
            return {
                showDescription: true
            }
        case  UiActionTypes.DESCRIPTION_EDIT_MODE:
            return {
                showDescription: false
            }
        default:
            return state
    }
}