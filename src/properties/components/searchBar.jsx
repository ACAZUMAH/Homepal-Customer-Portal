import {
  Paper,
  Flex,
  Select,
  Button,
  TextInput,
  MultiSelect,
  Menu,
} from "@mantine/core";
import React, { useState } from "react";
import {
  IconBuilding,
  IconCurrencyDollar,
  IconMapPin,
  IconChevronDown,
  IconSearch,
} from "@tabler/icons-react";

export const SearchBar = (props) => {
  const [mode, setMode] = useState("")
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = () => {
    const filter = {
      type,
      address,
      price,
      mode
    }
    props.onSearch(filter)
    setType("")
    setAddress("")
    setPrice("")
  };

  return (
    <>
      <Paper
        shadow="md"
        radius="xl"
        mt="xl"
        p="md"
        bg="var(--mantine-color-white)"
        withBorder
      >
        <Flex
          gap="md"
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
          align="stretch"
        >
          <Select
            flex="1"
            data={["Buy", "Rent"]}
            placeholder="mode"
            radius="xl"
            size="md"
            value={mode}
            onChange={setMode}
            rightSection={<IconChevronDown />}
            styles={{
              input: {
                backgroundColor: "#f0f7fd",
              },
            }}
          />
          <TextInput
            flex="2"
            radius="xl"
            size="md"
            placeholder="Property type"
            leftSection={<IconBuilding stroke={1.5} />}
            value={type}
            onChange={(e) => setType(e.target.value)}
            styles={{
              input: {
                backgroundColor: "#f0f7fd",
              },
            }}
          />
          <TextInput
            flex="4"
            radius="xl"
            size="md"
            placeholder="Location"
            leftSection={<IconMapPin stroke={1.5} />}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            styles={{
              input: {
                backgroundColor: "#f0f7fd",
              },
            }}
          />
          <TextInput
            flex="3"
            radius="xl"
            size="md"
            placeholder="Price"
            leftSection={<IconCurrencyDollar stroke={1.5} />}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            styles={{
              input: {
                backgroundColor: "#f0f7fd",
              },
            }}
          />
          <Button
            radius="xl"
            underline="always"
            color="#005e83"
            flex="1"
            size="md"
            c="#fff"
            onClick={handleSearch}
            leftSection={<IconSearch stroke={1.5} size={20} />}
          >
            Save Search
          </Button>
        </Flex>
      </Paper>
    </>
  );
};
