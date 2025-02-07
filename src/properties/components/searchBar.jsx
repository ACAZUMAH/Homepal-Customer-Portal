import {
  Paper,
  Flex,
  Select,
  Button,
} from "@mantine/core";
import React from "react";
import {
  IconBuilding,
  IconCurrencyDollar,
  IconMapPin,
  IconAdjustmentsHorizontal,
  IconChevronDown,
  IconSearch,
} from "@tabler/icons-react";

export const SearchBar = () => {
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
            defaultValue="Buy"
            radius="xl"
            size="md"
            rightSection={<IconChevronDown />}
          ></Select>
          <Select
            flex="2"
            data={[]}
            radius="xl"
            size="md"
            placeholder="Property type"
            leftSection={<IconBuilding />}
            rightSection={<IconChevronDown />}
          ></Select>
          <Select
            flex="4"
            data={[]}
            radius="xl"
            size="md"
            placeholder="Location"
            leftSection={<IconMapPin />}
            rightSection={<IconChevronDown />}
          ></Select>
          <Select
            flex="3"
            data={[]}
            radius="xl"
            size="md"
            placeholder="Price"
            leftSection={<IconCurrencyDollar />}
            rightSection={<IconChevronDown />}
          ></Select>
          <Button
            variant="outline"
            radius="xl"
            flex="1"
            color="#005e83"
            size="md"
            leftSection={<IconAdjustmentsHorizontal />}
          >
            Filter
          </Button>

          <Button
            radius="xl"
            underline="always"
            color="#005e83"
            flex="1"
            size="md"
            c="#fff"
            leftSection={<IconSearch stroke={1.5} size={20} />}
          >
            Save Search
          </Button>
        </Flex>
      </Paper>
    </>
  );
}
