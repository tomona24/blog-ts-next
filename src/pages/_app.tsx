import '../../styles/globals.css';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  switch (pageProps.layout) {
    case 'main': {
      return (
          <Component {...pageProps} />
      )
    }
    default: {
      return (
        <Layout style="null">
          <Component {...pageProps} />
        </Layout>
      )
    }
  }
}
export default MyApp