

import { Card, Group, Paper, Text, Image, SimpleGrid } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, MIME_TYPES, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useState } from "react";

export const ImageDropZone = ({ images, setImages }) => {
  const handleDrop = (files) => {
    const filePreviews = files.map(file => ({
      url: URL.createObjectURL(file),
      file
    }));
    setImages([...images, ...filePreviews]);
  };

  return (
    <Paper my={20} p={20} withBorder>
      <Dropzone
        onDrop={handleDrop}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        <Group justify="center" gap="xl" mih={200} style={{ pointerEvents: "none" }}>
          <Dropzone.Accept>
            <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many images as you like, each file should not exceed 5MB
            </Text>
          </div>
        </Group>
      </Dropzone>

      {images.length > 0 && (
        <SimpleGrid cols={3} mt="md">
          {images.map((img, index) => (
    
            <Image
                    key={index}
                    src={img.url}
                    style={{
                      maxWidth: "100%", 
                      height: "auto", 
                    }}
                    radius="md"
                  />
          ))}
        </SimpleGrid>
      )}
    </Paper>
  );
};







