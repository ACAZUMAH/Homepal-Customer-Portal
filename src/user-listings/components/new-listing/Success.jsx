import { Button, Flex, rem, Text, ThemeIcon, Title } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import React from "react";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";

export const Success = () => {
  const navigateBackToDashboard = useAppNavigation(routesEndPoints.USER);
  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        mih={400}
        gap="md"
        py="xl"
      >
        <ThemeIcon variant="light" color="teal" size={120} radius="60px">
          <IconCircleCheck style={{ width: rem(80), height: rem(80) }} />
        </ThemeIcon>
        <Title order={3} c="dimmed" mt="md">
          Listing Submitted Successfully!
        </Title>
        <Text c="dimmed" ta="center" maw={500}>
          Your property listing has been submitted Successfully. You can track its
          status in your dashboard. Thank you for choosing HomePal!
        </Text>

        <Button
          onClick={() => navigateBackToDashboard()}
          color="#00c898"
          mt="xl"
          size="md"
          radius="xl"
        >
          Finish
        </Button>
      </Flex>
    </>
  );
};
