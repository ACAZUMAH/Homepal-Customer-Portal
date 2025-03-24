import {
  Card,
  Group,
  Paper,
  Text,
  Image,
  SimpleGrid,
  Button,
} from "@mantine/core";
import {
  IconUpload,
  IconPhoto,
  IconX,
  IconArrowRight,
} from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useCallback, useState } from "react";
import { FormikProvider } from "formik";
import { LightBox } from "../../../components/light-box/lightBox";
import { PreviewUpload } from "./previewUpload";

export const ImageDropZone = ({ form, handleNext }) => {
  const [viewPhotoUrl, setViewPhotoUrl] = useState();

  const closePhotoModal = useCallback(() => {
    setViewPhotoUrl(undefined);
  }, [viewPhotoUrl]);

  return (
    <FormikProvider value={form}>
      <Text fw="bold" size="lg">
        Upload property images
      </Text>
      <Text size="sm" c="dimmed">
        Please upload clear image(s) of your property below
      </Text>
      <Paper my={20} p={20} withBorder>
        <Dropzone
          onDrop={form.handleFilesDrop}
          maxSize={5 * 1024 ** 2}
          accept={[...IMAGE_MIME_TYPE]}
        >
          <Group
            justify="center"
            gap="xl"
            mih={200}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                size={52}
                color="var(--mantine-color-blue-6)"
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                size={52}
                color="var(--mantine-color-red-6)"
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                size={52}
                color="var(--mantine-color-dimmed)"
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Attach not more than 7 images, each file should not exceed 5MB
              </Text>
            </div>
          </Group>
        </Dropzone>
        <SimpleGrid
          cols={{ base: 1, sm: 4 }}
          mt={form.values.files?.length > 0 ? "xl" : 0}
        >
          {form.values.files?.map((file) => (
            <PreviewUpload
              file={file}
              key={file?.path}
              onRemove={form.handleRemoveFile}
              setViewPhotoUrl={setViewPhotoUrl}
            />
          ))}
        </SimpleGrid>
      </Paper>

      <Group justify="flex-end" mt="xl">
        <Button
          radius="xl"
          onClick={handleNext}
          disabled={!form.isValid || !form.values.files.length}
          color="#00c898"
          rightSection={<IconArrowRight stroke={1.5} />}
        >
          Next
        </Button>
      </Group>

      <LightBox
        url={viewPhotoUrl}
        opened={Boolean(viewPhotoUrl)}
        onClose={closePhotoModal}
      />
    </FormikProvider>
  );
};
