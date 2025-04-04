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
} from "@mantine/core"; // Importing Mantine UI components for layout and styling
import { IconArrowLeft, IconArrowRight, IconSearch } from "@tabler/icons-react"; // Importing icons for navigation
import React, { useState } from "react"; // Importing React and useState hook for managing component state
import { useFetchFavoriteProperties } from "./hooks/useFetchFavorites"; // Custom hook to fetch favorite properties
import { useAppFavoriteProperty } from "../hooks/useAppFavoriteProperty"; // Custom hook to manage favorite properties
import { PropertiesCard, PropertiesLoader } from "../components/property-card"; // Importing property card components
import { Conditional } from "../components/conditional"; // Conditional rendering component
import { EmptyProperties } from "../properties/components/emptyProperties"; // Component for empty properties state
import { FetchError } from "../components/Errors/fetchError";
// Component for error state

export const Favorite = () => {
  const [page, setPage] = useState(1); // State variable for pagination
  const [filter, setFilter] = useState({}); // State variable for filters
  const [search, setSearch] = useState(""); // State variable for search input

  const { favorites } = useAppFavoriteProperty(); // Fetching favorite properties from the custom hook

  const onHandleSearch = () => {
    // Function to handle search
    setFilter({ search }); // Set filter based on search input
    setSearch(""); // Clear search input
  };

  const { properties, pageInfo, loading, error } = useFetchFavoriteProperties({
    // Fetching favorite properties
    favoriteIds: favorites,
    filters: { ...filter, page, limit: 12 },
  });

  const propertiesList = properties; // Determine which properties to display
  const pageInfos = pageInfo; // Get page info for favorites
  const isLoading = loading; // Determine loading state
  const isError = error; // Determine error state

  const showErrorAlert = !isLoading && isError; // Condition to show error alert
  const showEmptyAlert = !propertiesList?.length && !isLoading && !isError; // Condition to show empty alert
  const showPagenation = propertiesList?.length && !isLoading && !isError; // Condition to show pagination
  const showSortAndData = propertiesList?.length || (isLoading && !isError); // Condition to show sorting and data

  const totalPages = Math.ceil(pageInfos?.totalCount / pageInfos?.limit) || 0; // Calculate total pages for pagination

  return (
    <>
      <Container p="xl" size="xl">
        <Stack mt={50} gap={20}>
          <Title c="#00c898">My Favorites</Title>
          <Flex justify="center" align="stretch" gap="md">
            <TextInput
              flex={1}
              placeholder="Search Favorites"
              classNames={{ input: "custom-input" }}
              leftSection={<IconSearch stroke={1.5} size={18} />}
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)} // Update search input
            />
            <Button
              color="#00c898"
              leftSection={<IconSearch stroke={1.5} size={20} />}
              onClick={onHandleSearch} // Trigger search on button click
            >
              Search
            </Button>
          </Flex>
        </Stack>
        <Conditional condition={showSortAndData}>
          <SimpleGrid my={40} cols={{ base: 1, xs: 2, md: 3, xl: 4 }}>
            <Conditional condition={showSortAndData}>
              {propertiesList?.map((property, index) => (
                <PropertiesCard key={index} {...property} /> // Render property cards
              ))}
            </Conditional>
            <Conditional condition={isLoading}>
              {Array(16)
                .fill(1)
                .map((_, index) => (
                  <PropertiesLoader key={index} /> // Render loading placeholders
                ))}
            </Conditional>
          </SimpleGrid>
        </Conditional>
        <Conditional condition={showErrorAlert}>
          <FetchError
            message="We encountered an issue while fetching your favorite properties. Our technical
            team is working to resolve it as quickly as possible."
          />
          {/*Render error component */}
        </Conditional>
        <Conditional condition={showEmptyAlert}>
          <EmptyProperties /> {/* Render empty properties component */}
        </Conditional>
        <Conditional condition={showPagenation}>
          <Group gap={10} my={40} justify="flex-end">
            <Pagination
              color="#00c898"
              size="md"
              total={totalPages} // Total pages for pagination
              siblings={1}
              defaultValue={1}
              previousIcon={IconArrowLeft}
              nextIcon={IconArrowRight}
              value={page}
              onChange={setPage} // Update page on change
            />
          </Group>
        </Conditional>
      </Container>
    </>
  );
};
