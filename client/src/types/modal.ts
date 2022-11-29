import {ITask} from "./task";

export enum ModalActionTypes {
    SHOW_MODAL = "SHOW_MODAL",
    HIDE_MODAL = "HIDE_MODAL",
}

export interface ModalState {
    showModal: boolean;
    currentTask: ITask;
}

 export interface showModalAction {
    type: ModalActionTypes.SHOW_MODAL,
    payload: ITask,
}

interface hideModalAction {
    type: ModalActionTypes.HIDE_MODAL
}


export type ModalAction = showModalAction | hideModalAction