import { useState } from "react"
import { IUser } from "../models/User"

interface UserProps {
    user: IUser
}

export function User({ user }: UserProps) {
    const [pass, setPass] = useState(false)
    const btnBgClassName = pass ? 'bg-gray-400' : 'bg-gray-700'
    const btnClasses = ['py-2 px-4 border rounded text-white', btnBgClassName]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-4 shadow-lg max-w-none w-400">
            <p className="font-mono">ID: {user.id}</p>
            <p className="font-mono">Пользователь: {user.username}</p>
            <p className="font-mono">EMail: {user.email}</p>

            <button className={btnClasses.join(' ')}
                onClick={() => setPass(prev => !prev)}>
                {pass ? 'Hide password' : 'Show password'}
            </button>

            {pass && <div>
                <p className='break-all'>{user.password}</p>
            </div>}
        </div>
    )
}