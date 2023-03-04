import axios, { AxiosError } from 'axios'
import { createElement as e, useEffect, useState } from 'react'
import { IProjectData, IProject } from '../models/Project'
import { IUserData } from '../models/User';

export function useProjects() {
    const [projectsdata, setProjectsdata] = useState<IProjectData>()
    const [usersdata, setUsersdata] = useState<IUserData>()
    const [projects, setProjects] = useState<IProject[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProject(product: IProject) {
        setProjects(prev => [...prev, product])
    }

    async function fetchProjects() {
        try {
            setError('')
            setLoading(true);
            const response_prj = await axios.get<IProjectData>('http://127.0.0.1:8000/todo/projects/');
            const response_usr = await axios.get<IUserData>('http://127.0.0.1:8000/usr/users/');
            setProjectsdata(response_prj.data)
            setUsersdata(response_usr.data)
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false);
            setError(error.message)
        }
    }

    useEffect(() => { fetchProjects() }, [])

    return { projectsdata, usersdata, error, loading, addProject }
}