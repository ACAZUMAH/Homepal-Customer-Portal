import {
  Box,
  Button,
  Card,
  Group,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCurrencyCent, IconMapPinFilled } from "@tabler/icons-react";
import { useMakeOfferMutation } from "../../hooks/useMakeOfferMutation";
import { useMakeOfferForm } from "../../hooks/usemakeOfferForm";


export const MakeOfferModalForm = ({
  property,
  onClose,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  offerAmount,
  setOfferAmount,
  message,
  setMessage,
}) => {

  const { handleSubmitOffer, loading } = useMakeOfferMutation();

  const makeOfferForm = useMakeOfferForm();

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
    makeOfferForm.setFieldValue("firstName", e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    makeOfferForm.setFieldValue("lastName", e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    makeOfferForm.setFieldValue("email", e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    makeOfferForm.setFieldValue("phoneNumber", e.target.value);
  };

  const handleChangeOfferAmount = (e) => {
    setOfferAmount(e.target.value);
    makeOfferForm.setFieldValue("offerAmount", e.target.value);
  };

  const handleChangeMessage = (e) => {
    makeOfferForm.setFieldValue("message", e.target.value);
    setMessage(e.target.value);
  };

  const onSubmitHandler = async () => {
    const data = {
      clientId: makeOfferForm.values.clientId,
      agentId: property.userRef,
      propertyId: property._id,
      firstName,
      lastName,
      email,
      phoneNumber: phoneNumber || makeOfferForm.values.phoneNumber,
      offerAmount: Number(offerAmount),
      message,
    };

    if (await handleSubmitOffer(data)) onClose();
  };

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "#00c898", type: "bars" }}
        />
        <Stack>
          <Text>
            Interested in this property? Complete the form below, and the
            property agent will assist you with all the details, from scheduling
            a tour to answering your questions.
          </Text>
          <Card withBorder>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="First Name"
                name="firstName"
                placeholder="Enter First Name"
                value={makeOfferForm.values.firstName}
                error={makeOfferForm.errors.firstName}
                onChange={handleChangeFirstName}
                classNames={{ input: "searchInput" }}
                withAsterisk
              />
              <TextInput
                label="Last Name"
                name="lastName"
                placeholder="Enter last Name"
                value={makeOfferForm.values.lastName}
                error={makeOfferForm.errors.lastName}
                onChange={handleChangeLastName}
                classNames={{ input: "searchInput" }}
              />
              <TextInput
                label="Email"
                name="email"
                placeholder="Enter your Email"
                value={makeOfferForm.values.email}
                error={makeOfferForm.errors.email}
                onChange={handleChangeEmail}
                classNames={{ input: "searchInput" }}
                withAsterisk
              />
              <TextInput
                label="Phone Number"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={makeOfferForm.values.phoneNumber}
                error={makeOfferForm.errors.phoneNumber}
                onChange={handleChangePhoneNumber}
                classNames={{ input: "searchInput" }}
                withAsterisk
              />
            </SimpleGrid>
            <TextInput
              pt={15}
              label="Selected Property Location"
              value={property.address}
              disabled
              rightSection={<IconMapPinFilled stroke={1.5} />}
              classNames={{ input: "custom-input" }}
            />
            <TextInput
              pt={15}
              label="Asking Price"
              value={`GH¢ ${property.price}`}
              disabled
              rightSection={<IconCurrencyCent />}
              classNames={{ input: "custom-input" }}
            />
            <TextInput
              pt={15}
              label="Enter your Offer Amount"
              name="offerAmount"
              placeholder="e.g. GH¢ 350,000"
              value={makeOfferForm.values.offerAmount}
              error={makeOfferForm.errors.offerAmount}
              onChange={handleChangeOfferAmount}
              classNames={{ input: "searchInput" }}
              withAsterisk
            />
            <Textarea
              pt={15}
              label="A message to the agent (optional)"
              placeholder="Reasons for your offer or conditions"
              value={makeOfferForm.values.message}
              error={makeOfferForm.errors.message}
              onChange={handleChangeMessage}
              classNames={{ input: "searchInput" }}
            />
          </Card>
          <Group justify="flex-end">
            <Button variant="default" radius="md" onClick={onClose}>
              Cancel
            </Button>
            <Button color="#00c898" radius="md" onClick={onSubmitHandler}>
              Submit
            </Button>
          </Group>
        </Stack>
      </Box>
    </>
  );
};
