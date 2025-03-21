import { gql, useMutation } from "@apollo/client";
import { showNotification } from "@mantine/notifications";

const createListingGql = gql`
  mutation CreateListing($data: CreateListingInput) {
    createListing(data: $data) {
      _id
    }
  }
`;

export const useCreateListing = () => {
  const [createListing, result] = useMutation(createListingGql);

  const submitListing = async (data) => {
    try {
      
      await createListing({ variables: { data } })

      showNotification({
        title: "Success",
        message: "Listing successfully created",
        color: "#00c898",
      });

    } catch (error) {
      showNotification({
        title: "Error",
        color: "red",
        message:
          error.message || "An error occurred while creating your listing",
      });
    }
  };

  return { submitListing, ...result }
};
