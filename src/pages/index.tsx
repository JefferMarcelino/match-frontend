import type { NextPage } from 'next';
import Image from "next/image"
import { gql, useQuery } from "@apollo/client"
import { BlogCard } from '../components/BlogCard';

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
      <div className='w-full h-full bg-background min-h-screen text-blue text-lg p-5'>
        <div className='max-w-5xl mx-auto flex flex-col gap-10'>
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
                <p className='text-xl'>Personal blog by <a href="https://github.com/JefferMarcelino" className='underline text-link underline-offset-4'>Jeffer Marcelino</a></p>
                <span className='text-zinc-600'>Web Developer</span>

                <div className='flex flex-wrap gap-4 my-4'>
                <a href="https://twitter.com/JefferMarcelin" target="_blank" rel="noreferrer">
                  <Image src="https://img.shields.io/badge/-05122A?style=flat&logo=twitter" width={30} height={30} alt="twitter"/>  
                </a>

                <a href="https://www.linkedin.com/in/-94422a22b/" target="_blank" rel="noreferrer">
                  <Image src="https://img.shields.io/badge/-05122A?style=flat&logo=linkedin" width={30} height={30} alt="linkedin"/>
                </a>

                <a href="https://www.instagram.com/jeffer_marcelin/" target="_blank" rel="noreferrer">
                  <Image src="https://img.shields.io/badge/-05122A?style=flat&logo=instagram" width={30} height={30} alt="instagram"/>
                </a>

                <a href="https://www.youtube.com/channel/UCXBFKr-rZ787IhXAzsnrw-Q" target="_blank" rel="noreferrer">
                  <Image src="https://img.shields.io/badge/-05122A?style=flat&logo=youtube" width={30} height={30} alt="Youtube"/>
                </a>

                <a href="mailto:jeffersunde72@gmail.com" target="_blank" rel="noreferrer">
                  <Image src="https://img.shields.io/badge/-05122A?style=flat&logo=gmail" width={30} height={30} alt="Gmail"/>
                </a>
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
        </div>
      </div>
    </>
  )
}

export default HomePage;
