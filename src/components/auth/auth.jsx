import { Box, Button, Stack, Text, TextInput } from "@mantine/core";
import React from "react";
import { Conditional } from "../conditional";

export const Auth = (props) => {
  return (
    <>
      <Box>
        <Conditional condition={true}>
          <Stack gap="md">
            <Text ta="center"> Enter your phone number </Text>
            <TextInput size="md" />
            <Button size="md" color="#00c898" disabled>
              continue
            </Button>
          </Stack>
        </Conditional>
      </Box>
    </>
  );
};
