import React, { useState } from "react";
import {
  Flex,
  TextInput,
  Paper,
  Button,
  Box
} from "@mantine/core";
import classes from "../../styles/index.module.css";
import { IconBuilding, IconCurrencyDollar, IconMapPin, IconSearch } from "@tabler/icons-react";

export const SearchSection = (props) => {
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const HandleSearch = () => {
    const searchData = {
        type,
        address,
        price
    }
    props.OnSearch(searchData)
    setType("");
    setAddress("");
    setPrice("");
  };

  return (
    <>
      <Paper
        shadow="md"
        radius="md"
        mr={550}
        ml={157}
        bg="var(--mantine-color-blue-light)"
        h="auto"
        visibleFrom="md"
      >
        <Flex
          flex="grow"
          p="18px"
          gap={8}
          direction={{ base: "column", md: "row" }}
          align="stretch"
        >
          <TextInput
            flex="3"
            size="md"
            radius="xl"
            placeholder="Property type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            leftSection={<IconBuilding stroke={1.5} size={20} />}
          />
          <TextInput
            flex="4"
            size="md"
            radius="xl"
            placeholder="location"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            leftSection={<IconMapPin stroke={1.5} size={20} />}
          />
          <TextInput
            flex="2"
            size="md"
            radius="xl"
            placeholder="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            leftSection={<IconCurrencyDollar stroke={1.5} size={20} />}
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
    </>
  );
};
