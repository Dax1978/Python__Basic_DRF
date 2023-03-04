export interface IProjectData {
    count: number
    next: string
    previous: string
    results: IProject[]
}

export interface IProject {
    id?: number
    name: string
    repozitory: string
    users: string[]
}