import React from 'react';

export default function ProjectList(props) {
    const projects = props.projects

    const handleOnClickProject = (project) => {
        // console.log(`${project.id} ${project.name}`)
        props.handleActualProject(project.id, project.name, project.repozitory, project.users)
    }

    if (props.projects.length > 0) {
        return <ul>
            {projects.map((prj) => <li key={prj.id} style={{
                marginLeft: '37px',
                marginBottom: '17px',
                fontSize: '20px',
                color: '#ffffff',
                fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                listStyleType: 'none',
            }} onClick={() => handleOnClickProject(prj)}>
                {prj.name}
            </li>)}
        </ul>
    } else {
        return <p style={{
            marginLeft: '37px',
            fontSize: '12px',
            color: '#ffffff',
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        }}>В базе отсутствуют проекты ...</p>
    }
}