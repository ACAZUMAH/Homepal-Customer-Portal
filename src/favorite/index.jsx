import {
  Button,
  Container,
  Flex,
  Group,
  Pagination,
  SegmentedControl,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import { useFetchFavoriteProperties } from "./hooks/useFetchFavorites";
import { useAppFavoriteProperty } from "../hooks/useAppFavoriteProperty";
import { PropertiesCard, PropertiesLoader } from "../components/property-card";
import { Conditional } from "../components/conditional";
import { EmptyProperties } from "../properties/components/emptyProperties";
import { PropertiesError } from "../properties/components/propertiesError";

export const Favorite = () => {
  const [page, setPage] = useState(1)

  const { favorites } = useAppFavoriteProperty();

  const { properties, pageInfo, loading, error } = useFetchFavoriteProperties({
    favoriteIds: favorites,
    filters: { page, limit: 12 }
  });

  const showErrorAlert = !loading && error;
  const showEmptyAlert = !properties.length && !loading && !error;
  const showPagenation = properties.length && !loading && !error;
  const showSortAndData = properties.length || (loading && !error);

  const totalPages = Math.abs(pageInfo?.totalCount / pageInfo?.limit) || 0;

  return (
    <>
      <Container px="xl" size="xl">
        <Stack mt={50} gap={20}>
          <Title c="#00c898">My Favorites</Title>
          <Flex justify="center" align="stretch" gap="md">
            <TextInput flex={1} placeholder="Search Favorites" />
            <Button color="#00c898" leftSection={<IconSearch stroke={1.5} />}>
              Search
            </Button>
          </Flex>
        </Stack>
        <Conditional condition={showSortAndData}>
          <SimpleGrid my={40} cols={{ base: 1, xs: 2, md: 3, xl: 4 }}>
            {properties.map((property, index) => (
              <PropertiesCard key={index} {...property} />
            ))}
            <Conditional condition={loading}>
              {Array(16)
                .fill(1)
                .map((_, index) => (
                  <PropertiesLoader key={index} />
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
          <Group gap={10} my={40} justify="flex-end">
            <Pagination
              color="#00c898"
              size="md"
              total={totalPages}
              siblings={1}
              defaultValue={1}
              previousIcon={IconArrowLeft}
              nextIcon={IconArrowRight}
              value={page}
              onChange={setPage}
            />
          </Group>
        </Conditional>
        {/* <Group>
          <Button variant="transparent" style={{ borderBottom: "3px solid #00c898" }}>
            Favorites
          </Button>
          <Button>Saved Searches</Button>
        </Group> */}
      </Container>
    </>
  );
};
