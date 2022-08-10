import type { NextPage } from 'next';
import { gql, useQuery } from "@apollo/client"
import { BlogCard } from '../components/BlogCard';
import { Limits } from '../components/Limits';
import { Header } from '../components/Header';
import MetaData from '../components/MetaData';

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
    posts(orderBy: publishedAt_DESC) {
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

  return (
    <>
      <MetaData metaData={{
        title: 'Vénus',
        description: 'A vida de um adolescente programador em Moçambique',
        author: 'Jeffer Marcelino',
        keywords: ['adolscente', 'blog', 'jeffer marcelino', 'programador'],
      }} />
      
      <Limits>
          <Header />
          <main>
            <div className='flex flex-col gap-7'>
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
        </Limits>
    </>
  )
}

export default HomePage;
