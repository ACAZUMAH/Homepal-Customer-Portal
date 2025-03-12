import {
  Anchor,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { IconBrandX, IconBrandYoutube, IconMail } from "@tabler/icons-react";
import logo from "../../../assets/images/HomePal Svg.svg";
import { routesEndPoints } from "../../../constants";
import { useAppNavigation } from "../../../hooks";
import classes from "../CSS/index.module.css";

export const MainFooter = () => {
  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES);

  return (
    <>
      <Container pb="md" size="xl" w="90%">
        <Grid pt="xl">
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Group align="center" visibleFrom="sm">
              <Image sizes="md" h="xl" fit="contain" src={logo} />
            </Group>
            <Center hiddenFrom="sm" mb={20}>
              <Image sizes="md" h="xl" fit="contain" src={logo} />
            </Center>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Flex justify="space-between" align="flex-start" wrap="nowrap">
              <Stack gap={10}>
                <Text size="18px" fw={500}>
                  Category
                </Text>
                <Stack gap={6}>
                  <Anchor c="#00c898" href={routesEndPoints.HOME}>
                    Home
                  </Anchor>
                  <Anchor c="#00c898" onClick={() => {}}>
                    Buy
                  </Anchor>
                  <Anchor c="#00c898" onClick={() => {}}>
                    Sell
                  </Anchor>
                  <Anchor c="#00c898" onClick={() => {}}>
                    Rent
                  </Anchor>
                  <Anchor c="#00c898" onClick={() => {}}>
                    Find Agent
                  </Anchor>
                </Stack>
              </Stack>
              <Stack gap={10}>
                <Text size="18px" fw={500}>
                  Resources
                </Text>
                <Stack gap={10}>
                  <Anchor
                    size="md"
                    c="#00c898"
                    component="a"
                    onClick={() => null}
                  >
                    Blog
                  </Anchor>
                  <Anchor
                    size="md"
                    c="#00c898"
                    component="a"
                    onClick={() => {
                      Notifications.show({
                        title: "",
                        message: "Admin portal is under development",
                        color: "#00c898",
                      });
                    }}
                  >
                    Testimonial
                  </Anchor>
                </Stack>
              </Stack>
              <Stack gap={10}>
                <Text size="18px" fw={500}>
                  Legals
                </Text>
                <Stack gap={10}>
                  <Anchor size="md" c="#00c898">
                    Terms of use
                  </Anchor>
                  <Anchor size="md" c="#00c898" onClick={() => {}}>
                    Policies
                  </Anchor>
                </Stack>
              </Stack>
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Flex align="center" justify="flex-end" visibleFrom="sm">
              <Button
                classNames={{
                  label: classes.button,
                }}
                href=""
                component="a"
                c="#00c898"
                variant="transparent"
                size="md"
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
                size="md"
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
                size="md"
              >
                <IconBrandX />
              </Button>
            </Flex>
            <Center hiddenFrom="sm" mb={20}>
              <Flex align="center" justify="flex-end">
                <Button
                  classNames={{
                    label: classes.button,
                  }}
                  href=""
                  component="a"
                  c="#00c898"
                  variant="transparent"
                  size="md"
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
                  size="md"
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
                  size="md"
                >
                  <IconBrandX />
                </Button>
              </Flex>
            </Center>
          </Grid.Col>
        </Grid>
        <Center pt="5rem">
          <Text c="#00c898">
            &copy; {new Date().getFullYear()} HomePal, Inc.
          </Text>
        </Center>
      </Container>
    </>
  );
};
