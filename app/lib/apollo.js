import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://jwitmer.wpengine.com/graphql',
    cache: new InMemoryCache()
})