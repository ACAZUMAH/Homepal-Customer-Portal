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
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import classes from "../CSS/index.module.css";
import logo from "../../../assets/images/HomePal Svg.svg";

export const MainFooter = () => {
  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES);

  return (
    <>
      <Container pt="xl" pb="xl" size="xl">
        <Grid visibleFrom="sm">
          <Grid.Col span={4}>
            <Group align="center">
              <Image sizes="md" h="xl" fit="contain" src={logo} />
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex justify="space-between" align="flex-start" wrap="nowrap">
              <Stack gap={10}>
                <Text size="md">Category</Text>
                <Stack gap={10}>
                  <Anchor c="#00c898" href={routesEndPoints.HOME}>
                    Home
                  </Anchor>
                  <Anchor
                    size="md"
                    c="#00c898"
                    onClick={() => {
                      navigateToProperties();
                    }}
                  >
                    Properties
                  </Anchor>
                </Stack>
              </Stack>
              <Stack gap={10}>
                <Text size="md">Legal</Text>
                <Stack gap={10}>
                  <Anchor size="md" c="#00c898">
                    Terms of use
                  </Anchor>
                  <Anchor size="md" c="#00c898" onClick={() => {}}>
                    Policies
                  </Anchor>
                </Stack>
              </Stack>
              <Stack gap={10}>
                <Text size="md">Contact Us</Text>
                <Stack gap={10}>
                  <Anchor
                    size="md"
                    c="#00c898"
                    component="a"
                    onClick={() => null}
                  >
                    Contact Us
                  </Anchor>
                  <Anchor
                    size="md"
                    c="#00c898"
                    component="a"
                    onClick={() => null}
                  >
                    Listing Your Property
                  </Anchor>
                </Stack>
              </Stack>
            </Flex>
          </Grid.Col>
          <Grid.Col span={4}>
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
          </Grid.Col>
        </Grid>
        <Center pt={40}>
          <Text c="#00c898">
            @{new Date().getFullYear()} HomePal. All Right Reserved
          </Text>
        </Center>
      </Container>
    </>
  );
};
