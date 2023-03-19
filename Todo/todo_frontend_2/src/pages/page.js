import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
// import { Sidebar } from '../components/Sidebar';
import ServiceAuth from '../services/ServiceAuth';

import { PageUnknow } from './pageUnknow';
import { PageAuth } from './pageAuth';
import { PageProjects } from './pageProjects';

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleProjectsChange = this.handleProjectsChange.bind(this);
        this.handleTodosChange = this.handleTodosChange.bind(this);
        this.handleAuthChange = this.handleAuthChange.bind(this);
        this.toggleAuth = this.toggleAuth.bind(this);

        this.state = {
            projects: props.projects,
            todos: props.todos,
            isAuth: false,
        };
    };

    handleProjectsChange(projects) {
        this.setState({ projects: projects });
    };

    handleTodosChange(todos) {
        this.setState({ todos: todos });
    };

    handleAuthChange(newAuth) {
        this.setState(() => ({ isAuth: newAuth }));
    }

    toggleAuth() {
        this.setState(() => { return { isAuth: !this.state.isAuth } });
    };

    componentDidMount() {
        // console.log('Текущее значение авторизации: ', ServiceAuth.isAuth());
        ServiceAuth.isAuth() ? this.handleAuthChange(true) : this.handleAuthChange(false);
    };

    componentDidUpdate() {
        // ServiceAuth.isAuth() ? this.handleAuthChange(true) : this.handleAuthChange(false);
        console.log('Статус авторизации после обновления: ', this.state.isAuth);
    }

    componentWillUnmount() {
        // ServiceAuth.logout();
    };

    render() {
        return (
            <div>
                <Header auth={this.state.isAuth} handleAuthChange={() => this.handleAuthChange(false)} />
                {/* <Sidebar /> */}
                <Routes>
                    <Route path="/" element={<PageUnknow />} />
                    <Route path="/auth" element={<PageAuth />} />
                    <Route path="/project" element={<PageProjects />} />
                </Routes>
            </div>
        );
    }
}