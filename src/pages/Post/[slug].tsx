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
import MetaData from "../../components/MetaData";

interface GetPostBySlugResponse {
    post: {
        id: string;
        title: string;
        description: string;
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
            description
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
        <>
            <Limits>
                <Header />
                <main className="min-h-screen flex flex-col">
                    { data ? (
                        <>
                            <h1 className="text-4xl mb-2 text-center">{data?.post.title}</h1>
                            <span className="text-zinc-400 mb-4 text-center">{ publishedDateFormatted.toUpperCase() }</span>
                            <div
                            className="content"
                            dangerouslySetInnerHTML={{ __html: data?.post.content.html }}>
                            </div>

                            <MetaData metaData={{
                                title: `${ data?.post.title }`,
                                description: `${ data?.post.description }`,
                                author: 'Jeffer Marcelino',
                                keywords: ['adolscente', 'blog', 'jeffer marcelino', 'programador'],
                            }} />
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
        </>
    )
}

export default Post