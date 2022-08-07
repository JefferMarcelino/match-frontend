import type { NextPage } from 'next';
import Image from "next/image"
import { gql, useQuery } from "@apollo/client"
import { BlogCard } from '../components/BlogCard';
import Link from 'next/link';
import { 
  LinkedinLogo, 
  TwitterLogo, 
  GithubLogo, 
  YoutubeLogo, 
  GoogleLogo, 
  InstagramLogo } from "phosphor-react";

interface GetPostsQueryResponse {
  posts: {
    id: string
    title: string
    slug: string
    publishedDate: string
    description: string
    coverPhoto: {
      url: string
    }
  }[]
}

const GET_POSTS_QUERY = gql`
  query {
    posts {
      title
      slug
      publishedDate
      description
      coverPhoto {
        url
      }
    }
  }
`

const HomePage: NextPage = () => {
  const { data } = useQuery<GetPostsQueryResponse>(GET_POSTS_QUERY)
  console.log(data)

  return (
    <>
      <header>
        <div className='flex gap-3 items-center'>
          <Image 
          src="https://avatars.githubusercontent.com/u/77571208?v=4" 
          width={130}
          height={130}
          alt="Me"
          className='rounded-full'
          />
          <div>
            <p className='text-xl'>
              Personal blog by <Link href="https://github.com/JefferMarcelino">
                <a className='underline text-link underline-offset-4' target="_blank">Jeffer Marcelino</a>
              </Link>
            </p>
            <span className='text-zinc-600'>Web Developer</span>

            <div className='flex flex-wrap gap-4 my-4'>
            <Link href="https://github.com/JefferMarcelino">
              <a target="_blank" rel="noreferrer">
                <GithubLogo size={40} />
              </a>
            </Link>

            <Link href="https://twitter.com/JefferMarcelin">
              <a target="_blank" rel="noreferrer">
                <TwitterLogo size={40} />
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/-94422a22b/">
              <a target="_blank" rel="noreferrer">
                <LinkedinLogo size={40} />
              </a>
            </Link>

            <Link href="https://www.instagram.com/jeffer_marcelin/">
              <a target="_blank" rel="noreferrer">
                <InstagramLogo size={40} />
              </a>
            </Link>

            <Link href="https://www.youtube.com/channel/UCXBFKr-rZ787IhXAzsnrw-Q">
              <a target="_blank" rel="noreferrer">
                <YoutubeLogo size={40} />
              </a>
            </Link>

            <Link href="mailto:jeffersunde72@gmail.com">
              <a target="_blank" rel="noreferrer">
                <GoogleLogo size={40} />
              </a>
            </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='flex flex-col gap-6'>
          { data?.posts.map((post) => {
            return (
              <BlogCard 
              key={post.id}
              title={post.title}
              slug={post.slug}
              publishedDate={post.publishedDate}
              description={post.description}
              coverPhoto={post.coverPhoto.url}
              />
              )
            }) }
        </div>
      </main>
    </>
  )
}

export default HomePage;
