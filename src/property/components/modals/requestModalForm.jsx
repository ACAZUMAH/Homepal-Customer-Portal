import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { Conditional } from "../../../components/conditional";
import { DateTimePicker } from "@mantine/dates";
import { IconChevronDown } from "@tabler/icons-react";
import { useRequestTourForm } from "../../hooks/useRequestTourform";
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { useRequestTourMutation } from "../../hooks/useRequestTourMutation";

export const RequestModalForm = ({
  mode,
  setMode,
  callMode,
  setCallMode,
  onClose,
  contactDetails,
  setContactDetails,
  scheduledDate,
  setScheduledDate,
  property,
}) => {
  const {
    handleCreateRequestTour,
    loading,
  } = useRequestTourMutation();
  const { user } = useAppAuthentication();
  const requestTourForm = useRequestTourForm();

  let inputLabel;
  let placeHolder;
  let value;
  let error;
  if (callMode === "google meet") {
    inputLabel = "Gmail";
    placeHolder = "Enter your gmail";
    value = requestTourForm.values.gmail;
    error = requestTourForm.errors.gmail;
  }
  if (callMode === "whatsApp") {
    inputLabel = "WhatsApp Number";
    placeHolder = "Enter your whatsApp number";
    value = requestTourForm.values.whatsAppNumber;
    error = requestTourForm.errors.whatsAppNumber;
  }
  if (callMode === "face time") {
    inputLabel = "Phone Number";
    placeHolder = "Enter your Phone number";
    value = requestTourForm.values.phoneNumber;
    error = requestTourForm.errors.phoneNumber;
  }

  const HandleChangeContact = (e) => {
    const fieldMap = {
      "google meet": "gmail",
      whatsApp: "whatsAppNumber",
      "face time": "phoneNumber",
    };

    const field = fieldMap[callMode];
    requestTourForm.setFieldValue(field, e.target.value);
    setContactDetails(e.target.value);
  };

  const handleChangeScheduleDate = (date) => {
    requestTourForm.setFieldValue("scheduledDate", date);
    setScheduledDate(date);
  };

  const handleSubmitRequest = async () => {
    let data = {};
    if (mode === "In person tour") {
      data = {
        propertyId: property._id,
        agentId: property.userRef,
        clientId: user.id,
        tourMode: "IN_PERSON",
        contactDetails: user.phoneNumber,
        scheduledDate: scheduledDate,
      };
    }

    if (mode === "Video call tour") {
      data = {
        propertyId: property._id,
        agentId: property.userRef,
        clientId: user.id,
        tourMode: "VIDEO_CALL",
        contactDetails,
        scheduledDate: scheduledDate,
      };
    }

    const success = await handleCreateRequestTour(data);

    if (success) onClose();
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
          <Text size="sm">
            Follow these steps to schedule your. whether in person or via video
            call, we'll guide you through the process effortlessly
          </Text>
          <Select
            label="Select tour Mode"
            data={["In person tour", "Video call tour"]}
            defaultValue="In person tour"
            value={mode}
            onChange={setMode}
            rightSection={<IconChevronDown stroke={1.5} />}
            classNames={{ input: "custom-input" }}
            withAsterisk
          />
          <Conditional condition={mode === "In person tour"}>
            <DateTimePicker
              label="Choose date and time"
              name="scheduledDate"
              placeholder="choose date and time"
              value={requestTourForm.values.scheduledDate}
              onChange={handleChangeScheduleDate}
              error={requestTourForm.errors.scheduledDate}
              classNames={{ input: "custom-input" }}
              withAsterisk
            />
          </Conditional>
          <Conditional condition={mode === "Video call tour"}>
            <Select
              label="Select call mode"
              data={["google meet", "whatsApp", "face time"]}
              rightSection={<IconChevronDown stroke={1.5} />}
              value={callMode}
              onChange={setCallMode}
              classNames={{ input: "custom-input" }}
              withAsterisk
            />
            <TextInput
              label={inputLabel}
              name="contacDetails"
              placeholder={placeHolder}
              value={value}
              onChange={HandleChangeContact}
              error={error}
              classNames={{ input: "custom-input" }}
              withAsterisk
            />
            <DateTimePicker
              label="Choose date and time"
              placeholder="choose date and time"
              name="scheduledDate"
              value={requestTourForm.values.scheduledDate}
              onChange={handleChangeScheduleDate}
              error={requestTourForm.errors.scheduledDate}
              classNames={{ input: "custom-input" }}
              withAsterisk
            />
          </Conditional>
          <Group justify="flex-end" py={10}>
            <Button variant="default" radius="md" onClick={onClose}>
              Cancel
            </Button>
            <Button color="#00c898" radius="md" onClick={handleSubmitRequest}>
              Confirm Booking
            </Button>
          </Group>
        </Stack>
      </Box>
    </>
  );
};
