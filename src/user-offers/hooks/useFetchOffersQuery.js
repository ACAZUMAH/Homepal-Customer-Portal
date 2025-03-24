import { gql, useQuery } from "@apollo/client";

const offersQueryGql = gql`
  query GetRecievedOffers {
    getRecievedOffers {
      _id
      agentId
      email
      firstName
      message
      offerAmount
      phoneNumber
      propertyId
      property {
        name
        price
      }
    }
  }
`;

export const useFetchOffers = () => {
    const { data, ...result } = useQuery(offersQueryGql, {
      fetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true,
    });

    const offerData = data?.getRecievedOffers;

    console.log(data?.getRecievedOffers)

    return { offerData, ...result }
}