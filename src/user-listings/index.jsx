import {
  Button,
  Container,
  Group,
  Pagination,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import { ListingCard } from "./components/listing-card/listing-card";
import { useFetchUserListing } from "./hooks/useFetchUserListingQuery";
import { Conditional } from "../components/conditional";
import { PropertiesLoader } from "../components/property-card";
import { useAppNavigation } from "../hooks";
import { routesEndPoints } from "../constants";
import { FetchError } from "../components/Errors/fetchError";
import { EmptyListing } from "./components/empty";

export const UserListings = () => {
  const [page, setPage] = useState(1);

  const navigateToNewListings = useAppNavigation(routesEndPoints.NEW);

  const { Listings, pageInfo, loading, error } = useFetchUserListing({
    limit: 8,
    page,
  });

  const showData = Listings.length && !loading && !error

  const showError = !loading && error

  const showEmpty = !Listings.length && !loading && !error

  const showPagenation = !loading && !error && Listings.length;

  const totalPages = Math.ceil(pageInfo?.totalCount / pageInfo?.limit) || 0;

  return (
    <>
      <Container size="xl">
        <Group my={20} justify="space-between">
          <Title fw={500}>My Listings</Title>
          <Button
            size="md"
            radius="md"
            color="#00c898"
            leftSection={<IconPlus />}
            onClick={navigateToNewListings}
          >
            Add Listing
          </Button>
        </Group>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
          <Conditional condition={showData}>
            {Listings.map((listings, index) => (
              <ListingCard listings={listings} key={index} />
            ))}
          </Conditional>
          <Conditional condition={loading}>
            {Array(8)
              .fill(1)
              .map((_, index) => (
                <PropertiesLoader key={index} h="350" />
              ))}
          </Conditional>
        </SimpleGrid>
        <Conditional condition={showError}>
          <FetchError
            message="We encountered an issue while fetching your listing. Our technical
            team is working to resolve it as quickly as possible."
          />
        </Conditional>
        <Conditional condition={showEmpty}>
          <EmptyListing />
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
      </Container>
    </>
  );
};




