import { Card, MultiSelect, Select, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import React from "react";
import { amenitiesData } from "../../../constants";

export const UpdateForm = ({ form }) => {
  return (
    <Card withBorder>
      <TextInput
        name="name"
        label="Property Name"
        placeholder="Enter property name"
        withAsterisk
        mb="md"
        onBlur={form.handleBLur}
        value={form.values.name}
        onChange={form.handleChange}
        error={form.touched.name && form.errors.name}
        classNames={{ input: "custom-input" }}
      />
      <TextInput
        mb="md"
        name="type"
        label="Property Type"
        placeholder="Enter property type"
        withAsterisk
        onBlur={form.handleBLur}
        value={form.values.type}
        onChange={form.handleChange}
        error={form.touched.type && form.errors.type}
        classNames={{ input: "custom-input" }}
      />
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Select
          name="mode"
          label="Listing mode"
          placeholder="Select mode"
          withAsterisk
          data={["RENT", "SALE"]}
          onBlur={form.handleBLur}
          value={form.values.mode}
          onChange={(value) => form.setFieldValue("mode", value)}
          error={form.touched.mode && form.errors.mode}
          classNames={{ input: "custom-input" }}
        />
        <TextInput
          name="price"
          label="Price"
          placeholder="Enter property price"
          onBlur={form.handleBLur}
          value={form.values.price}
          onChange={form.handleChange}
          error={form.touched.price && form.errors.price}
          classNames={{ input: "custom-input" }}
          withAsterisk
          leftSection="GH¢"
        />
        <TextInput
          mb="md"
          name="bathrooms"
          label="Bathrooms"
          placeholder="Enter the number of bathrooms"
          onBlur={form.handleBLur}
          value={form.values.bathrooms}
          onChange={form.handleChange}
          error={form.touched.bathrooms && form.errors.bathrooms}
          classNames={{ input: "custom-input" }}
          withAsterisk
        />
        <TextInput
          mb="md"
          name="bedrooms"
          label="Bedrooms"
          withAsterisk
          placeholder="Enter the number of bedrooms"
          onBlur={form.handleBLur}
          value={form.values.bedrooms}
          onChange={form.handleChange}
          error={form.touched.bedrooms && form.errors.bedrooms}
          classNames={{ input: "custom-input" }}
        />
      </SimpleGrid>
      <TextInput
        mb="md"
        name="address"
        label="Address"
        placeholder="Enter property full address"
        onBlur={form.handleBLur}
        value={form.values.address}
        onChange={form.handleChange}
        error={form.touched.address && form.errors.address}
        withAsterisk
        classNames={{ input: "custom-input" }}
      />
      <Textarea
        name="description"
        label="Description"
        placeholder="Describe your property..."
        value={form.values.description}
        onBlur={form.handleBLur}
        onChange={form.handleChange}
        error={form.touched.description && form.errors.description}
        autosize
        minRows={3}
        mb="md"
        classNames={{ input: "custom-input" }}
      />
      <MultiSelect
        label="Amenities"
        name="amenities"
        placeholder="Select or add amenities"
        data={amenitiesData}
        onBlur={form.handleBLur}
        value={form.values.amenities}
        onChange={(value) => form.setFieldValue("amenities", value)}
        error={form.touched.amenities && form.errors.amenities} 
        searchable
        clearable
        classNames={{ input: "custom-input" }}
      />
    </Card>
  );
};
