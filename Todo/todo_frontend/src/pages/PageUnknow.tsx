import { Title } from "../components/Title";


export function PageUnknow() {
    return (
        <div>
            <Title title="Здравствуй неизвестный пользователь" />
            <div className="mt-20 text-center font-mono">
                <h1 className="text-2xl">Войдите пожалуйста в систему</h1>
                <p>root / root</p>
                <p>usr1 / usr1</p>
                <p>usr2 / usr2</p>
                <p>dev1 / dev1</p>
                <p>dev2 / dev2</p>
            </div>

        </div>
    )
}