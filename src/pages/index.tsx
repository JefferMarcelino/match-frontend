import type { NextPage } from 'next';
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
