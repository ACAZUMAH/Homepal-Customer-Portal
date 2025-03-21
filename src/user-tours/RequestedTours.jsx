import { Container, SimpleGrid, Title } from "@mantine/core";
import { useFetchRequestedTours } from "./hooks/useFetchRequested";
import {
  TourAndOfferCard,
  TourAndOfferCardSkeleton,
} from "../components/offerAndTourCard";
import { Conditional } from "../components/conditional";

export const RequestedTours = () => {
  const { requestData, loading, error } = useFetchRequestedTours();
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
      </Container>
    </>
  );
};
