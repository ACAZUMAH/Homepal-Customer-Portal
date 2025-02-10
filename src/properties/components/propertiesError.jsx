import { Stack, Box, Title, Text, Button } from "@mantine/core";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useAppNavigation } from "../../hooks";
import { routesEndPoints } from "../../constants";

export const PropertiesError = () => {
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
            Oops! Something went wrong
          </Title>
          <Text size="md" ta="center">
            We encountered an issue while fetching properties. Our technical team
            is working to resolve it as quickly as possible.
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
