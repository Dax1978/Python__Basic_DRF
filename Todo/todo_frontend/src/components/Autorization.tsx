import axios from 'axios'
import React, { useState } from 'react'
import { ErrorMessage } from './ErrorMessage'
import Cookies from 'universal-cookie';

const autorizationData = {
    username: '',
    password: ''
}

export function Autorization() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [error, setError] = useState('')

    const set_token = (mytoken: string) => {
        const cookies = new Cookies()
        cookies.set('token', mytoken)
        setToken(mytoken)
    }



    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (username.trim().length === 0) {
            setError('Please enter valid login')
            return
        }
        if (password.trim().length === 0) {
            setError('Please enter valid password')
            return
        }
        autorizationData.username = username
        autorizationData.password = password
        const response = await axios.post('http://127.0.0.1:8000/api-token-auth/', autorizationData)

        if (response.status === 200) {
            setToken(response.data)
        } else {
            setError('Ошибка авторизации')
        }
        console.log({ token })
        // onCreate(response.data)
    }

    // На видео KeyboardEvent но будет ошибка!
    // т.к. KeyboardEvent это не ChangeEvent вызываемый событием onChange:
    // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const changeHandlerLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const changeHandlerPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0 text-black"
                placeholder="Enter login..."
                value={username}
                onChange={changeHandlerLogin}
            />
            <input
                type="password"
                className="border py-2 px-4 mb-2 w-full outline-0 text-black"
                placeholder="Enter password..."
                value={password}
                onChange={changeHandlerPassword}
            />

            {error && <ErrorMessage error={error} />}

            <button type="submit" className="py-2 px-4 border bg-gray-700 hover:text-white hover:bg-gray-400">Отправить</button>
        </form>
    )
}