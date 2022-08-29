import type { GetStaticProps, NextPage } from 'next';
import { gql, useQuery } from "@apollo/client"
import { BlogCard } from '../components/BlogCard';
import { Limits } from '../components/Layouts/Limits';
import { Header } from '../components/Header';
import MetaData from '../components/MetaData';
import { client } from '../lib/apollo';

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
      id
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<GetPostsQueryResponse>({
    query: GET_POSTS_QUERY,
  });

  return {
    props: {
      posts: data.posts
    },
    revalidate: 60 * 60 * 4,
  };
}

const HomePage: NextPage<GetPostsQueryResponse> = ({ posts }) => {
  return (
    <>
      <MetaData metaData={{
        title: 'Vénus',
        description: 'Tudo sobre programação e tecnologia',
        author: 'Jeffer Marcelino',
        keywords: ['adolscente', 'blog', 'jeffer marcelino', 'programador', 'tecnologia'],
      }} />
      
      <Limits>
          <Header />
          <main>
            <div className='flex flex-col gap-7'>
              { posts?.map((post) => {
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
