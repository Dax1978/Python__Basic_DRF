// import React from 'react';
import axios from "axios";
import ProjectList from './ProjectList';

function ProjectListSidebar() {
    var config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/todo/projects/',
        headers: {
            'Authorization': 'Token ' + localStorage.getItem("todoapp_token").slice(1, -1)
        }
    };

    try {
        axios(config)
            .then((response) => {
                if (response.data) {
                    return <ProjectList projects={response.data.results} />
                    // console.log(response.data.results)
                    // return response.data.results
                };
            })
        // return response.data.results;

    } catch (err) {
        console.error(err.toJSON());
        return null;
    }
}

export default ProjectListSidebar