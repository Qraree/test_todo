import {ITask} from "./task";
import {ITaskColumn} from "./taskColumn";

export enum TasksActionTypes {
    CHANGE_STATUS = "CHANGE_STATUS",
}

interface ChangeStatusAction {
    type: TasksActionTypes.CHANGE_STATUS,
    payload: string
}

export type TaskAction = ChangeStatusAction

export interface TasksState {
    tasks: ITask[],
}



