import { useQuery, gql } from "@apollo/client";

const useGetPropertiesGql = gql`
  query GetListings($filter: listingFilter) {
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
      PageInfo {
        page
        total
        limit
        hasNextPage
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
    const pageInfo = data?.listings.PageInfo

    return { properties, pageInfo, ...result }
};

