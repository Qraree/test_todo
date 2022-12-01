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
    checkList: checkListItem[],
    projectId: string,
    comments: IComment[]
}

interface IComment {
    content: string,
    replies?: IComment[]
}

export interface IFile {
    name: string,
    added: DateTime,
}

interface checkListItem {
    name: string,
    done: boolean
}