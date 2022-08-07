import { NextPage } from "next";
import Image from "next/image"
import { useRouter } from 'next/router'
import { gql, useQuery } from "@apollo/client"

interface GetPostBySlugResponse {
    post: {
        id: string
        title: string
        publishedDate: string
        coverPhoto: {
            url: string 
        }
        content: {
            html: string
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

    const { data } = useQuery<GetPostBySlugResponse>(GET_POST_BY_SLUG_QUERY, {
        variables: {
            slug
        }
    })

    console.log(data)

    return (
        <main className="min-h-screen">
            { data ? (
                <>
                <h1 className="text-4xl">{data?.post.title}</h1>
                <span className="text-zinc-400">{data?.post.publishedDate}</span>
                <div 
                className="content"
                dangerouslySetInnerHTML={{ __html: data?.post.content.html }}
                ></div>
                </>
            ): (
                <div>

                </div>
            )
        }
        </main>
    )
}

export default Post