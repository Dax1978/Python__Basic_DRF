import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Title } from "../components/Title";
import { User } from "../components/User";
import { useUsers } from "../hooks/users";


export function PageUsers() {
    const { usersdata, error, loading, addUser } = useUsers()

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            <Title title="Пользователи" />
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {/* {users.map(user => <User user={user} key={user.id} />)} */}
            {usersdata?.results.map(user => <User user={user} key={user.id} />)}
        </div>
    )
}