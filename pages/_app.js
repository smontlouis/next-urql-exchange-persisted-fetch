import '../styles/globals.css'
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql'
import { persistedFetchExchange } from '@urql/exchange-persisted-fetch'

export const client = createClient({
  url: `https://admin-dev-mabible.onrender.com/graphql`,
  exchanges: [
    dedupExchange,
    persistedFetchExchange({
      preferGetForPersistedQueries: true,
    }),
    fetchExchange,
  ],
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
