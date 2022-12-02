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
    replies?: IComment[]
}

export interface IFile {
    name: string,
    added: DateTime,
}

export interface ICheckListItem {
    _id: string;
    name: string,
    done: boolean
}