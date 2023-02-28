export interface IUserData {
    count: number
    next: string
    previous: string
    results: IUser[]
}

export interface IUser {
    id?: number
    username: string
    email: string
    password: string
}