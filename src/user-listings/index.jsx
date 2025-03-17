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

export const UserListings = () => {
  const [page, setPage] = useState(1)

  const { Listings, pageInfo, loading, error } = useFetchUserListing({
    limit: 8,
    page
  });
  
  console.log(pageInfo)

  const showPagenation = !loading && !error && pageInfo?.hasNextPage

  console.log(showPagenation)

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
          >
            Add Listing
          </Button>
        </Group>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
          <Conditional condition={!loading}>
            {Listings.map((listings, index) => (
              <ListingCard listings={listings} key={index} />
            ))}
          </Conditional>
          <Conditional condition={loading}>
            {Array(10)
              .fill(1)
              .map((_, index) => (
                <PropertiesLoader key={index} h="350" />
              ))}
          </Conditional>
        </SimpleGrid>{" "}
        <Conditional condition={showPagenation}>
          <Group gap={10} my={40} justify="flex-end">
            <Pagination
              color="#00c898"
              size="md"
              total={pageInfo?.totalCount}
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
