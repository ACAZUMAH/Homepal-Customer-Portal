import { gql, useQuery } from "@apollo/client";

const usePropertyGql = gql`
  query Listing($listingId: ID!) {
    listing(id: $listingId) {
      _id
      name
      description
      address
      price
      bathrooms
      bedrooms
      type
      mode
      amenities
      imageUrls
      userRef
    }
  }
`;

export const usePropertyQuery = (id) => {
    const { data, ...result } = useQuery(usePropertyGql, {
        variables: { listingId: id },
        fetchPolicy: "network-only",
        notifyOnNetworkStatusChange: true
    })

    const property = data?.listing || []

    return { property, ...result }
}