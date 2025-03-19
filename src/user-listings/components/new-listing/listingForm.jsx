import { TextInput, Textarea, NumberInput, Select, Button, Box, Group, ActionIcon } from "@mantine/core";
import { IconPlus, IconX } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

export const ListingForm = ({ form }) => {
  const addAmenity = () => {
    form.setFieldValue("amenities", [...form.values.amenities, ""]);
  };

  const removeAmenity = (index) => {
    const newAmenities = form.values.amenities.filter((_, i) => i !== index);
    form.setFieldValue("amenities", newAmenities);
  };

  return (
    <Box component="form">
      <TextInput label="Property Name" placeholder="Enter name" {...form.getInputProps("name")} withAsterisk mb="md" />
      <Select
        label="Property Type"
        placeholder="Select type"
        data={["Apartment", "House", "Villa", "Condo", "Townhouse"]}
        {...form.getInputProps("type")}
        withAsterisk
        mb="md"
      />
      <Textarea label="Description" placeholder="Describe your property..." autosize minRows={3} {...form.getInputProps("description")} withAsterisk mb="md" />
      <TextInput label="Address" placeholder="Enter full address" {...form.getInputProps("address")} withAsterisk mb="md" />
      <NumberInput label="Price" placeholder="Enter price" min={0} prefix="GHC" {...form.getInputProps("price")} withAsterisk mb="md" />
      <Group grow>
        <NumberInput label="Bedrooms" min={1} max={20} {...form.getInputProps("bedrooms")} mb="md" />
        <NumberInput label="Bathrooms" min={1} max={20} {...form.getInputProps("bathrooms")} mb="md" />
      </Group>
      <Select
        label="Listing Mode"
        placeholder="Select mode"
        data={["For Sale", "For Rent"]}
        {...form.getInputProps("mode")}
        withAsterisk
        mb="md"
      />
      <Box>
        <TextInput label="Amenities" placeholder="Add amenities" disabled />
        {form.values.amenities.map((amenity, index) => (
          <Group key={index} mb="xs">
            <TextInput placeholder={`Amenity ${index + 1}`} {...form.getInputProps(`amenities.${index}`)} style={{ flex: 1 }} />
            <ActionIcon color="red" onClick={() => removeAmenity(index)}>
              <IconX size={16} />
            </ActionIcon>
          </Group>
        ))}
        <Button onClick={addAmenity} variant="outline" leftSection={<IconPlus size={14} />} mt="sm" size="sm">
          Add Amenity
        </Button>
      </Box>
    </Box>
  );
};

