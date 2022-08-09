import Image from "next/image";
import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from 'next/router';
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import "prismjs/themes/prism-tomorrow.css";
import Prism from 'prismjs';
import loadingImg from "../../public/images/loading.gif";
import { Limits } from "../../components/Limits";
import { Header } from "../../components/Header";

interface GetPostBySlugResponse {
    post: {
        id: string;
        title: string;
        publishedDate: Date;
        coverPhoto: {
            url: string;
        }
        content: {
            html: string;
        }
    }
}

const GET_POST_BY_SLUG_QUERY = gql`
    query GetPostBySlug ($slug: String) {
        post(where: {slug: $slug}) {
            title
            publishedDate
            coverPhoto {
                url
            }
            content {
                html
            }
        }
    }
`

const Post:NextPage = () => {
    const router = useRouter()
    const { slug } = router.query
    var publishedDateFormatted = ""

    const { data } = useQuery<GetPostBySlugResponse>(GET_POST_BY_SLUG_QUERY, {
        variables: {
            slug
        }
    })

    if (data?.post) {
        var publishedDateFormatted = format(new Date(data?.post.publishedDate), "EEE' - 'd' de 'MMMM' - 'k'h'", {
            locale: ptBR,
        })
    }

    useEffect(() => {
        Prism.highlightAll();
    }, [data]);

    return (
        <Limits>
            <Header />
            <div>
                <Link href="/">
                    <a className="font-bold underline underline-offset-4 text-link dark:text-darkLink">Página principal</a>
                </Link>
            </div>
            <main className="min-h-screen flex flex-col">
                { data ? (
                    <>
                        <h1 className="text-4xl mb-2">{data?.post.title}</h1>
                        <span className="text-zinc-400 mb-4">{ publishedDateFormatted.toUpperCase() }</span>
                        <div 
                        className="content"
                        dangerouslySetInnerHTML={{ __html: data?.post.content.html }}>
                        </div>
                    </> 
                ): (
                    <div className="self-center translate-y-[150%]">
                        <Image src={loadingImg} width={100} height={100} alt="Loading" />
                    </div>
                )
                }
            </main>
            <div className="w-full h-1 bg-slate-400 rounded"></div>
        </Limits>
    )
}

export default Post