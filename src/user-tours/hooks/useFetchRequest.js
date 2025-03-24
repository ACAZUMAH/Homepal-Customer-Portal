import { gql, useQuery } from "@apollo/client";

const getTourRequestGql = gql`
  query GetTourRequests {
    getTourRequests {
      clientId
      propertyId
      property {
        _id
        address
        bathrooms
        bedrooms
        imageUrls
        name
        price
      }
      scheduledDate
      tourMode
      contactDetails
    }
  }
`;

export const useFetchTourRequest = () => {

  const { data, ...result } = useQuery(getTourRequestGql, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  const requestData = data?.getTourRequests || [];

  return { requestData, ...result }

};