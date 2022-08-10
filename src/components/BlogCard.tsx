import Link from "next/link"
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

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

    var publishedDateFormatted = format(new Date(publishedDate), "EEE' - 'd' de 'MMMM'", {
        locale: ptBR,
    })

    return (
        <div className="">
            <Link href={"Post/" + slug}>
                <a className="block">
                    <h2 className="text-link text-2xl">{ title }</h2>
                </a>
            </Link>
            <span className="text-zinc-600">{ publishedDateFormatted.toUpperCase() }</span>
            <p className="mt-2">{ description.substring(0, LIMIT) + dotsOrEmpty }</p>
            
            <div className="my-2 w-full border-b-2 border-zinc-600 rounded-sm p-0">
                <Link href={"Post/" + slug}>
                    <a className="">
                        <span className="text-blue dark:text-darkLink font-bold">Leia mais</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}