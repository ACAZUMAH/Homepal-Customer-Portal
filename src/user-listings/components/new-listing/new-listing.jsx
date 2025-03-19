import {
  Button,
  Container,
  Group,
  Modal,
  Stack,
  Stepper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { ListingForm } from "./listingForm";
import { useState } from "react";
import { ImageDropZone } from "./dropZone";
import { IconArrowRight } from "@tabler/icons-react";

export const NewListing = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  return (
    <>
      <Container size="md">
        <Title order={2} c="#00c898">
          Add New Listing
        </Title>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          color="#00c898"
          py="lg"
        >
          <Stepper.Step label="Upload Images">
            <ImageDropZone />
          </Stepper.Step>
          <Stepper.Step label="Listing Information">
            <ListingForm />
          </Stepper.Step>
          <Stepper.Step label="Submit">
            <Text> summery </Text>
          </Stepper.Step>
        </Stepper>
        <Group justify="flex-end" mt={20}>
          <Button
            onClick={nextStep}
            color="#00c898"
            radius="md"
            rightSection={<IconArrowRight stroke={1.5} />}
          >
            Next
          </Button>
        </Group>
      </Container>
    </>
  );
};
