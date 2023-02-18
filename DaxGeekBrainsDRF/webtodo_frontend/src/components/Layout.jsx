import { NavLink, Outlet } from 'react-router-dom';
import { CustomLink } from "./CustomLink";

const setActive = ({ isActive }) => isActive ? 'active-link' : '';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to='/' className={setActive}>Home</NavLink>
                <NavLink to='/posts' style={({ isActive }) => ({ color: isActive ? 'var(--color-active' : 'white' })}>Blog</NavLink>
                <CustomLink to='/about'>About</CustomLink>
            </header>

            <h1>Задачник:</h1>
            <nav>
                <ul>
                    <li key='project'>
                        <NavLink to='/' className={setActive}>Projects</NavLink>
                    </li>
                    <li key='todo'>
                        <NavLink to='/todo' className={setActive}>Tasks</NavLink>
                    </li>
                </ul>
            </nav>

            <main className='container'>
                <Outlet />
            </main>

            <footer className='container'>Dax 2023</footer>
        </>
    )
}

export { Layout }