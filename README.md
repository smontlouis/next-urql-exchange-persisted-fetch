Using nextjs 12, when trying to use Automatic Persisted Queries using Node `lts/fermium`, I got this error:
`[@urql/exchange-persisted-fetch]: The Node Crypto API is not available.`

In order to make it work, I copied the [hash.js file](https://github.com/FormidableLabs/urql/blob/00ad6421b8f08ce41892b14c91e12464f59d4202/exchanges/persisted-fetch/src/sha256.ts#L42) locally and replaced the `nodeCrypto = new Function('require', 'return require("crypto")')(require);`by `nodeCrypto = require('crypto')`

```
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
```

urql version & exchanges:

- urql: ^2.0.5
- urql/exchange-persisted-fetch: ^1.3.2


**Expected behavior**
No error message

**Actual behavior**
Error message
