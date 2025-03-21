import { Card, MultiSelect, Select, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import React from "react";
import { amenitiesData } from "../../../constants";

export const UpdateForm = ({ form }) => {
  return (
    <Card withBorder>
      <TextInput
        mb="md"
        c="dimmed"
        label="Name"
        name="name"
        value={form.values.name}
        onChange={form.handleChange}
        classNames={{ input: "custom-input" }}
      />
      <TextInput
        mb="md"
        c="dimmed"
        label="Type"
        name="type"
        value={form.values.type}
        onChange={form.handleChange}
        classNames={{ input: "custom-input" }}
      />
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Select
          c="dimmed"
          label="Mode"
          name="mode"
          data={["RENT", "SALE"]}
          value={form.values.mode}
          onChange={(value) => form.setFieldValue("mode", value)}
          classNames={{ input: "custom-input" }}
        />
        <TextInput
          c="dimmed"
          label="Price"
          name="price"
          value={form.values.price}
          onChange={form.handleChange}
          classNames={{ input: "custom-input" }}
        />
        <TextInput
          mb="md"
          c="dimmed"
          label="Bath rooms"
          name="bathrooms"
          value={form.values.bathrooms}
          onChange={form.handleChange}
          classNames={{ input: "custom-input" }}
        />
        <TextInput
          name="bedrooms"
          mb="md"
          c="dimmed"
          label="Bed rooms"
          value={form.values.bedrooms}
          onChange={form.handleChange}
          classNames={{ input: "custom-input" }}
        />
      </SimpleGrid>
      <Textarea
        name="description"
        mb="md"
        c="dimmed"
        label="Description"
        value={form.values.description}
        onChange={form.handleChange}
        classNames={{ input: "custom-input" }}
      />
      <TextInput
        mb="md"
        c="dimmed"
        label="Address"
        name="address"
        value={form.values.address}
        onChange={form.handleChange}
        classNames={{ input: "custom-input" }}
      />
      <MultiSelect
        c="dimmed"
        label="Amenities"
        name="amenities"
        placeholder="Select or add amenities"
        data={amenitiesData}
        value={form.values.amenities}
        onChange={(value) => form.setFieldValue("amenities", value)}
        searchable
        clearable
        classNames={{ input: "custom-input" }}
      />
    </Card>
  );
};
