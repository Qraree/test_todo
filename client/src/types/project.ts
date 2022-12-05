import {ITaskColumn} from "./taskColumn";

export interface IProject {
    _id: string,
    name: string,
    taskColumns: ITaskColumn[]
}