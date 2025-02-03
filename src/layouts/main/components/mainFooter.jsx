import {
  Text,
  Title,
  Container,
  Group,
  Stack,
  Anchor,
  Space,
  Flex,
  Button,
} from "@mantine/core";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import classes from "../CSS/index.module.css";

export const MainFooter = () => {
  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES);
  return (
    <>
      <Container pt="xl" pb="xl">
        <Group gap={50}>
          <Stack gap={10}>
            <Title c="#00c898" fs="italic" order={1} size="2.5rem">
              HomePal
            </Title>
            <Stack gap={10}>
              <Flex align="center" justify="space-between">
                <Button
                  classNames={{
                    label: classes.button,
                  }}
                  href=""
                  component="a"
                  c="#00c898"
                  variant="transparent"
                >
                  <IconMail />
                </Button>
                <Button
                  classNames={{
                    label: classes.button,
                  }}
                  href=""
                  component="a"
                  c="#00c898"
                  variant="transparent"
                >
                  <IconBrandYoutube />
                </Button>
                <Button
                  classNames={{
                    label: classes.button,
                  }}
                  href=""
                  component="a"
                  c="#00c898"
                  variant="transparent"
                >
                  <IconBrandX />
                </Button>
                <Button
                  classNames={{
                    label: classes.button,
                  }}
                  href=""
                  component="a"
                  c="#00c898"
                  variant="transparent"
                >
                  <IconBrandInstagram />
                </Button>
              </Flex>
            </Stack>
            <Text c="#00c898" size="xl">
              @{new Date().getFullYear()} HomePal. All Right Reserved
            </Text>
          </Stack>
          <Space w="50" />
          <Stack gap={10}>
            <Text size="xl">
              Home
            </Text>
            <Stack gap={10}>
              <Anchor
                component="a"
                size="xl"
                c="#00c898"
                onClick={() => {
                  navigateToProperties();
                }}
              >
                Buy
              </Anchor>
              <Anchor
                component="a"
                size="xl"
                c="#00c898"
                onClick={() => {
                  navigateToProperties();
                }}
              >
                Rent
              </Anchor>
            </Stack>
          </Stack>
          <Stack gap={10}>
            <Text size="xl">
              Contact Us
            </Text>
            <Stack gap={10}>
              <Anchor c="#00c898" component="a" size="xl" onClick={() => null}>
                Contact Us
              </Anchor>
              <Anchor c="#00c898" component="a" size="xl" onClick={() => null}>
                listing Your Property
              </Anchor>
            </Stack>
          </Stack>
        </Group>
      </Container>
    </>
  );
};
