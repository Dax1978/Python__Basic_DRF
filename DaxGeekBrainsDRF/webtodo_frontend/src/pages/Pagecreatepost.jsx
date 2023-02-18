import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const Pagecreatepost = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Create a post</h1>
            <button onClick={() => signout(() => navigate('/', { replace: true }))}>Log Out</button>
        </div>
    )
}

export { Pagecreatepost }