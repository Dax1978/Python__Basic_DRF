import { Link, useNavigate } from 'react-router-dom'
import { WindowModal } from '../components/WindowModal';
import { ModalContext } from '../context/ContextModalwindow';
import { useContext, useState, useEffect } from 'react';
import { ClassAuthorization } from './class/ClassAuthorization';
import ServiceAuth from '../services/ServiceAuth'
import ServicePath from '../services/ServicePath'
import { IAuth } from '../Intarfaces/IAuth';
// import { Autorization } from './Autorization';

export function Navigation() {
    const { modal: ModalWindow, open: openModalWindow, close: closeModalWindow } = useContext(ModalContext)
    const [user, setUser] = useState('');
    const [btntext, setBtntext] = useState('Login');

    // const createHandler = (product: IProduct) => {
    //     closeModalWindow()
    //     addProduct(product)
    // }

    // let navigate = useNavigate();
    // const goUnknow = () => {
    //     navigate("/");
    // };
    // function goTodo() {
    //     navigate("/tasks");
    // };
    const navigate = useNavigate();
    function goTodo() {
        navigate("/tasks");
    }

    function btn() {
        const res = ServiceAuth.getCurrentUser();
        if (res) {
            ServiceAuth.logout();
            setBtntext('Login');
            // PageUnknow();
        } else {
            openModalWindow();
            const res2 = ServiceAuth.getCurrentUser();
            if (res2) {
                // console.log(res2);
                goTodo();
            }
        };
    }

    useEffect(() => {
        const res = ServiceAuth.getCurrentUser();
        if (res) {
            setUser(res.login);
            setBtntext('Logout');
        } else {
            setUser('');
            setBtntext('Login');
        };
    });

    return (
        <nav className="h-[70px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bold">ToDo by ©Dax</span>
            <span>
                <Link to="/users" className='mx-7'>Пользователи</Link>
                <Link to="/projects" className='mx-7'>Проекты</Link>
                <Link to="/tasks" className='mx-7'>Задачи</Link>
            </span>
            <span>
                <Link to="/about">About</Link>
                <button
                    // className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
                    className='rounded-full bg-red-300 text-white text-lg px-4 py-1 mx-7'
                    onClick={btn}>
                    {btntext}
                </button>
            </span>

            {ModalWindow && <WindowModal title="Авторизация" onClose={closeModalWindow}>
                {/* <CreateProduct onCreate={createHandler} /> */}
                <ClassAuthorization />
                {/* <Login /> */}
            </WindowModal>}

        </nav>
    )
}