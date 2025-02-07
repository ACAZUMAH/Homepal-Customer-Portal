import { Stack, Image, Title } from "@mantine/core";
import errorSvgImage from "/src/assets/images/empty_error.svg";

export const EmptyProperties = () => {
  return (
    <>
      <Stack gap="md" justify="center" align="center" my="xl">
        <Image w={300} h="auto" src={errorSvgImage}  alt="properties error"  />
        <Title>No properties found</Title>
      </Stack>
    </>
  );
};
