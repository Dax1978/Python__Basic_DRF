import { Link } from 'react-router-dom'

const Pagenotfound = ({ location }) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export { Pagenotfound }