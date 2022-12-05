import {ITask} from "./task";

export interface ITaskColumn {
    id: number,
    name: string,
    status: string,
    items: ITask[]
}

