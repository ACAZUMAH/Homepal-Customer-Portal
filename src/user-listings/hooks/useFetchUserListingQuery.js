import { gql, useQuery } from "@apollo/client";

const userListingQueryGql = gql`
  query GetUserListings($filters: listingFilters) {
    getUserListings(filters: $filters) {
      edges {
        _id
        address
        amenities
        bathrooms
        bedrooms
        description
        imageUrls
        mode
        name
        price
        type
      }
      PageInfo {
        hasNextPage
        limit
        page
        total
        totalCount
      }
    }
  }
`;

export const useFetchUserListing = ( filters = { }) => {

  const { data, ...result } = useQuery(userListingQueryGql, {
    variables: { filters },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true
  });

  const Listings = data?.getUserListings?.edges || [];

  const pageInfo = data?.getUserListings?.PageInfo;

  return { Listings, pageInfo, ...result }

};
