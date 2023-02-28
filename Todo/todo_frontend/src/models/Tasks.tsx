export interface ITaskData {
    count: number
    next: string
    previous: string
    results: ITask[]
}

export interface ITask {
    id?: number
    title: string
    text: string
    status: boolean
    created: string
    updated: string
    project: number
}