import { Carousel } from "@mantine/carousel";
import { Button, Card, Group, Image, Stack, Text } from "@mantine/core";
import React from "react";
import classes from "../../styles/index.module.css";
import { IconBath, IconBed, IconChevronRight, IconMapPin } from "@tabler/icons-react";

export const ListingCard = ({ listings }) => {
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
              indicator: classes.carouselIndicator
            }}
          >
            {listings.imageUrls.map((img, index) => (
              <Carousel.Slide key={index}>
                <Image src={img} h={200} alt={listings.name} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Card.Section>
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
      </Card>
    </>
  );
};


