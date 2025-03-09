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
  const navigateToLogin = useAppNavigation(routesEndPoints.LOGIN);
  const navigateToFavorite = useAppNavigation(routesEndPoints.FAVORITE);
  const navigateToBuy = useAppNavigation(routesEndPoints.BUY)
  const navigateToRent = useAppNavigation(routesEndPoints.RENT)

  const { isAuthenticated } = useAppAuthentication();

  return (
    <>
      <Container px="xl" fluid h="100%" size="90%">
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
                <Title c="#00c898" fs="italic" order={3}>
                  HomePal
                </Title>
              </Group>
            </Anchor>
          </Group>
          <Group visibleFrom="sm" gap={4}>
            <Button
              component="a"
              variant="transparent"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateToHome();
              }}
              classNames={{ label: classes.button }}
            >
              Home
            </Button>
            <Button
              variant="transparent"
              component="a"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateToBuy();
              }}
              classNames={{ label: classes.button }}
            >
              Buy
            </Button>
            <Button
              component="a"
              variant="transparent"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (!isAuthenticated) navigateToLogin();
              }}
              classNames={{ label: classes.button }}
            >
              Sell
            </Button>
            <Button
              component="a"
              variant="transparent"
              href={routesEndPoints.RENT}
              onClick={(e) => {
                e.preventDefault();
                navigateToRent();
              }}
              classNames={{ label: classes.button }}
            >
              Rent
            </Button>
            <Button
              component="a"
              variant="transparent"
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
              classNames={{ label: classes.button }}
            >
              Find agent
            </Button>
            <Button
              component="a"
              variant="transparent"
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
              classNames={{ label: classes.button }}
            >
              Blog
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
              <Box>
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
                  <IconHeart stroke={1.5} size={30} />
                </Button>
                <DropDownMenu />
              </Box>
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
