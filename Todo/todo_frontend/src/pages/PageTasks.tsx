import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Title } from "../components/Title";
import { ProjectTasks } from "../components/ProjectTasks";
import { useProjects } from "../hooks/projects";


export function PageTasks() {
    const { projectsdata, error, loading, addProject } = useProjects()

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            <Title title="Проекты" />
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {projectsdata?.results.map(project => <ProjectTasks project={project} key={project.id} />)}
        </div>
    )
}