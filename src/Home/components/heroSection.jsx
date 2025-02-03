import React from "react";
import {
  BackgroundImage,
  Box,
  Container,
  Title,
  Text,
  Stack,
  Flex,
  Space,
} from "@mantine/core";
import background from "../../assets/images/hero.png";

export const HeroSection = () => {
  return (
    <>
      <BackgroundImage src={background}>
        <Box ml={111} pt={250}>
          <Title c="#00c898" fw="bold" size="3.3rem">
            Discover The Home That
          </Title>
          <Title c="#00c898" fw="bold" size="3.3rem">
            You've Always Dreamt Of
          </Title>
          <Space h="10" />
          <Text size="xl">
            Start your journey to discover the perfect property. Browse our
            listings
          </Text>
          <Text pb="100" size="xl">to find the home of your dreams</Text>
        </Box>
      </BackgroundImage>
    </>
  );
};
