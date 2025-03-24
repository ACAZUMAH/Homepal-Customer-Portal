import { Button, Divider, Grid, Group, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import React, { useCallback, useState } from "react";
import { Conditional } from "../../../components/conditional";
import { PreviewUpload } from "./previewUpload";
import { LightBox } from "../../../components/light-box/lightBox";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export const Summary = ({ listingForm, filesForm, handleBack, handleSubmit, loading }) => {
  const [viewPhotoUrl, setViewPhotoUrl] = useState();

  const closePhotoModal = useCallback(() => {
    setViewPhotoUrl(undefined);
  }, [viewPhotoUrl]);

  return (
    <>
      <Title order={3}>Review and submit your listing</Title>
      <Text size="sm" c="dimmed" mb="xl">
        Please review the information below and submit your listing
      </Text>

      <Paper p="sm" my="lg" withBorder>
        <Conditional condition={filesForm.values.files?.length}>
          <Text size="md" mb={3} c="dimmed">
            Uploaded listing images
          </Text>
          <Divider />
          <SimpleGrid cols={{ base: 1, sm: 4 }} mt="md" mb="md">
            {filesForm.values.files?.map((file) => (
              <PreviewUpload
                file={file}
                key={file.path}
                setViewPhotoUrl={setViewPhotoUrl}
              />
            ))}
          </SimpleGrid>
        </Conditional>
      </Paper>
      <Paper p="sm" my="lg" withBorder>
        <Text size="md" mb={3} c="dimmed">
          Listing information
        </Text>
        <Divider />
        <Stack gap="md" mt="sm">
          <div>
            <Text size="md" c="dimmed">
              Property name:
            </Text>
            <Text size="lg">{`${listingForm.values.name}`}</Text>
          </div>
          <div>
            <Text size="md" c="dimmed">
              Property type:
            </Text>
            <Text size="lg">{`${listingForm.values.type}`}</Text>
          </div>
          <div>
            <Text size="md" c="dimmed">
              Property address:
            </Text>
            <Text size="lg">{`${listingForm.values.address}`}</Text>
          </div>
          <div>
            <Text size="md" c="dimmed">
              Lsting mode:
            </Text>
            <Text size="lg">{`${listingForm.values.mode}`}</Text>
          </div>
          <div>
            <Text size="md" c="dimmed">
              Description:
            </Text>
            <Text size="lg">{`${listingForm.values.description}`}</Text>
          </div>
          <Grid>
            <Grid.Col span={4}>
              <SummaryItem
                label="Lsting mode:"
                value={listingForm.values.mode}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <SummaryItem
                label="Price:"
                value={`GH¢ ${listingForm.values.price}`}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <SummaryItem
                label="Bedrooms:"
                value={listingForm.values.bedrooms}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <SummaryItem
                label="Bathrooms:"
                value={listingForm.values.bathrooms}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Text size="md" c="dimmed">
                Amenities
              </Text>
              <Divider mb="sm" />
              <Group gap="sm">
                {listingForm.values.amenities.map((amenity, index) => (
                  <Text key={index} size="lg" span>
                    • {amenity}
                  </Text>
                ))}
              </Group>
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>
      <Group justify="center" mt="xl">
        <Button
          color="#00c898"
          radius="xl"
          leftSection={<IconArrowLeft stroke={1.5} />}
          onClick={handleBack}
          disabled={loading}
        >
          Back
        </Button>
        <Button
          color="#00c898"
          radius="xl"
          rightSection={<IconArrowRight stroke={1.5} />}
          onClick={handleSubmit}
          loading={loading}
          disabled={loading}
        >
          Submit
        </Button>
      </Group>
      <LightBox
        url={viewPhotoUrl}
        opened={Boolean(viewPhotoUrl)}
        onClose={closePhotoModal}
      />
    </>
  );
};

const SummaryItem = ({ label, value }) => (
  <Group justify="flex-start" align="center">
    <Text c="dimmed" size="md">
      {label}
    </Text>
    <Text size="lg">{value || "-"}</Text>
  </Group>
);
