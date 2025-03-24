import { Box, Image, Stack, Text, Title } from "@mantine/core";
import React from "react";
import notfound from "../../assets/images/not-found.png";

export const EmptyTours = ({ message }) => {
  return (
    <>
      <Stack justify="center" align="center" my="xl">
        <Box>
          <Image src={notfound} h={300} fit="contain" />
          <Title order={3} c="#00c898" ta="center">
            No tour request found
          </Title>
          <Text>
            {message}
          </Text>
        </Box>
      </Stack>
    </>
  );
};
