import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useTasks } from "../hooks/tasks"
import { IProject } from "../models/Project"
import { ITask } from "../models/Tasks"
import { TaskLink } from "./TaskLink"

interface ProjectProps {
    project: IProject
}

export function ProjectTasks({ project }: ProjectProps) {
    const [tasksshow, setTasksshow] = useState(false)
    const btnBgClassName = tasksshow ? 'bg-gray-400' : 'bg-gray-700'
    const btnClasses = ['py-2 px-4 border rounded text-white', btnBgClassName]
    const { tasksdata, error, loading, addTask } = useTasks()

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-4 shadow-lg max-w-none w-400">
            {/* <p className="font-mono">ID: {project.id}</p> */}
            <p className="font-mono font-bold">Проект: {project.name}</p>

            <button className={btnClasses.join(' ')}
                onClick={() => setTasksshow(prev => !prev)}>
                {tasksshow ? 'Скрыть задачи' : 'Показать задачи'}
                {/* <NavLink to={`/projects/${project.id}`}>Задачи проекта</NavLink> */}
            </button>

            {tasksshow && <div>
                {tasksdata?.results.map(task =>
                    (project.id === task.project) &&
                    <TaskLink idnum={Number(task.id)} title={task.title} />
                )}
            </div>}

        </div >
    )
}