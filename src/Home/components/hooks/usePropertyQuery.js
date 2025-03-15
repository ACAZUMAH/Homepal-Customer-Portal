import { useQuery, gql } from "@apollo/client";

const useGetPropertiesGql = gql`
  query GetListings($filter: listingFilters) {
    listings(filters: $filter) {
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
    }
  }
`;
export const usePropertiesQuery = (filter = { }) => {
    const { data, ...result } = useQuery(useGetPropertiesGql, {
        variables: { filter: filter },
        fetchPolicy: "network-only",
        notifyOnNetworkStatusChange: true
    })

    const properties = data?.listings.edges || []

    return { properties, ...result }
};

