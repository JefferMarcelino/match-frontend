import { ApolloProvider } from "@apollo/client"
import type { AppProps } from 'next/app'
import { client } from "../lib/apollo"
import '../public/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="w-full h-full min-h-screen text-blue text-lg p-5">
        <div className='max-w-4xl mx-auto flex flex-col gap-10'>
          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default MyApp
