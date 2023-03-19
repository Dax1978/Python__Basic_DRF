import React from "react";
import axios from "axios";

const divStyle = {
    // marginTop: '7px',
    marginLeft: '0px',
    // marginLeft: '500px',
    // width: window.innerWidth - 777,
    padding: '0px',
    fontSize: '18px',
    color: 'black',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
};

export default class projectFormAdd extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
        this.changeHandlerProject = this.changeHandlerProject.bind(this)
        this.changeHandlerRepozitory = this.changeHandlerRepozitory.bind(this)
        this.addProject = this.addProject.bind(this)
        this.state = {
            // value: '',
            project: '',
            repozitory: '',
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }

    async addProject() {
        const config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/todo/projects/',
            data: {
                name: this.state.project,
                repozitory: this.state.repozitory,
                users: [1,]
            },
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

    handleSubmit(event) {
        // alert(this.state.project.length)
        if (this.state.project.trim().length === 0) {
            // alert('Отправленное имя: ' + this.state.value);
            alert('Укажите наименование нового проекта!')
        } else {
            this.addProject()
            window.location.href = "/project"
        }
        event.preventDefault();     // Отменяет перезагрузку браузера
    }

    changeHandlerProject(event) {
        this.setState({ project: event.target.value });
        // this.authErrClear();
    }

    changeHandlerRepozitory(event) {
        this.setState({ repozitory: event.target.value });
    }

    render() {
        return (
            <div style={divStyle}>
                <h1>Добавить проект</h1>
                <form onSubmit={this.handleSubmit} style={{
                    width: '500px',
                    borderStyle: 'none',
                    padding: '37px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                    fontSize: '18px',
                    // marginLeft: ((window.innerWidth - 777) - 480) / 2,
                    // marginLeft: ((window.innerWidth) - 480) / 2,
                    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                }}>
                    {/* <label>
                        Новый проект:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label> */}
                    <input
                        type="text"
                        style={{
                            borderWidth: '1px',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            marginBottom: '0.5rem',
                            width: '400px',
                            outlineWidth: '0px',
                            color: 'rgb(0 0 0)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                            fontSize: '18px',
                        }}
                        placeholder="Наименование нового проекта"
                        value={this.state.project}
                        onChange={this.changeHandlerProject}
                    />

                    <input
                        type="text"
                        style={{
                            borderWidth: '1px',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            marginBottom: '0.5rem',
                            width: '400px',
                            outlineWidth: '0px',
                            color: 'rgb(0 0 0)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                            fontSize: '18px',
                        }}
                        placeholder="Репозиторий"
                        value={this.state.repozitory}
                        onChange={this.changeHandlerRepozitory}
                    />

                    <button type="submit"
                        style={{
                            borderWidth: '1px',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            'color': 'rgb(255 255 255)',
                            'backgroundColor': 'rgb(55 65 81)',
                            '--hover-backgroundColor': 'rgb(148 163 184)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                            fontSize: '18px',
                        }}
                        data-hover="button">
                        <style>{`[data-hover="button"]:hover {background-color: rgb(148 163 184) !important;}`}</style>
                        Отправить
                    </button>
                    {/* <input type="submit" value="Отправить" /> */}
                </form>
            </div>
        );
    }
}