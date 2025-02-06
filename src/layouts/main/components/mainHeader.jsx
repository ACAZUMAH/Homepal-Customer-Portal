import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Container,
  Group,
  Space,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";
import classes from '../CSS/index.module.css'
import { Conditional } from "../../../components/conditional";
import { MainDrawer } from "./mainDrawer";
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { IconHeart, IconHeartFilled, IconHome } from "@tabler/icons-react";
import { DropDownMenu } from "./dropDownMenu";

export const MainHeader = () => {
  const [opened, setOpened] = useState(false);
  const navigateToHome = useAppNavigation(routesEndPoints.HOME);
  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES);
  const { isAuthenticated } = useAppAuthentication()
  return (
    <>
      <Container px="md" size="90%" h="100%">
        <Group justify="space-between" h="100%">
          <Center hiddenFrom="sm">
            <Burger
              color="#00c898"
              opened={opened}
              onClick={() => setOpened(!opened)}
            />
          </Center>
          <Group gap="xs">
            <Anchor
              href="/"
              underline="never"
              onClick={(e) => {
                e.preventDefault();
                navigateToHome();
              }}
            >
              <Title c="#00c898" fs="italic" order={1} size="2.5rem">
                HomePal
              </Title>
            </Anchor>
            <Space w="80" />
            <Button
              c="#00c898"
              variant="transparent"
              component="a"
              visibleFrom="sm"
              fz="xl"
              classNames={{
                label: classes.button,
              }}
              onClick={(e) => {
                e.preventDefault();
                navigateToProperties();
              }}
            >
              Buy
            </Button>

            <Button
              c="#00c898"
              variant="transparent"
              component="a"
              visibleFrom="sm"
              fz="xl"
              classNames={{
                label: classes.button,
              }}
              onClick={(e) => {
                e.preventDefault();
                navigateToProperties();
              }}
            >
              Rent
            </Button>
          </Group>
          <Group visibleFrom="sm" gap={2} display="flex">
            <Conditional condition={!isAuthenticated}>
              <Button
                c="#00c898"
                fz="xl"
                component="a"
                variant="transparent"
                classNames={{
                  label: classes.button,
                }}
              >
                Login
              </Button>
            </Conditional>
            <Conditional condition={isAuthenticated}>
              <Box visibleFrom="lg">
                <Button
                  classNames={{
                    label: classes.button,
                  }}
                  c="#00c898"
                  variant="transparent"
                  fz="xl"
                >
                  <IconHome size="2rem" stroke={1.5} /> My list
                </Button>

                <Button
                  classNames={{
                    label: classes.button,
                  }}
                  c="#00c898"
                  variant="transparent"
                  fz="xl"
                >
                  <IconHeart size="2rem" stroke={1.5} /> Fovorite
                </Button>
              </Box>
              <Space w="80" />
              <DropDownMenu />
            </Conditional>
          </Group>
          <Box hiddenFrom="sm">
            <DropDownMenu />
          </Box>
        </Group>
        <MainDrawer opened={opened} onClose={() => setOpened(!opened)} />
      </Container>
    </>
  );
};
