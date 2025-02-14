import { gql, useMutation } from "@apollo/client";
import { showNotification } from "@mantine/notifications";

const sendOTPMutationGql = gql`
  mutation LoginWithPhoneNumber($phoneNumber: PhoneNumber!) {
    loginWithPhoneNumber(phoneNumber: $phoneNumber) {
      message
    }
  }
`;

export const useSendOTPMutation = () => {
    const [sendOTPMutation, { loading, error }] = useMutation(sendOTPMutationGql)

    const sendOTPHandler = async (phoneNumber) => {
        try {
            await sendOTPMutation({
                variables: { phoneNumber }
            })

            showNotification({
              title: "Success",
              message: "OTP sent successfully.",
              color: "#00c898",
            });

            return true
        } catch (error) {
           showNotification({
            title: "Error",
            message: error.message || "there was an error sending OTP.",
            color: "red"
           })
        }
    }

    return { sendOTPHandler, loading, error }
}
