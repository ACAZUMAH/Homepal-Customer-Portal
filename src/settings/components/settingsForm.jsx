import { Button, Card, Group, SimpleGrid, TextInput } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons-react";
import React from "react";

export const SettingsForm = ({ form, handleSubmit, loading }) => {
  return (
    <>
      <Card withBorder>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            size="md"
            c="dimmed"
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            value={form.values.firstName}
            onChange={form.handleChange}
            classNames={{ input: "custom-input" }}
          />
          <TextInput
            size="md"
            c="dimmed"
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
            value={form.values.lastName}
            onChange={form.handleChange}
            classNames={{ input: "custom-input" }}
          />
          <TextInput
            size="md"
            c="dimmed"
            label="Email"
            name="email"
            placeholder="Enter you Email"
            value={form.values.email}
            onChange={form.handleChange}
            classNames={{ input: "custom-input" }}
          />
          <TextInput
            size="md"
            c="dimmed"
            label="Phone Number"
            name="phoneNumber"
            disabled
            value={form.values.phoneNumber}
            onChange={form.handleChange}
            classNames={{ input: "custom-input" }}
            withAsterisk
          />
        </SimpleGrid>
        <Group pt={20} justify="flex-end">
          <Button
            color="#00c898"
            loading={loading}
            leftSection={<IconDeviceFloppy />}
            disabled={!form.isValid}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Group>
      </Card>
    </>
  );
};
