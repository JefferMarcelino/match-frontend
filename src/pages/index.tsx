import type { NextPage } from 'next';
import { BlogCard } from '../components/BlogCard';
import { gql, useQuery } from "@apollo/client"

interface Posts {
  title: String
  publishedDate: String
  coverPhoto: null | String
}

const GET_POSTS_QUERY = gql`
  query {
    posts {
      title
      publishedDate
      coverPhoto {
        id
      }
    }
  }
`

const HomePage: NextPage = () => {
  const { data } = useQuery<{}>(GET_POSTS_QUERY)
  console.log(data)

  return (
    <>
      <main>
      
      </main>
    </>
  )
}

export default HomePage;
