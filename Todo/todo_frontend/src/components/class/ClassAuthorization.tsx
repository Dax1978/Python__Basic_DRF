import { Component, ReactNode } from "react"
// import axios from 'axios'
import { ErrorMessage } from '../ErrorMessage'
// import Cookies from 'universal-cookie';
import ServiceAuth from "../../services/ServiceAuth";
import { useNavigate } from "react-router-dom";

interface DefaultProps { }
interface Props extends DefaultProps { }
interface State {
    redirect: string | null,
    username: string;
    password: string;
    error_login: string;
    error_password: string;
}

// const autorizationData = {
//     username: '',
//     password: ''
// }

export class ClassAuthorization extends Component<Props, State> {
    // public static readonly defaultProps = {};

    constructor(props: Props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            redirect: null,
            username: '',
            password: '',
            error_login: '',
            error_password: '',
        }
    }

    componentDidMount() {
        const currentUser = ServiceAuth.getCurrentUser();

        if (currentUser) {
            this.setState({ redirect: "/users" });
        };
    }

    // set_token(token: string) {
    //     const cookies = new Cookies()
    //     cookies.set('token', token)
    //     this.setState({ 'token': token })
    // }

    // is_authenticated() {
    //     return this.state.token != ''
    // }

    // logout() {
    //     this.set_token('')
    // }

    // get_token_from_storage() {
    //     const cookies = new Cookies()
    //     const token = cookies.get('token')
    //     this.setState({ 'token': token })
    // }

    // get_token(username: string, password: string) {
    //     axios.post('http://127.0.0.1:8000/api-token-auth/', {
    //         username: username,
    //         password: password
    //     })
    //         .then(response => {
    //             this.set_token(response.data['token'])
    //         }).catch(error => alert('Неверный логин или пароль'))
    // }

    submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        this.setState(() => ({ error_login: '' }))
        this.setState(() => ({ error_password: '' }))

        if (this.state.username.trim().length === 0) {
            this.setState(() => ({ error_login: 'Please enter valid login' }))
            return
        }
        if (this.state.password.trim().length === 0) {
            this.setState(() => ({ error_password: 'Please enter valid password' }))
            return
        }

        // let navigate = useNavigate();
        // const goTasks = () => {
        //     navigate("/tasks");
        // };

        // const res = ServiceAuth.login(this.state.username, this.state.password);
        ServiceAuth.login(this.state.username, this.state.password)
            .then(
                () => {
                    this.setState({
                        redirect: "/tasks"
                    });
                    // goTodo();
                },
                error => {
                    this.setState(() => ({ error_login: 'Please enter valid login' }));
                    this.setState(() => ({ error_password: 'Please enter valid password' }));
                }
            );
        // console.log('this.state.token', this.state.token)
        // console.log('token', res.toString())

        {/*
        autorizationData.username = this.state.username
        autorizationData.password = this.state.password
        const response = await axios.post('http://127.0.0.1:8000/api-token-auth/', autorizationData)

        if (response.status === 200) {
            localStorage.setItem("todoapp", JSON.stringify(response.data));
            this.setState(function (state, props) { return { token: response.data.token } });
            // this.setState((state, props) => ({ token: response.data.token }));
            // this.setState((token) => { return { token: response.data.token } })
            // console.log('this.state.username', this.state.username)
            // console.log('this.state.password', this.state.password)
            // console.log('this.state.token 1', this.state.token)
        } else {
            this.setState(() => ({ error: 'Ошибка авторизации' }))
        }
        */}
    }

    changeHandlerLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(() => ({ username: event.target.value }))
    }
    changeHandlerPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(() => ({ password: event.target.value }))
    }

    render(): ReactNode {
        return (
            // <form onSubmit={this.submitHandler.bind(this)}>
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    className="border py-2 px-4 mb-2 w-full outline-0 text-black"
                    placeholder="Enter login..."
                    value={this.state.username}
                    onChange={this.changeHandlerLogin}
                />
                {this.state.error_login && <ErrorMessage error={this.state.error_login} />}

                <input
                    type="password"
                    className="border py-2 px-4 mb-2 w-full outline-0 text-black"
                    placeholder="Enter password..."
                    value={this.state.password}
                    onChange={this.changeHandlerPassword}
                />
                {this.state.error_password && <ErrorMessage error={this.state.error_password} />}

                <button type="submit" className="py-2 px-4 border bg-gray-700 hover:text-white hover:bg-gray-400">Отправить</button>
            </form>
        )
    }
}