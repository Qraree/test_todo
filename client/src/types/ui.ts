import {ITask} from "./task";

export enum UiActionTypes {
    DESCRIPTION_EDIT_MODE = "DESCRIPTION_EDIT_MODE",
    DESCRIPTION_SHOW_MODE = "DESCRIPTION_SHOW_MODE",
    SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT",
}

export interface UiState {
    showDescription: boolean;
    currentProject: string;
}

export interface showDescriptionAction {
    type: UiActionTypes.DESCRIPTION_SHOW_MODE,
}

interface editDescriptionAction {
    type: UiActionTypes.DESCRIPTION_EDIT_MODE
}

interface setCurrentProject {
    type: UiActionTypes.SET_CURRENT_PROJECT,
    payload: string,
}

export type UiAction = showDescriptionAction | editDescriptionAction | setCurrentProject