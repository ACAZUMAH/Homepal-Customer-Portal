import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Container,
  Group,
  Title,
  Image,
} from "@mantine/core";
import { useState } from "react";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";
import classes from "../CSS/index.module.css";
import { Conditional } from "../../../components/conditional";
import { MainDrawer } from "./mainDrawer";
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { IconHeart, IconHome } from "@tabler/icons-react";
import { DropDownMenu } from "./dropDownMenu";
import logo from "../../../assets/images/HomePal Svg.svg";

export const MainHeader = () => {
  const [opened, setOpened] = useState(false);
  const navigateToHome = useAppNavigation(routesEndPoints.HOME);
  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES);
  const navigateToLogin = useAppNavigation(routesEndPoints.LOGIN);
  const navigateToFavorite = useAppNavigation(routesEndPoints.FAVORITE);
  const navigateToSavedList = useAppNavigation(routesEndPoints.LIST);

  const { isAuthenticated } = useAppAuthentication();
  return (
    <>
      <Container px="md" fluid h="100%" size="90%">
        <Group justify="space-between" h="90%">
          <Center hiddenFrom="sm">
            <Burger
              color="#00c898"
              opened={opened}
              onClick={() => setOpened(!opened)}
            />
          </Center>
          <Group gap="md">
            <Anchor
              href="/"
              underline="never"
              onClick={(e) => {
                e.preventDefault();
                navigateToHome();
              }}
            >
              <Group gap={0}>
                <Image h="lg" visibleFrom="sm" fit="contain" src={logo} />
                <Title c="#00c898" fs="italic" order={2}>
                  HomePal
                </Title>
              </Group>
            </Anchor>
            <Button
              c="#00c898"
              variant="transparent"
              component="a"
              visibleFrom="sm"
              classNames={{
                label: classes.button,
              }}
              onClick={(e) => {
                e.preventDefault();
                navigateToProperties();
              }}
            >
              Properties
            </Button>
          </Group>
          <Group visibleFrom="sm" gap={2} display="flex">
            <Conditional condition={!isAuthenticated}>
              <Button
                c="#00c898"
                component="a"
                variant="transparent"
                classNames={{
                  label: classes.button,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToLogin();
                }}
              >
                Login
              </Button>
            </Conditional>
            <Conditional condition={isAuthenticated}>
              <Box >
                <Button
                  classNames={{
                    label: classes.button,
                  }}
                  c="#00c898"
                  variant="transparent"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSavedList();
                  }}
                >
                  <IconHome stroke={1.5} /> My list
                </Button>

                <Button
                  classNames={{
                    label: classes.button,
                  }}
                  c="#00c898"
                  variant="transparent"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToFavorite();
                  }}
                >
                  <IconHeart stroke={1.5} /> Favorite
                </Button>
              </Box>
              <DropDownMenu />
            </Conditional>
          </Group>
          <Conditional condition={isAuthenticated}>
            <Box hiddenFrom="sm">
              <DropDownMenu />
            </Box>
          </Conditional>
        </Group>
        <MainDrawer opened={opened} onClose={() => setOpened(!opened)} />
      </Container>
    </>
  );
};
