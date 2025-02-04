import {
  Anchor,
  Card,
  Group,
  Image,
  Skeleton,
  Text,
  Stack,
  ActionIcon,
  Button,
} from "@mantine/core";
import {
  IconBed,
  IconCurrencyDollar,
  IconBath,
  IconMapPin,
  IconRulerMeasure,

  IconHeart,
  IconChevronRight
} from "@tabler/icons-react";
import React from "react";
import { useAppNavigation } from "../../hooks";
import { getPropertytUrl } from "./helper";
import { Conditional } from "../conditional";
import useAppAuthentication from "../../hooks/useAppAuthentication";

export const PropertyCard = (props) => {
  const propertyurl = getPropertytUrl(props._id);

  const navigateToProperty = useAppNavigation(propertyurl);
  const { isAuthenticated } = useAppAuthentication();
  const photo = props.imageUrls[0] ? props.imageUrls[0] : "";

  return (
    <>
      <Card shadow="sm" padding="xs" radius="md" withBorder h={500}>
        <Card.Section>
          <Image src={photo} h={300} alt={props.name} />
        </Card.Section>
        <Conditional condition={isAuthenticated}>
          <ActionIcon
            variant="filled"
            radius="xl"
            size={40}
            color="gray.2"
            component="a"
            underline="never"
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{
              background: "#d8d8d8",
              position: "absolute",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              top: 15,
              right: 60,
            }}
          >
            <IconHeart color="#00c898" stroke={1.5} size={20} />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            radius="xl"
            size={40}
            color="gray.2"
            component="a"
            underline="never"
            onClick={(e) => {
              e.preventDefault();
              navigateToProperty();
            }}
            style={{
              background: "#d8d8d8",
              position: "absolute",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              top: 15,
              right: 13,
            }}
          >
            <IconPlus color="#00c898" stroke={1.5} size={20} />
          </ActionIcon>
        </Conditional>
        <Stack justify="space-between" pt="10" gap={15}>
          <Text fz="h3" size="1.5rem">
            {props.name}
          </Text>

          <Group gap={0} spacing="xs">
            <IconMapPin stroke={1.5} />
            <Text fz="md">{props.address}</Text>
          </Group>

          <Group spacing="xs">
            <IconBed size={20} stroke={1.5} />
            <Text fz="md">{props.bedrooms}</Text>

            <IconBath size={20} stroke={1.5} />
            <Text fz="md">{props.bathrooms}</Text>

            <IconRulerMeasure size={20} stroke={1.5} />
            <Text fz="md">1200 sq ft</Text>
          </Group>
          <Group justify="space-between">
            <Group gap={0} spacing="xs">
              <IconCurrencyDollar size={34} color="#00c898" stroke={1.5} />
              <Text fw="medium" size="2rem" c="#00c898">
                {props.price}
              </Text>
            </Group>
            <Button
            component="a"
              href={propertyurl}
              variant="transparent"
              c="#00c898"
              onClick={(e) => {
                e.preventDefault();
                navigateToProperty();
              }}
              size="md"
              rightSection={<IconChevronRight stroke={1.5}/>}
            >
              view Details
            </Button>
          </Group>
        </Stack>
      </Card>
    </>
  );
};

export const PropertyLoader = () => {
  return <Skeleton h={500} />;
};
