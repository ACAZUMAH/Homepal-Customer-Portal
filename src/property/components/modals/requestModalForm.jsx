import { Button, Group, Select, Stack, Text, TextInput } from "@mantine/core";
import { useState } from "react";
import { Conditional } from "../../../components/conditional";
import { DateTimePicker } from "@mantine/dates";
import { IconChevronDown } from "@tabler/icons-react";
import { useRequestTourForm } from "../../hooks/useRequestTourform";

export const RequestModalForm = ({
  mode,
  setMode,
  callMode,
  setCallMode,
  onClose,
}) => {
  const requestTourForm = useRequestTourForm();

  let inputLabel;
  let placeHolder;
  let value;
  let error;
  let onBlur;
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

  const HandleChange = (e) => {
    if (callMode === "google meet") {
      requestTourForm.setFieldValue("gmail", e.target.value)
    }
    if (callMode === "whatsApp"){
      requestTourForm.setFieldValue("whatsAppNumber", e.target.value)
    }
    if (callMode === "face time"){
      requestTourForm.setFieldValue("phoneNumber", e.target.value)
    }
  };

  return (
    <>
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
            placeholder="choose date and time"
            onBlur={requestTourForm.handleBlur}
            value={requestTourForm.values.scheduleDate}
            error={requestTourForm.errors.scheduleDate}
            classNames={{ input: "custom-input" }}
            withAsterisk
          />
        </Conditional>
        <Conditional condition={mode === "Video call tour"}>
          <Select
            label="select call mode"
            data={["google meet", "whatsApp", "face time"]}
            rightSection={<IconChevronDown stroke={1.5} />}
            value={callMode}
            onChange={setCallMode}
            classNames={{ input: "custom-input" }}
            withAsterisk
          />
          <TextInput
            label={inputLabel}
            placeholder={placeHolder}
            value={value}
            error={error}
            onBlur={requestTourForm.handleBlur}
            classNames={{ input: "custom-input" }}
            withAsterisk
          />
          <DateTimePicker
            label="Choose date and time"
            placeholder="choose date and time"
            onBlur={requestTourForm.handleBlur}
            value={requestTourForm.values.scheduleDate}
            error={requestTourForm.errors.scheduleDate}
            classNames={{ input: "custom-input" }}
            withAsterisk
          />
        </Conditional>
        <Group justify="flex-end" py={10}>
          <Button variant="default" onClick={onClose}>
            cancel
          </Button>
          <Button color="#00c898">confirm Booking</Button>
        </Group>
      </Stack>
    </>
  );
};
