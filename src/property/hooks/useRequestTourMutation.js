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
  const [createTourRequest, { loading, error }] = useMutation(
    requestTourMutationGql,
    {}
  );

  const handleCreateRequestTour = async (data) => {
    try {
        await createTourRequest({ variables:{ data } })

        showNotification({
            title: "Success",
            message: "Request succesfully sent",
            color: "#00c898"
        })

        return true
    } catch (error) {
        showNotification({
            title: "Error",
            message: "Oops! something went wrong",
            color: 'red'
        }) 

        return false
    }
  }

  return { handleCreateRequestTour, loading, error }
};
