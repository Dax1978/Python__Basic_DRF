import { Title } from "../components/Title";
import { Project } from "../components/Project";
import { useProjects } from "../hooks/projects";
import { IProject } from "../models/Project";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function PageProject() {
    const { projectsdata, usersdata, error, loading, addProject } = useProjects()

    // получаем параметры
    const params = useParams();
    const prodId = params.id;
    const project = projectsdata?.results.find(p => p.id == prodId);
    const users_name = usersdata?.results;

    // let users_obj = {};
    // project?.users.forEach(function (item, i) {
    //     let key = Number(item);
    //     let value = users_name?.find(p => p.id == Number(item))?.username;
    //     console.log(key, value)
    //     Object.defineProperty(users_obj, key, { value: value })
    // })
    let users_lst = [] as Array<string>;
    project?.users.forEach(function (item) {
        const value = users_name?.find(p => p.id == Number(item))?.username.toString();
        users_lst.push(String(value));
    })

    return (
        <div className='container mx-auto max-w-2xl pt-5 items-center'>
            <Title title={`Проект ID ${prodId}`} />
            <p className="font-mono font-bold text-4xl text-center py-7 underline">{`${project?.name}`}</p>
            <p className="font-mono text-2xl text-center py-2">{`Репозиторий: ${project?.repozitory}`}</p>
            {/* <p className="font-mono font-bold text-2xl text-center py-2">{`Пользователи: ${project?.users.join(', ')}`}</p> */}
            <p className="font-mono text-2xl text-center py-2">{`Пользователи: ${users_lst.join(', ')}`}</p>
        </div>
    )
}