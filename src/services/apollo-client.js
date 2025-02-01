import { ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
    uri: ``,
    fetchOptions: { mode: "cors" }
})

const link = ApolloLink.from([
    httpLink
])
const cache = InMemoryCache({})

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