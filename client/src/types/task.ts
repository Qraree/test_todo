export interface ITask {
    name: string,
    description?: string,
    createdAt?: string,
    deadline?: string,
    priority?: number,
    files?: IFile[],
    status?: string,
    checkList?: checkListItem[]
}

interface IFile {
    name: string
}

interface checkListItem {
    name: string,
    done: boolean
}