import React from 'react'
import { useAppNavigation } from '../../hooks';
import { routesEndPoints } from '../../constants';
import { Box, Button, Image, Stack, Text, Title } from '@mantine/core';
import notfound from '../../assets/images/not-found.png'

export const EmptyOffers = () => {
  const navigateToHome = useAppNavigation(routesEndPoints.HOME);
  return (
    <>
      <Stack justify="center" align="center" my="xl">
        <Box>
          <Image src={notfound} h={300} fit="contain" />
          <Title order={3} c="#00c898" ta="center">
            No received offers
          </Title>
          <Text size="md" ta="center">
            No offers have been made on any of your listing yet
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
}
