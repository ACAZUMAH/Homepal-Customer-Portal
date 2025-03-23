import { gql, useMutation } from "@apollo/client";
import { showNotification } from "@mantine/notifications";

const updateListingMutationGql = gql`
  mutation UpdateListing($data: UpdateListingInput) {
    updateListing(data: $data) {
      _id
    }
  }
`;

export const useUpdateListingMutation = () => {
  const [mutate, result] = useMutation(updateListingMutationGql, {
    refetchQueries: ["Listing"],
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  const updateHandler = async (data) => {
    try {
      await mutate({ variables: { data } });
      showNotification({
        title: "Success",
        message: "Successfully updated listing",
        color: "#00c898",
      });
    } catch (error) {
      showNotification({
        title: "Error",
        message: "There was an error updating listing",
        color: "red"
      })
    }
  };

  return { updateHandler, ...result };
};
