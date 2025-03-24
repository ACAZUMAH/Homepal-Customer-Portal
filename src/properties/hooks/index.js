import { gql, useQuery } from "@apollo/client";

const useGetPropertiesGql = gql`
  query GetListings($filter: ListingFilters) {
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
        totalCount
      }
    }
  }
`;

export const useGetPropertiesWithPages = (filter = { }) => {
  const { data, ...result } = useQuery(useGetPropertiesGql, {
    variables: { filter: filter },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  const properties = data?.listings?.edges || [];
  const pageInfo = data?.listings?.PageInfo;

  return { properties, pageInfo, ...result };
};
