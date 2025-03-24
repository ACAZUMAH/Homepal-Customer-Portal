import { gql, useQuery } from "@apollo/client";

const getRequestedToursGql = gql`
  query GetRequestedTours {
    getRequestedTours {
      _id
      agentId
      propertyId
      scheduledDate
      tourMode
      contactDetails
      agent {
        phoneNumber
      }
      property {
        _id
        address
        bathrooms
        bedrooms
        imageUrls
        price
        name
      }
    }
  }
`;


export const useFetchRequestedTours = ( filters = { }) => {

  const { data, ...result } = useQuery(getRequestedToursGql, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true
  });

  const requestData = data?.getRequestedTours || []

  return { requestData, ...result }

};