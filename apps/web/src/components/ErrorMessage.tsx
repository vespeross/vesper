
export default function ErrorMessage({ error }: { error: string | undefined }) {
    if (!error) return null
    return (
        <p className="text-xs md:text-sm text-red-400 font-semibold">
            {error}
        </p>
    )
}
