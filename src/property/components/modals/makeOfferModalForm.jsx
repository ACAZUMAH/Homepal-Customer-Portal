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
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { useMakeOfferForm } from "../../hooks/usemakeOfferForm";

export const MakeOfferModalForm = ({ location, price, onClose }) => {
  const { user } = useAppAuthentication();

  const makeOfferForm = useMakeOfferForm();

  const handleChangeFirstName = (e) => {
    makeOfferForm.setFieldValue("firstName", e.target.value);
  };

  const handleChangeLastName = (e) => {
    makeOfferForm.setFieldValue("lastName", e.target.value);
  };

  const handleChangeEmail = (e) => {
    makeOfferForm.setFieldValue("email", e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    makeOfferForm.setFieldValue("phoneNumber", e.target.value)
  }

  const handleChangeOfferAmount = (e) => {
    makeOfferForm.setFieldValue("offerAmount", e.target.value)
  }

  const handleChangeMessage = (e) => {
    makeOfferForm.setFieldValue("message", e.target.value)
  }

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
              value={makeOfferForm.values.firstName}
              onChange={handleChangeFirstName}
              classNames={{ input: "searchInput" }}
              withAsterisk
            />
            <TextInput
              label="Last Name"
              placeholder="Enter last Name"
              value={makeOfferForm.values.lastName}
              onChange={handleChangeLastName}
              classNames={{ input: "searchInput" }}
            />
            <TextInput
              label="Email"
              placeholder="Enter your Email"
              value={makeOfferForm.values.email}
              onChange={handleChangeEmail}
              classNames={{ input: "searchInput" }}
              withAsterisk
            />
            <TextInput
              label="Phone Number"
              placeholder="Enter Phone Number"
              value={makeOfferForm.values.phoneNumber}
              onChange={handleChangePhoneNumber}
              classNames={{ input: "searchInput" }}
              withAsterisk
            />
          </SimpleGrid>
          <TextInput
            pt={15}
            label="Selected Property Location"
            value={location}
            readOnly
            rightSection={<IconMapPinFilled stroke={1.5} />}
            classNames={{ input: "custom-input" }}
          />
          <TextInput
            pt={15}
            label="Asking Price"
            value={`GH¢ ${price}`}
            readOnly
            rightSection={<IconCurrencyCent />}
            classNames={{ input: "custom-input" }}
          />
          <TextInput
            pt={15}
            label="Enter your Offer Amount"
            placeholder="e.g. GH¢ 350,000"
            value={makeOfferForm.values.offerAmount}
            onChange={handleChangeOfferAmount}
            classNames={{ input: "searchInput" }}
            withAsterisk
          />
          <Textarea
            pt={15}
            label="A message to the agent (optional)"
            value={makeOfferForm.values.message}
            onChange={handleChangeMessage}
            classNames={{ input: "searchInput" }}
          />
        </Card>
        <Group justify="flex-end">
          <Button variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button color="#00c898">Submit</Button>
        </Group>
      </Stack>
    </>
  );
};
