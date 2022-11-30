export interface ITask {
    name: string,
    description?: string,
    createdAt?: Date,
    deadline?: string,
    priority?: number,
    files?: IFile[],
    status?: string,
    checkList?: checkListItem[],
    projectId?: number,
    comments?: IComment[]
}

interface IComment {
    content: string,
    replies?: IComment[]
}

interface IFile {
    name: string
}

interface checkListItem {
    name: string,
    done: boolean
}