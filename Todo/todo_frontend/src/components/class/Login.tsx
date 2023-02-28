import { Component, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import ServiceAuth from "../../services/ServiceAuth";

type Props = {};

type State = {
    redirect: string | null,
    username: string,
    password: string,
    loading: boolean,
    message: string
};

export default class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            redirect: null,
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    componentDidMount() {
        const currentUser = ServiceAuth.getCurrentUser();

        if (currentUser) {
            this.setState({ redirect: "/profile" });
        };
    }

    componentWillUnmount() {
        window.location.reload();
    }

    validationSchema() {
        return Yup.object().shape({
            username: Yup.string().required("This field is required!"),
            password: Yup.string().required("This field is required!"),
        });
    }

    handleLogin(formValue: { username: string; password: string }) {
        const { username, password } = formValue;

        this.setState({
            message: "",
            loading: true
        });


        ServiceAuth.login(username, password)
            .then(
                () => {
                    this.setState({
                        redirect: "/users"
                    });
                },
                error => {
                    alert('Не корректно указан логин или пароль');
                }
            );
    }


    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }

        const { loading, message } = this.state;

        const initialValues = {
            username: "",
            password: "",
        };

        return (

            <Formik
                initialValues={initialValues}
                validationSchema={this.validationSchema}
                onSubmit={this.handleLogin.bind(this)}
                initialTouched={{ username: true }}
            >
                <Form>
                    <div className="group">
                        <label htmlFor="username" className="text-black">Имя пользователя:</label>
                        <Field
                            name="username"
                            type="text"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md font-mono text-black text-sm shadow-sm placeholder-slate-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                       invalid:border-pink-500 invalid:text-pink-600
                                       focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            placeholder="Enter login..." />
                        <ErrorMessage
                            name="username"
                            component="div"
                            className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"
                        />
                    </div>

                    {/*
                    mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-current shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    */}

                    <div className="group mt-2">
                        <label htmlFor="password" className="text-black">Пароль:</label>
                        <Field
                            name="password"
                            type="password"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md font-mono text-black text-sm shadow-sm placeholder-slate-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                       invalid:border-pink-500 invalid:text-pink-600
                                       focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />

                        <ErrorMessage
                            name="password"
                            component="div"
                            className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"
                        />
                    </div>

                    <div className="group mt-4 flex w-full">
                        <button type="submit" className="rounded-md py-2 px-4 border bg-gray-700 hover:text-white hover:bg-gray-400" disabled={loading}>
                            {loading && (
                                <span className="animate-spin"></span>
                            )}
                            <span>Login</span>
                        </button>
                    </div>

                    {message && (
                        <div className="group">
                            <div className="text-black" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                </Form>
            </Formik>
        );
    }
}