import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { IProject } from "../models/Project"

interface ProjectProps {
    project: IProject
}

export function Project({ project }: ProjectProps) {
    const [path, setPath] = useState('')
    // const btnBgClassName = users ? 'bg-gray-400' : 'bg-gray-700'
    // const btnClasses = ['py-2 px-4 border rounded text-white', btnBgClassName]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-4 shadow-lg max-w-none w-400">
            <p className="font-mono">ID: {project.id}</p>
            <p className="font-mono font-bold">Проект: {project.name}</p>

            <button className="py-2 px-4 border rounded text-white bg-gray-700">
                <NavLink to={`/projects/${project.id}`}>Детали проекта</NavLink>
            </button>

        </div >
    )
}