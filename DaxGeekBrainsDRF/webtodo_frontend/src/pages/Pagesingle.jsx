import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Pagesingle = () => {
    // console.log(useParams());
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPosts] = useState(null);

    // Навигация на 1 страницу назад
    // Формально можно на 2 назад, на 3 назад и т.д.
    // Положительные соответственно вперед
    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', { replace: true });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [id]);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {/* Bad approach - так делать не стоит */}
            <button onClick={goHome}>Go home</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    )
}

export { Pagesingle }