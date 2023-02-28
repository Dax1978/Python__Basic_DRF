
interface TitleProps {
    title: string
}

export function Title({ title }: TitleProps) {
    return (
        <h1 className="text-center text-5xl font-sans font-bold mt-7">{title}</h1>
    )
}