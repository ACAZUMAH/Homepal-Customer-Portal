import {
  TextInput,
  Textarea,
  Select,
  Button,
  Box,
  Group,
  MultiSelect,
  SimpleGrid,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { amenitiesData } from "../../../constants";

export const ListingForm = ({ form, handleBack, handleNext }) => {

  return (
    <Box>
      <TextInput
        mt="md"
        name="name"
        label="Property Name"
        placeholder="Enter property name"
        withAsterisk
        mb="md"
        value={form.values.name}
        onChange={form.handleChange}
        onBlur={form.handleBLur}
        error={form.touched.name && form.errors.name}
        classNames={{ input: "custom-input" }}
      />
      <TextInput
        name="type"
        label="Property Type"
        placeholder="Enter property type"
        value={form.values.type}
        onChange={form.handleChange}
        onBlur={form.handleBLur}
        error={form.touched.type && form.errors.type}
        withAsterisk
        mb="md"
        classNames={{ input: "custom-input" }}
      />
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Select
          name="mode"
          label="Listing mode"
          placeholder="Select mode"
          data={["RENT", "SALE"]}
          value={form.values.mode}
          onBlur={form.handleBLur}
          onChange={(value) => form.setFieldValue("mode", value)}
          error={form.touched.mode && form.errors.mode}
          withAsterisk
          classNames={{ input: "custom-input" }}
        />
        <TextInput
          name="price"
          label="Price"
          placeholder="Enter property price"
          value={form.values.price}
          onBlur={form.handleBLur}
          onChange={form.handleChange}
          error={form.touched.price && form.errors.price}
          withAsterisk
          leftSection="GH¢"
          classNames={{ input: "custom-input" }}
        />
        <TextInput
          name="bedrooms"
          label="Bedrooms"
          placeholder="Enter the number of bedrooms"
          value={form.values.bedrooms}
          onBlur={form.handleBLur}
          onChange={form.handleChange}
          error={form.touched.bedrooms && form.errors.bedrooms}
          withAsterisk
          mb="md"
          classNames={{ input: "custom-input" }}
        />
        <TextInput
          name="bathrooms"
          label="Bathrooms"
          placeholder="Enter the number of bathrooms"
          value={form.values.bathrooms}
          onBlur={form.handleBLur}
          onChange={form.handleChange}
          error={form.touched.bathrooms && form.errors.bathrooms}
          withAsterisk
          mb="md"
          classNames={{ input: "custom-input" }}
        />
      </SimpleGrid>
      <TextInput
        name="address"
        label="Address"
        placeholder="Enter property full address"
        value={form.values.address}
        onBlur={form.handleBLur}
        onChange={form.handleChange}
        error={form.touched.address && form.errors.address}
        withAsterisk
        mb="md"
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
        placeholder="Select amenities"
        data={amenitiesData}
        value={form.values.amenities}
        onBlur={form.handleBLur}
        onChange={(value) => form.setFieldValue("amenities", value)}
        error={form.touched.amenities && form.errors.amenities}
        searchable
        clearable
        classNames={{ input: "custom-input" }}
      />
      <Group justify="center" mt="xl">
        <Button
          color="#00c898"
          radius="xl"
          leftSection={<IconArrowLeft stroke={1.5} />}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          color="#00c898"
          radius="xl"
          rightSection={<IconArrowRight stroke={1.5} />}
          disabled={!form.isValid}
          onClick={handleNext}
        >
          Next
        </Button>
      </Group>
    </Box>
  );
};
