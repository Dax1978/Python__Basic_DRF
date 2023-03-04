import axios from 'axios';
import AuthHeader from './ServiceAuthHeader';

const URL_API = 'http://127.0.0.1:8000/';

class ServicePath {
    unknow() {
        return axios.get(URL_API + '/');
    }

    getUsers() {
        return axios.get(URL_API + 'usr/users/', { headers: AuthHeader() });
    }

    getUser(id: number) {
        return axios.get(URL_API + 'usr/users/' + id.toString() + '/', { headers: AuthHeader() });
    }

    getProjects() {
        return axios.get(URL_API + 'todo/projects/?limit=1000', { headers: AuthHeader() });
    }

    getProject(id: number) {
        return axios.get(URL_API + 'todo/projects/' + id.toString() + '/', { headers: AuthHeader() });
    }

    getTasks() {
        return axios.get(URL_API + 'todo/tasks/?limit=1000', { headers: AuthHeader() });
    }

    getTask(id: number) {
        return axios.get(URL_API + 'todo/tasks/' + id.toString() + '/', { headers: AuthHeader() });
    }
}

export default new ServicePath();