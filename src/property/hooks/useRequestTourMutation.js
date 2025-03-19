import { gql, useMutation } from "@apollo/client";
import { showNotification } from "@mantine/notifications";

const requestTourMutationGql = gql`
  mutation CreateRequest($data: createTourInput) {
    createTourRequest(data: $data) {
      _id
    }
  }
`;

export const useRequestTourMutation = () => {
  const [mutate, result] = useMutation(
    requestTourMutationGql,
    {}
  );

  const handleCreateRequestTour = async (data) => {
    try {
        await mutate({ variables:{ data } })

        showNotification({
            title: "Success",
            message: "Request succesfully sent",
            color: "#00c898"
        })

        return true
    } catch (error) {
    showNotification({
        title: "Error",
        message: "There was an error sending request",
        color: 'red'
    }) 



        return false
    }
  }

  return { handleCreateRequestTour, ...result }
};
