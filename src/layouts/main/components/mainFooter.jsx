import {
  Text,
  Title,
  Container,
  Stack,
  Anchor,
  Flex,
  Button,
  Grid,
  Center,
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
      <Container size="87%">
        <Grid mt={50}>
          <Grid.Col span={4}>
            <Title c="#00c898" fs="italic" order={1} size="2.5rem">
              HomePal
            </Title>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex justify="space-between" align="flex-start" wrap="nowrap">
              <Stack gap={10}>
                <Text size="xl">Category</Text>
                <Stack gap={10}>
                  <Anchor size="xl" c="#00c898" href={routesEndPoints.HOME}>
                    Home
                  </Anchor>
                  <Anchor
                    size="xl"
                    c="#00c898"
                    onClick={() => {
                      navigateToProperties();
                    }}
                  >
                    Buy
                  </Anchor>
                  <Anchor
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
                <Text size="xl">Legal</Text>
                <Stack gap={10}>
                  <Anchor size="xl" c="#00c898" href={routesEndPoints.HOME}>
                    Terms of use
                  </Anchor>
                  <Anchor
                    size="xl"
                    c="#00c898"
                    onClick={() => {
                      navigateToProperties();
                    }}
                  >
                    Policies
                  </Anchor>
                </Stack>
              </Stack>

              <Stack gap={10}>
                <Text size="xl">Contact Us</Text>
                <Stack gap={10}>
                  <Anchor
                    c="#00c898"
                    component="a"
                    size="xl"
                    onClick={() => null}
                  >
                    Contact Us
                  </Anchor>
                  <Anchor
                    c="#00c898"
                    component="a"
                    size="xl"
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
          </Grid.Col>
        </Grid>
        <Center pt={60} pb={25}>
        <Text c="#00c898" size="xl">
          @{new Date().getFullYear()} HomePal. All Right Reserved
        </Text>
        </Center>
      </Container>
    </>
  );
};
