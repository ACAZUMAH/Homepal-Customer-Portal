import {
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";

export const FindAgent = () => {
  return (
    <Container fluid size="xl" py="xl">
      <Container py="xl">
        <Stack align="center" spacing="lg">
          <Title order={1} size="3rem" fw={600} c="#00c898">
            Find an agent
          </Title>

          <Group position="center" spacing="md">
            <TextInput
              placeholder="City or Zip"
              size="md"
              radius="md"
              w="250px"
              classNames={{
                input: "custom-input",
              }}
            />
            <TextInput
              placeholder="Agent name"
              size="md"
              radius="md"
              w="250px"
              classNames={{
                input: "custom-input",
              }}
            />
            <Button color="#00c898" size="md" radius="md">
              Search
            </Button>
          </Group>
        </Stack>
      </Container>

      <Container py="lg" fluid bg="teal.0">
        <Title order={2} mt="lg" fw={600} size="2rem" ta="center">
          Popular Real Estate Agents
        </Title>

        <Grid mt="md" gutter="md" justify="center" align="center">
          {[
            "Toledo",
            "Fairfield",
            "Orange",
            "Naperville",
            "Toledo",
            "Fairfield",
            "Orange",
            "Naperville",
            "Toledo",
            "Fairfield",
            "Orange",
            "Naperville",
            "Toledo",
            "Fairfield",
            "Orange",
            "Naperville",
          ].map((city, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
              <Text c="gray.7" size="md" ta="center">
                {city}
              </Text>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};
