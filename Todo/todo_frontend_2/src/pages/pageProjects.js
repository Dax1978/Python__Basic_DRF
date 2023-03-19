import React from 'react';
import { Sidebar } from '../components/Sidebar';
// import ServiceAuth from '../services/ServiceAuth';
import axios from "axios";
import ProjectTitle from '../components/project/ProjectTitle'
import Modal from '../components/modal/Modal';

import ProjectFormAdd from '../components/project/ProjectFormAdd'
import ProjectFormEdit from '../components/project/ProjectFormEdit'
import ProjectFormDel from '../components/project/ProjectFormDel'

const mainStyle = {
    marginTop: '157px',
    marginLeft: '500px',
    width: window.innerWidth - 777,
    padding: '0px',
    fontSize: '18px',
    color: 'black',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    // boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
};

export class PageProjects extends React.Component {
    constructor(props) {
        super(props);
        this.handleActualProject = this.handleActualProject.bind(this)
        this.handleModalActive = this.handleModalActive.bind(this)
        this.handleModalType = this.handleModalType.bind(this)
        this.state = {
            projects: [],

            actualProjectNumber: -1,
            actualProjectName: '',
            actualProjectRepozitory: '',
            actualProjectUsers: [],

            todos: [],
            modalActive: false,          // Переменная: видимо модальное окно или нет
            modalType: '',
        }

        this.ModalChildren = ''
    }

    handleModalType(modalType) {
        this.setState({ modalType: modalType })
    }

    handleModalActive(modalState) {
        this.setState({ modalActive: modalState })
    };

    componentDidMount() {
        this.getProjects()
        this.getTodos()
    };

    async getProjects() {
        const config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/todo/projects/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("todoapp_token").slice(1, -1)
            }
        }

        try {
            await axios(config)
                .then((response) => {
                    if (response.data) {
                        this.setState({ projects: response.data.results })
                        // return <ProjectList projects={response.data.results} />
                        // console.log('PageProjects:', response.data.results)
                        // return response.data.results
                    };
                })
            // return response.data.results;

        } catch (err) {
            console.error(err.toJSON());
            return null;
        }
    }

    handleActualProject(number, name, repozitory, users) {
        this.setState({ actualProjectNumber: number })
        this.setState({ actualProjectName: name })
        this.setState({ actualProjectRepozitory: repozitory })
        this.setState({ actualProjectUsers: users })
        // console.log('PageProject (id, name, users):', number, name, users)
    }

    async getTodos() {
        const config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/todo/tasks/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("todoapp_token").slice(1, -1)
            }
        }

        try {
            await axios(config)
                .then((response) => {
                    if (response.data) {
                        this.setState({ todos: response.data.results })
                    };
                })
        } catch (err) {
            console.error(err.toJSON());
            return null;
        }
    }

    render() {
        if (this.state.modalType === 'prjFormAdd') {
            this.ModalChildren = <ProjectFormAdd />
        }
        if (this.state.modalType === 'prjFormEdit') {
            this.ModalChildren = <ProjectFormEdit
                number={this.state.actualProjectNumber}
                name={this.state.actualProjectName}
                repozitory={this.state.actualProjectRepozitory}
                users={this.state.actualProjectUsers}
            />
        }
        if (this.state.modalType === 'prjFormDel') {
            this.ModalChildren = <ProjectFormDel
                number={this.state.actualProjectNumber}
            />
        }

        return (
            <div>
                <Sidebar projects={this.state.projects} handleActualProject={this.handleActualProject} />
                <div style={mainStyle}>
                    <ProjectTitle
                        id={this.state.actualProjectNumber}
                        project={this.state.actualProjectName}
                        todos={this.state.todos}
                        handleModalActive={this.handleModalActive}
                        handleModalType={this.handleModalType}
                    />
                </div>
                <Modal
                    active={this.state.modalActive}
                    handleModalActive={this.handleModalActive}
                >
                    {this.ModalChildren}

                    {/* <p>Привет ееееееееееееееееееееееееееее еееееееееееееееееееееееее еееееееееееееееееееееееееееее еееееееееееееееееееее еььььььььььььььььь ььььььььььььььььььььь</p> */}
                </Modal>
            </div >
        );
    }
}