import {
  Box,
  Flex,
  Image,
  Paper,
  Stack,
  Title,
  Text,
  Card,
  Group,
  Button
} from "@mantine/core";
import React from "react";
import { Carousel } from "@mantine/carousel";
import classes from "../styles/index.module.css";

export const HiddenFromSm = (props) => {
  const emptyphotos = props.photos.length === 0;
  return (
    <>
      <Paper p="md" radius="md" hiddenFrom="sm">
        <Carousel controlSize={40} withIndicators className={classes.carousel}>
          {props.photos.map((photos, index) => (
            <Carousel.Slide key={index}>
              <Image
                h={200}
                w="100%"
                src={photos}
                alt={`thomnail${index}`}
                fit="cover"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Stack pt={15} gap={20}>
            <Title order={2} fw="small">
              Description
            </Title>
            <Text>{props.description}</Text>
            <Card shadow="sm" radius="md" p="lg" withBorder>
              <Group justify="space-between">
                <Title fw={400} order={3}>
                  {props.name}
                </Title>
                <Text fz="h3">${props.price}</Text>
              </Group>
              <Group mt="xl">
                <Text fz="h3" fw={500}>
                  {props.bedrooms} <Text span>bedrooms</Text>
                </Text>
                <Text fz="h3" fw={500}>
                  {props.bathrooms} <Text span>bathrooms</Text>
                </Text>
              </Group>
            </Card>
            <Card shadow="sm" radius="md" p="lg" withBorder>
              <Stack>
                <Title order={2}>Ready to take the next Step?</Title>
                <Button color="#00c898">RequestTour</Button>
                <Button variant="outline" color="#00c898">
                  Make an Offer
                </Button>
              </Stack>
            </Card>
          </Stack>
        </Flex>
      </Paper>
    </>
  );
};
