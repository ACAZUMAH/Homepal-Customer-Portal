import React, { useState } from "react";
import {
  Flex,
  TextInput,
  Paper,
  Button,
  SegmentedControl,
} from "@mantine/core";
import {
  IconBuilding,
  IconCurrencyDollar,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react";
import classes from "../../styles/index.module.css";

export const SearchBar = (props) => {
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
      <Paper
        shadow="md"
        bg="var(--mantine-color-white)"
        h="auto"
        pos="absolute"
        bottom={{ base: "-12rem", md: "-40px" }}
        left={{ base: "50%", md: "43.7%" }}
        w={{ base: "70%", md: "85%" }}
        mx="auto"
        style={{ transform: "translateX(-50%)", zIndex: 10 }}
        withBorder
        className={classes["search-container"]}
      >
        <Flex
          flex="grow"
          p="15px"
          gap={8}
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "stretch" }}
        >
          <TextInput
            w={{ base: "100%", md: "auto" }}
            flex="3"
            size="sm"
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
            w={{ base: "100%", md: "auto" }}
            flex="4"
            size="sm"
            radius="xl"
            placeholder="location"
            styles={{
              input: {
                backgroundColor: "#f0f7fd",
              },
            }}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            leftSection={<IconMapPin color="#005e83" stroke={1.5} size={20} />}
          />
          <TextInput
            w={{ base: "100%", md: "auto" }}
            flex="2"
            size="sm"
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
            w={{ base: "100%", md: "auto" }}
            flex="2"
            radius="xl"
            size="sm"
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
            w={{ base: "100%", md: "auto" }}
            flex="1"
            color="#005e83"
            size="sm"
            radius="xl"
            onClick={HandleSearch}
            leftSection={<IconSearch stroke={1.5} size={20} />}
          >
            Search
          </Button>
        </Flex>
      </Paper>
    </>
  );
};
