import { Container } from "@mantine/core";
import React from "react";
import { OffersTable } from "./components/offersTable";
import { useFetchOffers } from "./hooks/useFetchOffersQuery";
import { Conditional } from "../components/conditional";
import { OffersTableSkeleton } from "./components/offersLoader";

export const ReceivedOffers = () => {
  const { offerData, loading } = useFetchOffers();

  return (
    <>
      <Container size="xl">
        <Conditional condition={!loading}>
          <OffersTable offerData={offerData} />
        </Conditional>
        <Conditional condition={loading}>
          <OffersTableSkeleton /> 
        </Conditional>
      </Container>
    </>
  );
};
