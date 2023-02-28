import { Link } from "react-router-dom"

interface TaskLlinkProps {
    idnum: number
    title: string
}

export function TaskLink({ idnum, title }: TaskLlinkProps) {
    return (
        <p className="justify-items-start"><Link className="text-left" to={`/tasks/${idnum}`}>{title}</Link></p>
    )
}