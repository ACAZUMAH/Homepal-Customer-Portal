import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Group,
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

export const UpdateListing = () => {
  const parems = useParams();
  const location = useLocation();
  const back = location.state?.from || "/";
  const navigateBack = useAppNavigation(back);

  const { property, loading, error } = usePropertyQuery(parems.id);

  const form = useUpdateListingForm(property);

  const photos = property.imageUrls ? property.imageUrls : [];

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
        <Group justify="space-between" grow>
          <UpdateForm form={form} />
          <UpdateCarousel imageUrls={[...photos]} />
        </Group>

        <Group mt={20} justify="flex-end">
          <Button
            color="#00c898"
            size="md"
            radius="md"
            leftSection={<IconDeviceFloppy />}
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
