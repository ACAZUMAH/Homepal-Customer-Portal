import { Paper, Flex, Select, Button, TextInput } from "@mantine/core";
import React, { useState } from "react";
import {
  IconBuilding,
  IconCurrencyDollar,
  IconMapPin,
  IconChevronDown,
  IconSearch,
} from "@tabler/icons-react";


/**
 * 
 * @param {*} props 
 * @returns 
 */
export const SearchBar = (props) => {
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = () => {
    const filter = {
      type,
      address,
      price,
    };
    props.onSearch(filter);
    setType("");
    setAddress("");
    setPrice("");
  };

  return (
    <>
      <Paper
        radius="3rem"
        mt="xl"
        p="sm"
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
            flex="2"
            data={["Buy", "Rent"]}
            placeholder="Choose Mode"
            radius="xl"
            value={props.mode}
            rightSection={<IconChevronDown />}
            classNames={{ input: "searchInput" }}
          />
          <TextInput
            flex="2"
            radius="xl"
            placeholder="Property type"
            leftSection={<IconBuilding stroke={1.5} />}
            value={type}
            onChange={(e) => setType(e.target.value)}
            classNames={{ input: "searchInput" }}
          />
          <TextInput
            flex="4"
            radius="xl"
            placeholder="Location"
            leftSection={<IconMapPin stroke={1.5} />}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            classNames={{ input: "searchInput" }}
          />
          <TextInput
            flex="3"
            radius="xl"
            placeholder="Price"
            leftSection={ "GH¢" }
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            classNames={{ input: "searchInput" }}
          />
          <Button
            radius="xl"
            underline="always"
            color="#005e83"
            flex="1"
            c="#fff"
            onClick={handleSearch}
            leftSection={<IconSearch stroke={1.5} size={20} />}
          >
            Search
          </Button>
        </Flex>
      </Paper>
    </>
  );
};
