import { ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context"
import store from '../redux/store'

const middleware = setContext(async (_, { headers }) => {
    const token = store.getState().authentication.token

    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : ""
        }
    }
})

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_API_DEVELOPMENT_URL}/graphql`,
  fetchOptions: { mode: "cors" },
});

const link = ApolloLink.from([
    middleware,
    httpLink,
])

const cache = new InMemoryCache({})

export const client = new ApolloClient({
    link,
    cache,
    defaultOptions: {
        query: {
            errorPolicy: "all",
            notifyOnNetworkStatusChange: true
        }
    }
})