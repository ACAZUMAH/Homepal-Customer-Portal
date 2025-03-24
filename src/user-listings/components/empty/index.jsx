import { Box, Image, Stack, Text, Title } from "@mantine/core";
import React from "react";
import notfound from "../../../assets/images/not-found.png";

export const EmptyListing = () => {
  return (
    <>
      <Stack justify="center" align="center" my="xl">
        <Box>
          <Image src={notfound} h={300} fit="contain" />
          <Title order={3} c="#00c898" ta="center">
            No Listings found
          </Title>
          <Text>
            You don't have a property listings yet. Tap on the add listing
            button to add new listings.
          </Text>
        </Box>
      </Stack>
    </>
  );
};
