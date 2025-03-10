import { gql, useQuery } from "@apollo/client";

const getFavoriteGql = gql`
  query GetFavoriteProperties($ids: [ID!], $filters: listingFilters) {
    getFavoriteProperties(ids: $ids, filters: $filters) {
      edges {
        _id
        name
        address
        price
        bathrooms
        bedrooms
        mode
        imageUrls
      }
      PageInfo {
        page
        total
        limit
        hasNextPage
        totalCount
      }
    }
  }
`;

export const useFetchFavoriteProperties = ({ favoriteIds, filters = { } }) => {
    const {data, ...result} = useQuery(getFavoriteGql, {
        variables: { ids: favoriteIds, filters: filters},
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true
    })

    const properties = data?.getFavoriteProperties?.edges || []
    const pageInfo = data?.getFavoriteProperties?.PageInfo

    return { properties, pageInfo, ...result }
}