import axios, { AxiosError } from 'axios';
import React, { createElement as e, useEffect, useState } from 'react';

import { IUserData, IUser } from '../models/User';

export function useUsers() {
    const [usersdata, setUsersdata] = useState<IUserData>()
    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addUser(product: IUser) {
        setUsers(prev => [...prev, product])
    }

    async function fetchUsers() {
        try {
            setError('')
            setLoading(true);
            // const response = await axios.get<IUser[]>('http://127.0.0.1:8000/usr/users/');
            const response = await axios.get<IUserData>('http://127.0.0.1:8000/usr/users/');
            setUsersdata(response.data)
            // setUsers(usersdata?.results);
            // console.log('ggg=', typeof (usersdata?.results))
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false);
            setError(error.message)
        }
    }

    // Проверим, готов ы ли мы к асинхронной функции получения данных с сервера
    // Этот хук вызовется один раз, когда приложение готово
    useEffect(() => {
        fetchUsers()
        // console.log(users)
    }, [])

    // setUsers(usersdata?.results)

    // console.log(typeof (usersdata?.results))
    // console.log(users)
    // return { users, error, loading, addUser }
    return { usersdata, error, loading, addUser }
}