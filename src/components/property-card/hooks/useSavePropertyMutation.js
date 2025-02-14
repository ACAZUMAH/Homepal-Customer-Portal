import { gql, useMutation } from "@apollo/client";
import { showNotification } from "@mantine/notifications";

const savePropertyMutationGql = gql`
  mutation SaveProperty($propertyId: String!) {
    saveProperty(propertyId: $propertyId) {
      id
      phoneNumber
      savedProperties {
        _id
        name
      }
    }
  }
`;

export const useSavePropertyMutation = () => {
  const [saveProperty, { loading, error }] = useMutation(
    savePropertyMutationGql,
    { refetchQueries: [] }
  );

  const handleSaveProperty = async (id) => {
    try {
      const { data } = await saveProperty({
        variables: { propertyId: id },
      });

      if (data?.saveProperty?.savedProperties) {
        const isAdded = data.saveProperty.savedProperties.some(
          (property) => property._id === id
        );

        if (!isAdded) throw Error("Unable to add property your saved list");
      }

      showNotification({
        title: "Success",
        message: "Property saved to your list",
        color: "#00c898",
      });
    } catch (error) {
      showNotification({
        title: "Error",
        message:
          error.message ||
          "There was an Error adding property your saved list.",
        color: "red",
      });
    }
  };

  return { handleSaveProperty, loading, error };
};
