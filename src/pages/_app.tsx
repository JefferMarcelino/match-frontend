import { ApolloProvider } from "@apollo/client"
import type { AppProps } from 'next/app'
import { client } from "../lib/apollo"
import '../public/styles/globals.css'
import { ScroolToTop } from "../components/ScroolToTop"
import { Header } from "../components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="w-full h-full min-h-screen text-blue dark:text-white dark:bg-darkBg text-lg p-5">
        <div className='max-w-4xl mx-auto flex flex-col gap-10'>
          <Header />
          <Component {...pageProps} />
          <ScroolToTop />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default MyApp
