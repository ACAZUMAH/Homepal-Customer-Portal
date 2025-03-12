import { gql, useQuery } from "@apollo/client";

const fetchSavedSearchesGql = gql`
  query Me {
    me {
      firstName
      savedProperties {
        _id
        name
        address
        price
        bathrooms
        bedrooms
        mode
        imageUrls
      }
    }
  }
`;

export const useFetchSavedSearches = () => {
    const { data, ...result } = useQuery(fetchSavedSearchesGql, {
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true
    })

    const savedSearches = data?.me?.savedProperties || []

    return { savedSearches, ...result }
}