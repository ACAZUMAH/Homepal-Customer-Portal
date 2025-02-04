import React, { useState } from "react";
import {
  BackgroundImage,
  Box,
  Title,
  Text,
  Space,
  SegmentedControl,
} from "@mantine/core";
import background from "../../../assets/images/hero.png";
import classes from '../../styles/index.module.css'

export const HeroSection = (props) => {
  const [value, setValue] = useState("Buy");

  return (
    <>
      <BackgroundImage src={background}>
        <Box ml={157} pt={250}>
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
          <Text pb="100" size="xl">
            to find the home of your dreams
          </Text>
        </Box>
        <Box ml={157}>
          <SegmentedControl
            radius="xs"
            size="lg"
            classNames={{
              label: classes.custom,
            }}
            value={value}
            onChange={setValue}
            data={["Buy", "Rent"]}
            transitionDuration={400}
            transitionTimingFunction="linear"
            onClick={() => props.OnChangeMode(value)}
          />
        </Box>
      </BackgroundImage>

    </>
  );
};
