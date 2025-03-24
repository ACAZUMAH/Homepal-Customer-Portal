import { Container } from "@mantine/core";
import React from "react";
import { OffersTable } from "./components/offersTable";
import { useFetchOffers } from "./hooks/useFetchOffersQuery";
import { Conditional } from "../components/conditional";
import { OffersTableSkeleton } from "./components/offersLoader";
import { FetchError } from "../components/Errors/fetchError";
import { EmptyOffers } from "./components/emptyOffers";

export const ReceivedOffers = () => {

  const { offerData, loading, error } = useFetchOffers();

  const showData = offerData?.length && !loading && !error
  const showEmpty = !offerData?.length && !loading && !error
  const showLoading = loading && !error
  const showError = !loading && error

  return (
    <>
      <Container size="xl">
        <Conditional condition={showData}>
          <OffersTable offerData={offerData} />
        </Conditional>
        <Conditional condition={showLoading}>
          <OffersTableSkeleton />
        </Conditional>
        <Conditional condition={showError}>
          <FetchError
            message="We encountered an issue while fetching your received offers. Our technical
            team is working to resolve it as quickly as possible."
          />
        </Conditional>
        <Conditional condition={showEmpty}>
          <EmptyOffers />
        </Conditional>
      </Container>
    </>
  );
};
