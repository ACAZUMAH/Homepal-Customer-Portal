import { gql, useMutation } from "@apollo/client";
import { showNotification } from "@mantine/notifications";

const makeofferMutationGql = gql`
  mutation CreateOffer($data: createOfferInput) {
    createOffer(data: $data) {
      _id
    }
  }
`;

export const useMakeOfferMutation = () => {
  const [mutate, result] = useMutation(makeofferMutationGql);

  const handleSubmitOffer = async (data) => {
    try {
      await mutate({ variables: { data } });

      showNotification({
        title: "Success",
        message: "Offer sent successfully",
        color: "#00c898",
      });

      return true;
    } catch (error) {
      showNotification({
        title: "Error",
        message: "There was an error sending offer",
        color: "red",
      });

      return false;
    }
  };

  return { handleSubmitOffer, ...result }
};
