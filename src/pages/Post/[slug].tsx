/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { motion, useScroll, useSpring } from "framer-motion"
import Link from "next/link";
import Image from "next/image";
import { gql } from "@apollo/client";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Prism from 'prismjs';
import { Limits } from "../../components/Layouts/Limits";
import { Header } from "../../components/Header";
import MetaData from "../../components/MetaData";
import { client } from "../../lib/apollo";
import loadingImg from "../../public/images/loading.gif";
import "prismjs/themes/prism-tomorrow.css";

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

const GET_POSTS_SLUGS_QUERY = gql`
    query {
        posts {
            slug
        }
    }
`

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: GET_POSTS_SLUGS_QUERY,
    });

    const paths = data.posts.map((post:any) => {
        return { params: { slug: post.slug } }
    })

    return {
      paths,
      fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { data } = await client.query({
        query: GET_POST_BY_SLUG_QUERY,
        variables: context.params
    });

    return {
        props: {
            post: data.post,
        },
        revalidate: 60 * 60 *24
    }
}

const Post:NextPage<GetPostBySlugResponse> = ({ post }) => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    var publishedDateFormatted = ""

    if (post) {
        var publishedDateFormatted = format(new Date(post.publishedDate), "EEE' - 'd' de 'MMMM' - 'k'h'", {
            locale: ptBR,
        })
    }

    useEffect(() => {
        Prism.highlightAll();
    }, [post]);

    return (
        <>
        <motion.div 
            className="w-full h-3 bg-link fixed top-0 left-0 right-0 origin-[0%] z-50"
            style={{ scaleX: scaleX }}>
        </motion.div>
            <Limits>
                <Header />
                <main className="min-h-screen flex flex-col">
                    { post ? (
                        <>
                            <MetaData metaData={{
                                title: `${ post.title }`,
                                description: `${ post.description }`,
                                author: 'Jeffer Marcelino',
                                keywords: ['adolscente', 'blog', 'jeffer marcelino', 'programador', 'tecnologia'],
                            }} />

                            <h1 className="text-4xl mb-2 text-center">{ post.title }</h1>
                            <span className="text-zinc-400 mb-4 text-center">{ publishedDateFormatted.toUpperCase() }</span>
                            <div
                            className="content"
                            dangerouslySetInnerHTML={{ __html: post.content.html }}>
                            </div>
                        </>
                    ): (
                        <div className="self-center translate-y-[150%]">
                            <Image src={ loadingImg } width={100} height={100} alt="Loading" />
                        </div>
                    )
                    }
                </main>
                <span className="underline text-link font-bold dark:text-darkLink"><Link href="/">Veja outros posts</Link></span>
                <div className="w-full h-1 bg-slate-400 rounded"></div>
            </Limits>
        </>
    )
}

export default Post
