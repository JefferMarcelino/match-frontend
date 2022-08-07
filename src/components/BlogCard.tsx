import Link from "next/link"

interface BlogCardProps {
    title: string
    slug: string
    publishedDate: string
    description: string
    coverPhoto: string
}

const LIMIT = 300

export const BlogCard = ({ title, publishedDate, coverPhoto, description, slug }:BlogCardProps) => {
    const aboveLimit = description.length > LIMIT
    const dotsOrEmpty = aboveLimit ? "..." : ""

    return (
        <Link href={"Post/" + slug}>
            <a className="block">
                <h2 className="text-link text-2xl underline underline-offset-4">{ title }</h2>
                <span className="text-zinc-400">{ publishedDate }</span>
                <p className="mt-2">{ description.substring(0, LIMIT) + dotsOrEmpty }</p>
            </a>
        </Link>
    )
}