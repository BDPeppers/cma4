import '../styles/main.sass'
import type { AppProps } from 'next/app'
import Layout from '../src/components/navigation/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  // create a layout component that wraps the app
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>  
  )
}

export default MyApp
