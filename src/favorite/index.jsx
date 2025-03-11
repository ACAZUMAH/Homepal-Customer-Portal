import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Pagination,
  SimpleGrid,
  Stack,
  Tabs,
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
import { useFetchSavedSearches } from "./hooks/useFetchSavedListings";
import classes from "./styles/style.module.css";

export const Favorite = () => {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("favorites");

  const { favorites } = useAppFavoriteProperty();

  const { properties, pageInfo, loading, error } = useFetchFavoriteProperties({
    favoriteIds: favorites,
    filters: { page, limit: 12 },
  });

  const {
    savedSearches,
    loading: isLoadingSaved,
    error: isSavedError,
  } = useFetchSavedSearches();

  const propertiesList = activeTab === "favorites" ? properties : savedSearches;
  const pageInfos = activeTab === "favorites" ? pageInfo : null;
  const isLoading = activeTab === "favorites" ? loading : isLoadingSaved;
  const isError = activeTab === "favorites" ? error : isSavedError;

  const showErrorAlert = !isLoading && isError;
  const showEmptyAlert = !propertiesList?.length && !isLoading && !isError;
  const showPagenation = propertiesList?.length && !isLoading && !isError;
  const showSortAndData = propertiesList?.length || (isLoading && !isError);

  const totalPages = Math.abs(pageInfos?.totalCount / pageInfos?.limit) || 0;

  return (
    <>
      <Container p="xl" size="xl">
        <Stack mt={50} gap={20}>
          <Title c="#00c898">My Favorites</Title>
          <Flex justify="center" align="stretch" gap="md">
            <TextInput
              flex={1}
              placeholder="Search Favorites"
              classNames={{ input: classes.favoriteInput }}
              leftSection={<IconSearch stroke={1.5} size={18} />}
            />
            <Button color="#00c898" leftSection={<IconSearch stroke={1.5} size={20}/>}>
              Search
            </Button>
          </Flex>
        </Stack>
        <Tabs
          color="#00c898"
          defaultValue="favorites"
          mt={50}
          value={activeTab}
          onChange={setActiveTab}
        >
          <Box w="13.5rem">
            <Tabs.List>
              <Tabs.Tab value="favorites">Favorites</Tabs.Tab>
              <Tabs.Tab value="saved">Saved Searches</Tabs.Tab>
            </Tabs.List>
          </Box>
          <Tabs.Panel value="favorites">
            <Conditional condition={showSortAndData}>
              <SimpleGrid my={40} cols={{ base: 1, xs: 2, md: 3, xl: 4 }}>
                {propertiesList?.map((property, index) => (
                  <PropertiesCard key={index} {...property} />
                ))}
                <Conditional condition={isLoading}>
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
          </Tabs.Panel>
          <Tabs.Panel value="saved">
            <Conditional condition={showSortAndData}>
              <SimpleGrid my={40} cols={{ base: 1, xs: 2, md: 3, xl: 4 }}>
                {propertiesList?.map((property, index) => (
                  <PropertiesCard key={index} {...property} />
                ))}
                <Conditional condition={isLoading}>
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
          </Tabs.Panel>
        </Tabs>
      </Container>
    </>
  );
};
