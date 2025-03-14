import {
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCurrencyCent, IconMapPinFilled } from "@tabler/icons-react";
import React from "react";

export const MakeOfferModalForm = (props) => {
  return (
    <>
      <Stack>
        <Text>
          Interested in this property? Complete the form below, and the property
          agent will assist you with all the details, from scheduling a tour to
          answering your questions.
        </Text>
        <Card withBorder>
          <SimpleGrid cols={{ base: 1, md: 2, lg: 2 }}>
            <TextInput
              label="First Name"
              placeholder="Enter First Name"
              classNames={{ input: "searchInput" }}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter last Name"
              classNames={{ input: "searchInput" }}
            />
            <TextInput
              label="Email"
              placeholder="Enter your Email"
              classNames={{ input: "searchInput" }}
            />
            <TextInput
              label="Phone Number"
              placeholder="Enter Phone Number"
              classNames={{ input: "searchInput" }}
            />
          </SimpleGrid>
          <TextInput
            pt={15}
            label="Selected Property Location"
            value={props.location}
            rightSection={<IconMapPinFilled stroke={1.5} />}
            classNames={{ input: "custom-input" }}
          />
          <TextInput
            pt={15}
            label="Asking Price"
            value={`GH¢ ${props.price}`}
            rightSection={<IconCurrencyCent />}
            classNames={{ input: "custom-input" }}
          />
          <TextInput
            pt={15}
            label="Enter your Offer Amount"
            placeholder="e.g. GH¢ 350,000"
            classNames={{ input: "searchInput" }}
          />
          <Textarea
            pt={15}
            label="A message to the agent (optional)"
            classNames={{ input: "searchInput" }}
          />
        </Card>
        <Group justify="flex-end">
          <Button variant="default">Cancel</Button>
          <Button color="#00c898">Submit</Button>
        </Group>
      </Stack>
    </>
  );
};
