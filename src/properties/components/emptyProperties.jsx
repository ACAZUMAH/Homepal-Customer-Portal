import { Stack, Box, Title, Text, Button } from "@mantine/core";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useAppNavigation } from "../../hooks";
import { routesEndPoints } from "../../constants";

export const EmptyProperties = () => {
  const navigateToHome = useAppNavigation(routesEndPoints.HOME);
  return (
    <>
      <Stack gap="lg" justify="center" align="center" h="auto" my="xl">
        <Box>
          <DotLottieReact
            src="https://lottie.host/97f03811-a9d0-4a08-8b19-4924812d6841/AUaFLucjy1.lottie"
            loop
            autoplay
          />
          <Title order={2} c="#00c898" ta="center">
            No properties found
          </Title>
          <Text size="md" ta="center">
            Didn't find what you're looking for? Contact us on our support mail.
          </Text>
        </Box>
        <Button
          color="#00c898"
          radius="xl"
          size="md"
          component="a"
          href={routesEndPoints.HOME}
          onClick={(e) => {
            e.preventDefault();
            navigateToHome();
          }}
        >
          Return Home
        </Button>
      </Stack>
    </>
  );
};
