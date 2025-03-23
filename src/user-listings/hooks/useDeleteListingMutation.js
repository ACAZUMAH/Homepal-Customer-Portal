import { gql, useMutation } from "@apollo/client";
import { showNotification } from "@mantine/notifications";

const deleteListingMutationGql = gql`
  mutation DeleteListing($deleteListingId: ID!) {
    deleteListing(id: $deleteListingId) {
      message
    }
  }
`;


export const useDeleteListingMutation = () => {
    const [mutation, ...result] = useMutation(deleteListingMutationGql, {
      refetchQueries: ["GetUserListings"],
      fetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true,
    });

    const onDeleteHandler = async (id) => {
        try {
           await mutation({ variables: { deleteListingId: id } });
           
           showNotification({
             title: "Success",
             message: "Successfully deleted listing",
             color: "#00c898",
           });
        } catch (error) {
            showNotification({
                title: "Error",
                message: "There was an error deleting listing",
                color: "red"
            })
        }
    }

    return { onDeleteHandler, ...result }
}