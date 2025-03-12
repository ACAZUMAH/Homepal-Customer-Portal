import { useState } from "react";
import {
  BackgroundImage,
  Box,
  Title,
  Text,
  Space,
  Container,
} from "@mantine/core";
import background from "../../../assets/images/hero.png";
import { SearchBar } from "../search-bar/index";

export const HeroSection = ({ onSearch }) => {

  return (
    <>
      <BackgroundImage fit="cover" src={background} h={510}>
        <Container size="xl">
          <Box pt={180} pb={50}>
            <Title c="#00c898" fw="bold" size="3.3rem">
              Discover The Home That <br /> You've Always Dreamt Of
            </Title>
            <Space h="10" />
            <Text size="lg" pb="40" visibleFrom="sm">
              Start your journey to discover the perfect property. Browse our
              listings
              <br />
              to find the home of your dreams
            </Text>
          </Box>
        </Container>
      </BackgroundImage>
      <Container size="xl" pos="relative">
        <SearchBar onSearch={onSearch} />
      </Container>
    </>
  );
};
