import {
  Group,
  Button,
  Box,
  Image,
  Stack,
  Title,
  Text,
  Flex,
  Card,
  Grid,
} from "@mantine/core";
import { IconMapPin, IconWalk, IconBus, IconBike } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

export const VisbleFromSm = (props) => {
  return (
    <>
      <Box visibleFrom="sm">
        <Box mt={15} pos="relative">
          <Image
            radius="md"
            fit="contian"
            h={550}
            src={props.photos[0]}
            alt="featured"
          />
        </Box>
        <Group justify="center" mt="md">
          <Carousel slideSize="20%" align="start" slideGap="md" controlsOffset="xs" withIndicators loop >
            {props.photos.map((photos, index) => (
              <Carousel.Slide key={index}>
                <Image
                  src={photos}
                  alt={`thomnail${index}`}
                  fit="cover"
                  radius="md"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Group>
        <Flex mt={80} flex="grow" h="100%" gap={20} direction="row" align="stretch">
          <Stack flex="2" gap={20}>
            <Stack>
              <Title order={2} fw="medium">
                Description
              </Title>
              <Text>{props.description}</Text>
            </Stack>
            <Card shadow="sm" radius="md" p="lg" mt={70} withBorder>
              <Group justify="space-between">
                <Title fw={400} order={3}>
                  {props.name}
                </Title>
                <Text fz="h2" c="#00c898">
                  ${props.price}
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
          </Stack>

          <Card shadow="sm" radius="md" p="lg" withBorder flex="1" w="30%">
            <Stack>
              <Title>Ready to take the next Step?</Title>
              <Text>
                Whether you want to explore the property in person or to make it
                yours, we're here to guide you. Choose your next move below
              </Text>
              <Button color="#00c898">RequestTour</Button>
              <Button variant="outline" color="#00c898">
                Make an Offer
              </Button>
            </Stack>
          </Card>
        </Flex>

        <Card shadow="sm" radius="md" p="lg" withBorder h="50%" w={816} mt={40}>
          <Title fw={500} order={3}>
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
        <Card shadow="sm" radius="md" p="lg" withBorder h="auto" w={816} mt={40}>
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
      </Box>
    </>
  );
};
