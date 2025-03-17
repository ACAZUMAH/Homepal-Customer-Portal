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
  Button,
  Grid
} from "@mantine/core";
import { IconMapPin, IconWalk, IconBus, IconBike } from "@tabler/icons-react";
import React from "react";
import { Carousel } from "@mantine/carousel";
import classes from "../styles/index.module.css";

export const HiddenFromSm = (props) => {

  const emptyphotos = props.photos.length === 0;

  return (
    <>
      <Box hiddenFrom="sm">
        <Paper mt={20} radius="md" w="100%">
          <Carousel
            controlSize={40}
            withIndicators
            className={classes.carousel}
          >
            {props.photos.map((photos, index) => (
              <Carousel.Slide key={index}>
                <Image
                  h={300}
                  w="100%"
                  src={photos}
                  alt={`thomnail${index}`}
                  fit="cover"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Paper>
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Stack mt={30} gap={15}>
            <Title order={3} fw="small">
              Description
            </Title>
            <Text>{props.description}</Text>
            <Card radius="md" p="lg" withBorder mt={20}>
              <Group justify="space-between">
                <Title fw={400} order={4}>
                  {props.name}
                </Title>
                <Text fz="h3" c="#00c898">
                  GH¢ {props.price}
                </Text>
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
            <Card shadow="sm" radius="md" p="lg" withBorder mt={20}>
              <Stack>
                <Title order={3}>Ready to take the next Step?</Title>
                <Button color="#00c898" radius="md" onClick={props.setOpened}>
                  RequestTour
                </Button>
                <Button
                  variant="outline"
                  color="#00c898"
                  radius="md"
                  onClick={props.setOpendMakeOffer}
                >
                  Make an Offer
                </Button>
              </Stack>
            </Card>
          </Stack>
          <Card radius="md" p="lg" withBorder h="50%" w="100%" mt={40}>
            <Title fw={500} order={4}>
              Amenities
            </Title>
            <Grid mt="sm">
              {props.amenities.map((amenity, index) => (
                <Grid.Col span={6} key={index}>
                  <Text>{amenity}</Text>
                </Grid.Col>
              ))}
            </Grid>
          </Card>
          <Card radius="md" p="lg" withBorder h="auto" w="100%" mt={40}>
            <Group justify="space-between" mb={20}>
              <Title fw={500} order={3}>
                Address
              </Title>
              <Flex>
                <IconMapPin stroke={1.5} />
                <Text>{props.address}</Text>
              </Flex>
            </Group>
            <Stack>
              <Title fw={500} order={3}>
                Neighborhood insights
              </Title>
              <Stack gap={8}>
                <Flex gap={5}>
                  <IconWalk stroke={1.5} />
                  <Text>Most errands can be completed on foot</Text>
                </Flex>
                <Flex gap={5}>
                  <IconBus stroke={1.5} />
                  <Text>Some public transit options nearby</Text>
                </Flex>
                <Flex gap={5}>
                  <IconBike stroke={1.5} />
                  <Text>Minimal bike infrastructure</Text>
                </Flex>
              </Stack>
            </Stack>
          </Card>
        </Flex>
      </Box>
    </>
  );
};
