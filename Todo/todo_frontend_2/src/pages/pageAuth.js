import React from 'react';
import { ErrorMessage } from '../components/base/ErrorMessage';
import ServiceAuth from '../services/ServiceAuth';

const authStyle = {
    marginTop: '157px',
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

// const autorizationData = {
//     username: '',
//     password: ''
// }

export class PageAuth extends React.Component {
    constructor(props) {
        super(props);

        this.authErr = this.authErr.bind(this);
        this.authErrClear = this.authErrClear.bind(this);
        this.changeHandlerLogin = this.changeHandlerLogin.bind(this);
        this.changeHandlerPassword = this.changeHandlerPassword.bind(this);
        this.resultAuth = this.resultAuth.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            redirect: null,
            username: '',
            password: '',
            error_login: '',
            error_password: '',
            auth: false,
        }
    };

    authErr() {
        this.setState({ error_login: 'Проверьте имя пользователя', error_password: 'Проверьете пароль' });
    };
    authErrClear() {
        this.setState({ error_login: '', error_password: '' });
    };

    changeHandlerLogin(event) {
        // console.log('login change:', event);
        this.setState({ username: event.target.value });
        this.authErrClear();
    };

    changeHandlerPassword(event) {
        this.setState({ password: event.target.value });
        this.authErrClear();
    };


    resultAuth() {
        const result = ServiceAuth.isAuth();
        if (result) {
            console.log('Авторизация прошла хорошо');
            this.authErrClear();
        } else {
            console.log('Ошибка авторизации');
            this.authErr();
        };
    };

    submitHandler = async (event) => {
        this.setState({ error_login: '', error_password: '' });
        this.authErrClear();

        event.preventDefault();
        // console.log(event.target[0].value);
        // console.log(event.target[1].value);
        // console.log(this.state.username);
        // console.log(this.state.password);        

        if (this.state.username.trim().length === 0) {
            this.setState({ error_login: 'Имя пользователя не может быть пустым' });
            return;
        };
        if (this.state.password.trim().length === 0) {
            this.setState({ error_password: 'Пароль не может быть пустым' });
            return;
        };

        const res = ServiceAuth.login(this.state.username, this.state.password);

        res.then(function (response) {
            try { // statements to try try { // statements to try
                if (response.status === 200) {
                    // console.log('submitHandler', response.status);
                    // console.log('submitHandler', response.statusText);
                    window.location.href = "/project";
                    // this.props.handleAuthChange(true);
                    // return;
                };
            }
            catch (e) {
                // console.log('Ошибка авторизации');
            };
        });
        this.resultAuth();
    };

    render() {

        return (
            <div style={authStyle}>
                <h1>Авторизация</h1>
                <form
                    style={{
                        width: '400px',
                        borderStyle: 'none',
                        padding: '37px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                        fontSize: '18px',
                        // marginLeft: ((window.innerWidth - 777) - 480) / 2,
                        marginLeft: ((window.innerWidth) - 480) / 2,
                        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                    }}
                    onSubmit={this.submitHandler}>

                    <input
                        type="text"
                        style={{
                            borderWidth: '1px',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            marginBottom: '0.5rem',
                            width: '300px',
                            outlineWidth: '0px',
                            color: 'rgb(0 0 0)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                            fontSize: '18px',
                        }}
                        placeholder="Enter login..."
                        value={this.state.username}
                        onChange={this.changeHandlerLogin}
                    />
                    {this.state.error_login && <ErrorMessage error={this.state.error_login} />}

                    <input
                        type="password"
                        style={{
                            borderWidth: '1px',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            marginBottom: '0.5rem',
                            width: '300px',
                            outlineWidth: '0px',
                            color: 'rgb(0 0 0)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                            fontSize: '18px',
                        }}
                        placeholder="Enter password..."
                        value={this.state.password}
                        onChange={this.changeHandlerPassword}
                    />
                    {this.state.error_password && <ErrorMessage error={this.state.error_password} />}

                    <button type="submit"
                        style={{
                            borderWidth: '1px',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            // marginBottom: '0.5rem',
                            // width: '300px',
                            // outlineWidth: '0px',
                            'color': 'rgb(255 255 255)',
                            'backgroundColor': 'rgb(55 65 81)',
                            '--hover-backgroundColor': 'rgb(148 163 184)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                            fontSize: '18px',
                        }}
                        data-hover="button">
                        {/* <style>{`[data-hover="button"]:hover {font-size: 2.1em !important;}`}</style> */}
                        <style>{`[data-hover="button"]:hover {background-color: rgb(148 163 184) !important;}`}</style>
                        Отправить
                    </button>
                </form>
            </div >
        );
    }
}