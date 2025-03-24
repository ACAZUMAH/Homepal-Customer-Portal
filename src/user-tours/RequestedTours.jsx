import { Container, SimpleGrid, Title } from "@mantine/core";
import { useFetchRequestedTours } from "./hooks/useFetchRequested";
import {
  TourAndOfferCard,
  TourAndOfferCardSkeleton,
} from "../components/offerAndTourCard";
import { Conditional } from "../components/conditional";
import { FetchError } from "../components/Errors/fetchError";
import { EmptyTours } from "./components/emptyTours";

export const RequestedTours = () => {
  const { requestData, loading, error } = useFetchRequestedTours();

  const showError = !loading && error;

  const showEmpty = !requestData.length && !loading && !error

  return (
    <>
      <Container size="xl">
        <Title fw={500} c="#00c898" order={2} my={20}>
          Requested Tours
        </Title>
        <SimpleGrid cols={1} verticalSpacing="lg">
          {requestData.map((request, index) => (
            <TourAndOfferCard {...request} key={index} />
          ))}
          <Conditional condition={loading}>
            {Array(4)
              .fill(1)
              .map((_, index) => (
                <TourAndOfferCardSkeleton key={index} />
              ))}
          </Conditional>
        </SimpleGrid>
        <Conditional condition={showEmpty}>
          <EmptyTours message="You have not made any tour request on any property yet" />
        </Conditional>
        <Conditional condition={showError}>
          <FetchError
            message="We encountered an issue while fetching your requested tours. Our technical
            team is working to resolve it as quickly as possible."
          />
        </Conditional>
      </Container>
    </>
  );
};
