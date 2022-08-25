/* eslint-disable @next/next/no-img-element */
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
        <div className="break-inside-avoid">
            <div className="bg-blue dark:bg-white hover:scale-105 transition-transform p-2 rounded-md flex flex-col gap-2 max-w-sm mx-auto my-10 first:mt-0">
                <div className="max-w-full relative group">
                    <img src={ coverPhoto } alt="Cover photo" className="h-full rounded-lg transition brightness-50 group-hover:brightness-[.3]" />
                    <div className="absolute cursor-pointer bottom-2 left-1 group-hover:-translate-y-[50%] transition-transform">
                        <Link href={"Post/" + slug}>
                            <a className="block">
                                <h2 className="text-link font-bold text-2xl">{ title }</h2>
                            </a>
                        </Link>
                        <span className="text-white">{ publishedDateFormatted.toUpperCase() }</span>
                    </div>
                </div>
                <div className="">
                    <p className="mt-2 text-white dark:text-blue">{ description.substring(0, LIMIT) + dotsOrEmpty }</p>
            
                    <div className="my-2 w-full border-b-2 border-zinc-600 rounded-sm p-0">
                        <Link href={"Post/" + slug}>
                            <a className="">
                                <span className="text-darkLink dark:text-blue font-bold">Leia mais</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}