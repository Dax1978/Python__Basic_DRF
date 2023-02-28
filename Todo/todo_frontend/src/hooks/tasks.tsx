import axios, { AxiosError } from 'axios'
import { createElement as e, useEffect, useState } from 'react'
import { IProjectData, IProject } from '../models/Project'
import { IUserData } from '../models/User'
import { ITaskData, ITask } from '../models/Tasks'

export function useTasks() {
    const [tasksdata, setTasksdata] = useState<ITaskData>()
    const [projectsdata, setProjectsdata] = useState<IProjectData>()
    const [usersdata, setUsersdata] = useState<IUserData>()
    const [tasks, setTasks] = useState<ITask[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addTask(product: ITask) {
        setTasks(prev => [...prev, product])
    }

    async function fetchTasks() {
        try {
            setError('')
            setLoading(true);
            const response_tsk = await axios.get<ITaskData>('http://127.0.0.1:8000/todo/tasks/?limit=1000');
            const response_prj = await axios.get<IProjectData>('http://127.0.0.1:8000/todo/projects/?limit=1000');
            const response_usr = await axios.get<IUserData>('http://127.0.0.1:8000/usr/users/?limit=1000');
            setTasksdata(response_tsk.data)
            setProjectsdata(response_prj.data)
            setUsersdata(response_usr.data)
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false);
            setError(error.message)
        }
    }

    useEffect(() => { fetchTasks() }, [])

    return { tasksdata, projectsdata, usersdata, error, loading, addTask }
}