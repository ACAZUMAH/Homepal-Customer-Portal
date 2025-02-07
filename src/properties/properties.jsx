import {
  Center,
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Pagination,
  Group,
} from "@mantine/core";
import React from "react";
import {
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-react";
import { PropertyCard, PropertyLoader } from "../components/property-card";
import { useGetPropertiesWithPages } from "./hooks";
import { Conditional } from "../components/conditional";
import { EmptyProperties } from "./components/emptyProperties";
import { PropertiesError } from "./components/propertiesError";
import { SearchBar } from "./components/searchBar";

export const Properties = (props) => {
  const { properties, loading, error } = useGetPropertiesWithPages({
    limit: 16,
  });

  const showErrorAlert = !loading && error;
  const showEmptyAlert = !properties.length && !loading && !error;
  const showPagenation = properties.length && !loading && !error;

  return (
    <>
      <Container size="87%" py="xl" pos="relative">
        <Center mt={40}>
          <Stack gap={20}>
            <Title c="#00c898" fw="bold" order={1} size="3.5rem">
              Find Your Perfect Home to Own
            </Title>
            <Stack gap={8}>
              <Text size="1.5rem">
                Explore a curated selection of properties that match your dreams
                and budget.
              </Text>
              <Text size="1.5rem">
                Start your journey to homeownership today.
              </Text>
            </Stack>
          </Stack>
        </Center>
        <SearchBar />
        <SimpleGrid mt="xl" mb={50} cols={{ base: 1, xs: 2, md: 3, xl: 4 }}>
          <Conditional condition={loading}>
            {Array(16)
              .fill(1)
              .map((_, index) => (
                <PropertyLoader key={index} />
              ))}
          </Conditional>
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </SimpleGrid>
        <Conditional condition={showPagenation}>
          <Group gap={10} pb={50} justify="center">
            <Pagination
              color="#00c898"
              size="xl"
              total={16}
              siblings={2}
              defaultValue={1}
              previousIcon={IconArrowLeft}
              nextIcon={IconArrowRight}
            >
              <Pagination.Root total={16}>
                <Pagination.Previous icon={IconArrowLeft}></Pagination.Previous>
                <Pagination.Next icon={IconArrowRight}></Pagination.Next>
              </Pagination.Root>
            </Pagination>
          </Group>
        </Conditional>
        <Conditional condition={showErrorAlert}>
          <PropertiesError />
        </Conditional>
        <Conditional condition={showEmptyAlert}>
          <EmptyProperties />
        </Conditional>
      </Container>
    </>
  );
};
