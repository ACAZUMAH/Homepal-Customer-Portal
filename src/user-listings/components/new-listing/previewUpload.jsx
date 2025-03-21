import { Anchor, BackgroundImage, Button, Paper, Stack } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { Conditional } from "../../../components/conditional";
import { IconZoom } from "@tabler/icons-react";

export const PreviewUpload = ({ file, onRemove, setViewPhotoUrl }) => {
  const { hovered, ref } = useHover();
  const url = URL.createObjectURL(file);

  return (
    <Paper ref={ref} withBorder>
      <BackgroundImage
        h={200}
        src={url}
        onLoad={() => URL.revokeObjectURL(url)}
      >
        <Conditional condition={hovered}>
          <Anchor underline="never" onClick={() => setViewPhotoUrl(url)}>
            <Stack
              h="100%"
              justify="center"
              align="center"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <IconZoom stroke={1.5} size={40} color="white" />
            </Stack>
          </Anchor>
        </Conditional>
      </BackgroundImage>
      <Conditional condition={onRemove}>
        <Button
          fullWidth
          color="red"
          variant="outline"
          onClick={() => {
            onRemove?.(file);
          }}
        >
          Remove
        </Button>
      </Conditional>
    </Paper>
  );
};
