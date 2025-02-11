import { Container, } from "@mantine/core";
import { AuthPage } from "../components/auth/authPage";

export const Login = () => {
  return (
    <>
      <Container size="xs" pt="xl">
        <AuthPage />
      </Container>
    </>
  );
};
