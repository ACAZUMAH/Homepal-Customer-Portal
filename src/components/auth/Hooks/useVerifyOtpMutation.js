import { gql, useMutation } from "@apollo/client";
import { showNotification } from "@mantine/notifications";

const verifyOTPMutationGql = gql`
  mutation CompleteAuthAndGenerateToken($token: String!) {
    completeAuthAndGenerateToken(token: $token) {
      token
      user {
        id
        firstName
        lastName
        phoneNumber
        email
        isAuthenticated
        createdAt
        updatedAt
      }
    }
  }
`;

export const useVerifyOTPMutation = () => {
    const [verifyMutation, { loading, error }] = useMutation(verifyOTPMutationGql)

    const handleVerifyOTPMutation = async (otp) => {
        try {
            const { data } = await verifyMutation({
                variables: { token: otp }
            })
    
            if (!data?.completeAuthAndGenerateToken.token){
              throw Error("No token");
            }
            showNotification({
              title: "Success",
              message: "You have successfully been logged in",
              color: "#00c898",
            });
            
            return data?.completeAuthAndGenerateToken
        } catch (error) {
            showNotification({
                title: "Error",
                message: "There was an error logging in with OTP",
                color: "red"
            })
        }
    }

    return { handleVerifyOTPMutation, loading, error}
}
