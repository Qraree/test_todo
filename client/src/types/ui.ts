import {ITask} from "./task";
import {IProject} from "./project";

export enum UiActionTypes {
    DESCRIPTION_EDIT_MODE = "DESCRIPTION_EDIT_MODE",
    DESCRIPTION_SHOW_MODE = "DESCRIPTION_SHOW_MODE",
    SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT",
    SET_CURRENT_BOARD = "SET_CURRENT_BOARD",
    SET_CURRENT_TASK = "SET_CURRENT_TASK"
}

export interface UiState {
    showDescription: boolean;
    currentProject: IProject;
    currentBoard: any,
    currentTask: any,
}

export interface showDescriptionAction {
    type: UiActionTypes.DESCRIPTION_SHOW_MODE,
}

interface editDescriptionAction {
    type: UiActionTypes.DESCRIPTION_EDIT_MODE
}

interface setCurrentProject {
    type: UiActionTypes.SET_CURRENT_PROJECT,
    payload: IProject,
}

interface setCurrentBoard {
    type: UiActionTypes.SET_CURRENT_BOARD,
    payload: any,
}

interface setCurrentTask {
    type: UiActionTypes.SET_CURRENT_TASK,
    payload: any,
}

export type UiAction = showDescriptionAction | editDescriptionAction | setCurrentProject | setCurrentBoard | setCurrentTask