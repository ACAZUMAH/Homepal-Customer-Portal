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
import { SearchBar } from "../../../components/search-bar/searchSection";

export const HeroSection = ({ onSearch }) => {

  return (
    <>
      <BackgroundImage src={background}>
        <Container size="87%">
          <Box pt={250} pb={50}>
            <Title c="#00c898" fw="bold" size="3.8rem">
              Discover The Home That
            </Title>
            <Title c="#00c898" fw="bold" size="3.8rem">
              You've Always Dreamt Of
            </Title>
            <Space h="10" />
            <Text size="xl">
              Start your journey to discover the perfect property. Browse our
              listings
            </Text>
            <Text pb="100" size="xl">
              to find the home of your dreams
            </Text>
          </Box>
        </Container>
      </BackgroundImage>
      <Container size="87%" pos="relative">
        <SearchBar onSearch={onSearch}/>
      </Container>
    </>
  );
};
