import {
  Text,
  Container,
  Stack,
  Anchor,
  Flex,
  Button,
  Grid,
  Center,
  Image,
  Group,
} from "@mantine/core";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";
import { IconBrandX, IconBrandYoutube, IconMail } from "@tabler/icons-react";
import classes from "../CSS/index.module.css";
import logo from "../../../assets/images/HomePal Svg.svg";
import { Notifications } from "@mantine/notifications";

export const MainFooter = () => {
  const navigateToBuy = useAppNavigation(routesEndPoints.BUY);
  const navigateToBlog = useAppNavigation(routesEndPoints.BLOG);
  const navigateToRent = useAppNavigation(routesEndPoints.RENT);

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
                  <Anchor
                    c="#00c898"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToBuy();
                    }}
                  >
                    Buy
                  </Anchor>
                  <Anchor
                    c="#00c898"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToRent();
                    }}
                  >
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
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToBlog();
                    }}
                  >
                    Blog
                  </Anchor>
                  <Anchor
                    size="md"
                    c="#00c898"
                    component="a"
                    onClick={() => {
                      e.preventDefault();
                      navigateToBlog();
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
