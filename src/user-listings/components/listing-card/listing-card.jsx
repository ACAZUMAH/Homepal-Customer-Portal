import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Box,
  Card,
  Group,
  Image,
  Loader,
  LoadingOverlay,
  Menu,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import classes from "../../styles/index.module.css";
import {
  IconBath,
  IconBed,
  IconDotsVertical,
  IconEye,
  IconMapPin,
  IconTrash,
} from "@tabler/icons-react";
import { useAppNavigation } from "../../../hooks";
import { useLocation } from "react-router-dom";
import { getListingtUrl } from "../../helper/helper";
import { useDeleteListingMutation } from "../../hooks";
import { Conditional } from "../../../components/conditional";

export const ListingCard = ({ listings }) => {
  const listingUrl = getListingtUrl(listings._id);

  const location = useLocation();

  const navigateToUpdate = useAppNavigation(listingUrl, location.pathname);

  const { onDeleteHandler, loading } = useDeleteListingMutation();

  return (
    <>
      <Card radius="md" withBorder padding="xs">
        <Card.Section>
          <Carousel
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {listings.imageUrls.map((img, index) => (
              <Carousel.Slide key={index}>
                <Image src={img} h={200} alt={listings.name} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Card.Section>
        <Menu shadow="md" width="Auto">
          <Menu.Target>
            <ActionIcon
              variant="filled"
              radius="xl"
              size={30}
              color="white"
              component="a"
              underline="never"
              style={{
                background: "white",
                position: "absolute",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                top: 15,
                right: 13,
              }}
            >
              <IconDotsVertical color="#00c898" stroke={1.5} size={20} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconEye />}
              color="dimmed"
              onClick={navigateToUpdate}
            >
              View Listing
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={<IconTrash />}
              onClick={() => {
                onDeleteHandler(listings?._id);
              }}
            >
              Delete Listing
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Stack justify="space-between" pt="10" gap={10}>
          <Text fw="medium" size="lg">
            {listings.name}
          </Text>

          <Group gap={3}>
            <IconMapPin size={20} stroke={1.5} />
            <Text size="md">{listings.address}</Text>
          </Group>

          <Group gap={4}>
            <IconBed size={20} stroke={1.5} />
            <Text size="md">{listings.bedrooms} bedrooms</Text>

            <IconBath size={20} stroke={1.5} />
            <Text fz="md">{listings.bathrooms} bathrooms</Text>
          </Group>
          <Group justify="space-between">
            <Text fw={400} size="xl" c="#00c898">
              GH¢ {listings.price}
            </Text>
          </Group>
        </Stack>
        <Conditional condition={loading}>
          <Loader color="#00c898" size="lg" type="dots" />
        </Conditional>
      </Card>
    </>
  );
};
