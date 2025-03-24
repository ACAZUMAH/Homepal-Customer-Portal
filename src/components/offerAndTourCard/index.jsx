import { Card, Grid, Image, Stack,  Skeleton, Text } from "@mantine/core";
import { Conditional } from "../conditional";
import dayjs from "dayjs";

export const TourAndOfferCard = (props) => {
  const date = dayjs(props.scheduledDate).format("YYYY-MM-DD - HH:mm");
  return (
    <Card withBorder shadow="sm" radius="md">
      <Grid>
        {/* Image Section */}
        <Grid.Col span={{ base: 12, sm: 3.5 }}>
          <Image src={props.property.imageUrls[0]} radius="md" fit="cover" alt="Property" />
        </Grid.Col>

        {/* Property Details */}
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack gap={5}>
            <Text size="lg">
              <b>Name:</b>
              <span style={{ fontWeight: "medium" }}>
                {props.property.name}
              </span>
            </Text>

            <Text size="md">
              <b>Location:</b> {props.property?.address}
            </Text>

            <Text size="md">
              <b>Specifications:</b> {props.property?.bedrooms} Bedrooms,{" "}
              {props.property.bathrooms} Bathrooms
            </Text>

            <Text size="md">
              <b>Price:</b>{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  color: "#00c898",
                }}
              >
                GH¢ {props.property?.price}
              </span>
            </Text>

            <Conditional condition={props.agentId}>
              <Text size="md">
                <b>Date:</b> {date}
              </Text>
              <Text size="md">
                <b>Agent Contact:</b> {props.agent?.phoneNumber}
              </Text>
              <Text size="md">
                <b>Tour Mode:</b>{" "}
                {props.tourMode === "IN_PERSON" ? "In person" : "Vedio call"}
              </Text>
            </Conditional>
            <Conditional condition={props.clientId}>
              <Text size="md">
                <b>Date:</b> {date}
              </Text>
              <Text size="md">
                <b>Client Contact:</b> {props.contactDetails}
              </Text>
              <Text size="md">
                <b>Tour Mode:</b>{" "}
                {props.tourMode === "IN_PERSON" ? "In person" : "Vedio call"}
              </Text>
            </Conditional>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export const TourAndOfferCardSkeleton = () => {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Grid>
        {/* Image Section Skeleton */}
        <Grid.Col span={{ base: 12, sm: 3.5 }}>
          <Skeleton height={180} width="100%" radius="md" />
        </Grid.Col>

        {/* Property Details Skeleton */}
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack gap={5}>
            <Skeleton height={20} width="60%" />
            <Skeleton height={15} width="80%" />
            <Skeleton height={15} width="70%" />
            <Skeleton height={20} width="40%" />

            {/* Agent/Client Info Skeleton */}
            <Skeleton height={15} width="50%" />
            <Skeleton height={15} width="60%" />
            <Skeleton height={15} width="40%" />
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
