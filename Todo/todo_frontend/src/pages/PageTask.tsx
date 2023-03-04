import { Title } from "../components/Title";
import { useTasks } from "../hooks/tasks";
import { useParams } from "react-router-dom";

export function PageTask() {
    const { tasksdata, projectsdata, usersdata, error, loading, addTask } = useTasks()

    // получаем параметры
    const params = useParams();
    const prodId = params.id;
    const task = tasksdata?.results.find(p => p.id == prodId);

    return (
        <div className='container mx-auto max-w-2xl pt-5 items-center'>
            <Title title={`Задача ID ${prodId}`} />
            <p className="font-mono font-bold text-4xl text-center py-7 underline">{`${task?.title}`}</p>
            <p className="font-mono text-2xl text-center py-2">{`Содержание: ${task?.text}`}</p>
            <p className="font-mono text-2xl text-center py-2">{`Статус: ${task?.status}`}</p>
            <p className="font-mono text-2xl text-center py-2">{`Создана: ${task?.created}`}</p>
            <p className="font-mono text-2xl text-center py-2">{`Обновлена: ${task?.updated}`}</p>
        </div>
    )
}