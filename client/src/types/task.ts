import {DateTime} from "luxon";

export interface ITask {
    _id: string,
    name: string,
    description: string,
    createdAt: DateTime,
    deadline: DateTime,
    priority: number,
    files: IFile[],
    status: string,
    checkList: ICheckListItem[],
    projectId: string,
    comments: IComment[]
}

export interface IComment {
    _id: string
    content: string,
    replies: IComment[],
    deleted: boolean,
    createdAt: DateTime,
}

export interface IFile {
    _id: string,
    name: string,
    added: DateTime,
}

export interface ICheckListItem {
    _id: string;
    name: string,
    done: boolean
}

export enum TaskStatus {
    QUEUE = "QUEUE",
    DEVELOPMENT = "DEVELOPMENT",
    DONE = "DONE",
}