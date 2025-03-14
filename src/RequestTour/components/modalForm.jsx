import { Select, Stack, Text, TextInput } from "@mantine/core";
import { useState } from "react";
import { Conditional } from "../../components/conditional";
import { DateTimePicker } from "@mantine/dates";

export const ModalForm = () => {
  const [mode, setMode] = useState("In person tour");
  const [callMode, setCallMode] = useState("google meet");
  let inputLabel;
  let placeHolder;
  if (callMode === "google meet") {
    inputLabel = "Gmail";
    placeHolder = "Enter your gmail";
  }
  if (callMode === "whatsApp") {
    inputLabel = "WhatsApp Number";
    placeHolder = "Enter your whatsApp number";
  }
  if (callMode === "face time") {
    inputLabel = "Phone Number";
    placeHolder = "Enter your Phone number";
  }

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
        />
        <Conditional condition={mode === "In person tour"}>
          <DateTimePicker
            label="Choose date and time"
            placeholder="choose date and time"
            classNames={{ input: "custom-input" }}
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
          />
          <TextInput
            label={inputLabel}
            placeholder={placeHolder}
            classNames={{ input: "custom-input" }}
          />
          <DateTimePicker
            label="Choose date and time"
            placeholder="choose date and time"
            classNames={{ input: "custom-input" }}
          />
        </Conditional>
      </Stack>
    </>
  );
};
