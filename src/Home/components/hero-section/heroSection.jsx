import React, { useState } from "react";
import {
  BackgroundImage,
  Box,
  Title,
  Text,
  Space,
  SegmentedControl,
  Flex,
  TextInput,
  Paper,
  Button,
  Container,
} from "@mantine/core";
import {
  IconBuilding,
  IconCurrencyDollar,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react";
import background from "../../../assets/images/hero.png";
import classes from "../../styles/index.module.css";

export const HeroSection = (props) => {
  const [value, setValue] = useState("Buy");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const HandleSearch = () => {
    const data = {
      mode: value === "Buy" ? "SALE" : "RENT",
      type,
      address,
      price
    }
    props.onSearch(data)
    setValue("Buy")
    setType("")
    setAddress("")
    setPrice("")
  }

  return (
    <>
      <BackgroundImage src={background}>
        <Container size="87%">
          <Box pt={200}>
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
          <Box></Box>
        </Container>
      </BackgroundImage>
      <Container size="87%" pos="relative">
        <Paper
          shadow="xl"
          radius="5rem"
          bg="var(--mantine-color-white)"
          h="auto"
          pos="absolute"
          bottom="-50px"
          left="35.7%"
          w="70%"
          mx="auto"
          style={{ transform: "translateX(-50%)", zIndex: 10 }}
          visibleFrom="md"
        >
          <Flex
            flex="grow"
            p="20px"
            gap={8}
            direction={{ base: "column", md: "row" }}
            align="stretch"
          >
            <TextInput
              flex="3"
              size="md"
              radius="xl"
              styles={{
                input: {
                  backgroundColor: "#f0f7fd",
                },
              }}
              placeholder="Property type"
              value={type}
              onChange={(event) => setType(event.target.value)}
              leftSection={
                <IconBuilding color="#005e83" stroke={1.5} size={20} />
              }
            />
            <TextInput
              flex="4"
              size="md"
              radius="xl"
              placeholder="location"
              styles={{
                input: {
                  backgroundColor: "#f0f7fd",
                },
              }}
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              leftSection={
                <IconMapPin color="#005e83" stroke={1.5} size={20} />
              }
            />
            <TextInput
              flex="2"
              size="md"
              radius="xl"
              placeholder="Price"
              styles={{
                input: {
                  backgroundColor: "#f0f7fd",
                },
              }}
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              leftSection={
                <IconCurrencyDollar color="#005e83" stroke={1.5} size={20} />
              }
            />
            <SegmentedControl
              flex="2"
              radius="xl"
              size="md"
              classNames={{
                label: classes.custom,
              }}
              value={value}
              onChange={setValue}
              data={["Buy", "Rent"]}
              transitionDuration={400}
              transitionTimingFunction="linear"
            />
            <Button
              flex="1"
              color="#005e83"
              size="md"
              radius="xl"
              classNames={{
                label: classes.button,
              }}
              onClick={HandleSearch}
              leftSection={<IconSearch stroke={1.5} size={20} />}
            >
              Search
            </Button>
          </Flex>
        </Paper>
      </Container>
    </>
  );
};
