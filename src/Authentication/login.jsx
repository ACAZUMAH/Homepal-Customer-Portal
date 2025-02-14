import { Container } from "@mantine/core";
import { AuthPage } from "../components/auth/authPage";
import { useState } from "react";
import { useAppNavigation } from "../hooks";
import { routesEndPoints } from "../constants";

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigateToHome = useAppNavigation(routesEndPoints.HOME);

  return (
    <>
      <Container size="xs" pt="xl">
        <AuthPage
          phoneNumber={phoneNumber}
          onChangePhoneNumber={(phoneNumber) => setPhoneNumber(phoneNumber)}
          onSuccess={navigateToHome}
        />
      </Container>
    </>
  );
};
