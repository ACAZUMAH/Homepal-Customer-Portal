import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Group,
  SimpleGrid,
  Title,
} from "@mantine/core";
import React from "react";
import { UpdateForm } from "./update-form";
import { UpdateCarousel } from "./update-Carousel";
import { IconArrowLeft, IconDeviceFloppy } from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppNavigation } from "../../../hooks";
import { usePropertyQuery } from "../../../property/hooks";
import { useUpdateListingForm } from "../../hooks/useUpdateListingForm";
import { Conditional } from "../../../components/conditional";
import { UpdateListingSkeleton } from "./updateLoader";
import { useUpdateListingMutation } from "../../hooks/useUpdateListingMutation";

export const UpdateListing = () => {
  const parems = useParams();
  const location = useLocation();
  const back = location.state?.from || "/";
  
  const navigateBack = useAppNavigation(back);
  
  const { property, loading, error } = usePropertyQuery(parems.id);

  const form = useUpdateListingForm(property);

  const { updateHandler, ...result } = useUpdateListingMutation()

  const photos = property.imageUrls ? property.imageUrls : [];

  const handleUpdate = async () => {

   await updateHandler({
      id: form.values.id || property._id,
      name: form.values.name,
      type: form.values.type,
      mode: form.values.mode,
      price: form.values.price,
      bathrooms: form.values.bathrooms,
      bedrooms: form.values.bedrooms,
      description: form.values.description,
      address: form.values.address,
      amenities: form.values.amenities,
      imageUrls: form.values.imageUrls,
    });
    
  }

  return (
    <Container size="xl">
      <Group justify="flex-start" gap={30} my={20}>
        <ActionIcon variant="transparent" color="black" onClick={navigateBack}>
          <IconArrowLeft />
        </ActionIcon>
        <Title fw={500} c="#00c898" order={2}>
          Edit Listing
        </Title>
      </Group>
      <Conditional condition={!loading}>
        <SimpleGrid cols={{base: 1, lg: 2}}>
          <UpdateForm form={form} />
          <UpdateCarousel imageUrls={[...photos]} />
        </SimpleGrid>

        <Group mt={20} justify="flex-end">
          <Button
            color="#00c898"
            size="md"
            radius="md"
            leftSection={<IconDeviceFloppy />}
            onClick={handleUpdate}
            loading={result.loading}
          >
            Save
          </Button>
        </Group>
      </Conditional>
      <Conditional condition={loading}>
        <UpdateListingSkeleton />
      </Conditional>
    </Container>
  );
};
