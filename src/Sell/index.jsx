import {
  Button,
  Container,
  Group,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

import React from "react";

export const SellPage = () => {
  return (
    <Container py="xl" my="90">
      <Stack align="center" spacing="lg">
        <Title order={1} size="3rem" fw={700} c="#00c898">
          Sell Your Property With <br />
          <span style={{ display: "block", textAlign: "center" }}>
            Confidence
          </span>
        </Title>
        <Group>
          <TextInput
            placeholder="Enter address"
            size="md"
            radius="md"
            w="300px"
            classNames={{ input: "customInput" }}
          />
          <Button
            color="#00c898"
            size="md"
            radius="md"
            rightSection={<IconArrowRight size={18} />}
          >
            Search
          </Button>
        </Group>
      </Stack>
    </Container>
  );
};
