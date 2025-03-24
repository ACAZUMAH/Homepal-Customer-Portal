import { gql, useMutation } from "@apollo/client";
import { showNotification } from "@mantine/notifications";

const updateUserMutationGql = gql`
  mutation UpdateUser($data: UpdateUserInput) {
    updateUser(data: $data) {
      id
      firstName
      lastName
      email
      phoneNumber
      isAuthenticated
      createdAt
      updatedAt
    }
  }
`;

export const useUpdateUserMutation = () => {
  const [updateUser, result] = useMutation(updateUserMutationGql);

  const handleUpdateUser = async (data) => {
    try {
      const response = await updateUser({ variables: { data } });

      showNotification({
        title: "Success",
        message: "User updated successfuly",
        color: "#00c898",
      });

      return response.data?.updateUser;

    } catch (error) {
        showNotification({
            title: "Error",
            message: "There was an error updating user",
            color: "red"
        })
    }
  };

  return { handleUpdateUser, ...result }
};
