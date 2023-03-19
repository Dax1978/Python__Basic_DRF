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
        this.delProject = this.delProject.bind(this)
    }

    async delProject() {
        const config = {
            method: 'delete',
            url: 'http://127.0.0.1:8000/todo/projects/' + this.props.number + '/',
            // data: {
            //     response: '',
            //     id: this.props.number,
            //     name: this.state.project,
            //     repozitory: this.state.repozitory,
            //     users: this.props.users,
            // },
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("todoapp_token").slice(1, -1)
            }
        }

        // const res = await axios({
        //     method: 'put',
        //     url: 'http://127.0.0.1:8000/todo/projects/' + this.props.number + '/',
        //     data: {
        //         name: this.state.project,
        //         repozitory: this.state.repozitory,
        //         users: [1,]
        //     },
        //     headers: {
        //         'Authorization': 'Token ' + localStorage.getItem("todoapp_token").slice(1, -1)
        //     }
        // });

        try {
            await axios(config)
                .then((response) => {
                    if (response.data) {
                        this.setState({ response: response.data.results })
                    };
                })
        } catch (err) {
            console.error(err.toJSON());
            return null;
        }
    }

    handleSubmit(event) {
        this.delProject()
        window.location.href = "/project"
        event.preventDefault();     // Отменяет перезагрузку браузера
    }

    render() {
        return (
            <div style={divStyle}>
                <h1>Удалить проект</h1>
                <form onSubmit={this.handleSubmit} style={{
                    width: '500px',
                    borderStyle: 'none',
                    padding: '37px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                    fontSize: '18px',
                    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                }}>

                    <h3>Вы действительно хотите удалить проект?</h3>

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
                        Подтвердить
                    </button>

                </form>
            </div>
        );
    }
}