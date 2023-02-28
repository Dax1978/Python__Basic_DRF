import { Title } from "../components/Title";


export function PageAbout() {
    return (
        <div>
            <Title title="О сайте" />
            <div className="mt-20 text-center font-mono">
                <h1>Изучение Django REST framework</h1>
                <p>Frontend при изучении Django REST framework</p>
                <p>Разработано с использование TypeScript и Tailwind CSS</p>
            </div>

        </div>
    )
}