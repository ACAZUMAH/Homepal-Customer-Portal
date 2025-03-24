import { Stack, Box, Title, Text, Button, Image } from "@mantine/core";
import { useAppNavigation } from "../../hooks";
import { routesEndPoints } from "../../constants";
import notfound from '../../assets/images/not-found.png'

export const EmptyProperties = () => {
  const navigateToHome = useAppNavigation(routesEndPoints.HOME);
  return (
    <>
      <Stack justify="center" align="center" my="xl">
        <Box>
          <Image src={notfound} h={300} fit="contain" />
          <Title order={3} c="#00c898" ta="center">
            No properties found
          </Title>
          <Text size="md" ta="center">
            Didn't find what you're looking for? Contact us on our support mail.
            Our support team will help you out.
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
