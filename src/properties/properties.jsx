import {
  Center,
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Pagination,
  Group,
  Select,
  Space
} from "@mantine/core";
import { useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronDown,
} from "@tabler/icons-react";
import { PropertyCard, PropertyLoader } from "../components/property-card";
import { useGetPropertiesWithPages } from "./hooks";
import { Conditional } from "../components/conditional";
import { EmptyProperties } from "./components/emptyProperties";
import { PropertiesError } from "./components/propertiesError";
import { SearchBar } from "./components/searchBar";

export const Properties = (props) => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Oldest")
  const [page, setPage] = useState(1)

  const search = (filters) => {
    setFilters({ ...filters });
  };

  let mode;
  if(filters.mode === "Buy"){
    mode = "SALE"
  }else if(filters.mode === "Rent"){
    mode = "RENT"
  }else{
    mode = null
  }

  const { pageInfo, properties, loading, error } = useGetPropertiesWithPages({
    ...filters,
    sort: sort,
    price: filters.price ? Number(filters.price) : null,
    mode, 
    limit: 16,
    page
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
        <SearchBar onSearch={search} />
        <Conditional condition={loading || properties}>
          <Title mt={70} c="#00c898" order={1} size="2.5rem">
            Explore available Properties
          </Title>
          <Group justify="space-between" gap="xs">
            <Text mt={15} size="xl">
              Browse through a variety of homes and apartments to find your
              ideal property.
            </Text>
            <Space w={500} />
            <Group justify="flex-end">
              <Text size="md">Sort By:</Text>
              <Select
                data={["Newest", "Oldest"]}
                defaultValue="Oldest"
                value={sort}
                onChange={setSort}
                rightSection={<IconChevronDown stroke={1.5} />}
                rightSectionWidth={20}
                radius="xl"
              />
            </Group>
          </Group>
          <SimpleGrid mt="xl" mb={50} cols={{ base: 1, xs: 2, md: 3, xl: 4 }}>
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
            <Conditional condition={loading}>
              {Array(16)
                .fill(1)
                .map((_, index) => (
                  <PropertyLoader key={index} />
                ))}
            </Conditional>
          </SimpleGrid>
        </Conditional>
        <Conditional condition={showErrorAlert}>
          <PropertiesError />
        </Conditional>
        <Conditional condition={showEmptyAlert}>
          <EmptyProperties />
        </Conditional>
        <Conditional condition={showPagenation}>
          <Group gap={10} pb={50} justify="center">
            <Pagination
              color="#00c898"
              size="xl"
              total={2}
              siblings={2}
              defaultValue={1}
              previousIcon={IconArrowLeft}
              nextIcon={IconArrowRight}
              value={page}
              onChange={setPage}
            />
          </Group>
        </Conditional>
      </Container>
    </>
  );
};
