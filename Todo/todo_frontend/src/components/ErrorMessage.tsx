interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <p className='text-left text-red-600'>{error}</p>
    )
}