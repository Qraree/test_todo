import {ITask} from "./task";

export enum UiActionTypes {
    DESCRIPTION_EDIT_MODE = "DESCRIPTION_EDIT_MODE",
    DESCRIPTION_SHOW_MODE = "DESCRIPTION_SHOW_MODE",
}

export interface UiState {
    showDescription: boolean;
}

export interface showDescriptionAction {
    type: UiActionTypes.DESCRIPTION_SHOW_MODE,
}

interface editDescriptionAction {
    type: UiActionTypes.DESCRIPTION_EDIT_MODE
}


export type UiAction = showDescriptionAction | editDescriptionAction