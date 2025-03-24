import { Stack, Box, Title, Text, Button, Image } from "@mantine/core";
import { useAppNavigation } from "../../hooks";
import { routesEndPoints } from "../../constants";
import errorImage from '../../assets/images/Error.svg'

export const FetchError = ({ message }) => {

  const navigateToHome = useAppNavigation(routesEndPoints.HOME);
  
  return (
    <>
      <Stack justify="center" align="center" mb="xl">
        <Box>
          <Image src={errorImage} h={300} fit="contain" />
          <Title order={3} c="#00c898" ta="center">
            Oops! Something went wrong
          </Title>
          <Text size="sm" ta="center">{message}</Text>
        </Box>
        <Button
          color="#00c898"
          radius="xl"
          size="sm"
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
