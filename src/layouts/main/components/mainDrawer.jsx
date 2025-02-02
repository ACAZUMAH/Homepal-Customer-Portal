import { Drawer, NavLink } from "@mantine/core";
import { IconHome, IconHeart, IconList, IconLogin, IconHomeDollar, IconLogout } from "@tabler/icons-react";
import { Conditional } from "../../../components/conditional";
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";
import classes from '../CSS/index.module.css'

export const MainDrawer = (props) => {
  const navigateToLogin = useAppNavigation(routesEndPoints.LOGIN);
  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES)
  const { isAuthenticated } = useAppAuthentication();
  return (
    <>
      <Drawer
        size="xl"
        padding="xl"
        opened={props.opened}
        onClose={props.onClose}
        title="HomePal"
      >
        <Conditional condition={!isAuthenticated}>
          <NavLink
            label="Login"
            onClick={() => {
              navigateToLogin();
              props.onClose();
            }}
            leftSection={<IconLogin size={40} stroke={1.5} />}
          />
        </Conditional>

        <NavLink
          component="a"
          href={routesEndPoints.HOME}
          label="Home"
          leftSection={<IconHome size={40} stroke={1.5}></IconHome>}
        />

        <NavLink
          component="a"
          label="Buy"
          href={routesEndPoints.PROPERTIES}
          onClick={() => {
            navigateToProperties();
            props.onClose();
          }}
          leftSection={<IconHomeDollar size={40} stroke={1.5} />}
        />

        <NavLink
          component="a"
          label="Rent"
          href={routesEndPoints.PROPERTIES}
          onClick={() => {
            navigateToProperties();
            props.onClose();
          }}
          leftSection={<IconHomeDollar size={40} stroke={1.5} />}
        />

        <Conditional condition={isAuthenticated}>
          <NavLink
            label="My list"
            leftSection={<IconList size={40} stroke={1.5} />}
          />
        </Conditional>

        <Conditional condition={isAuthenticated}>
          <NavLink
            label="favorite"
            leftSection={<IconHeart size={40} stroke={1.5} />}
          />
        </Conditional>

        <Conditional condition={isAuthenticated}>
          <NavLink
            component="a"
            c="red"
            label="Logout"
            onClick={() => {
              props.onClose();
            }}
            leftSection={<IconLogout size={40} stroke={1.5} />}
          />
        </Conditional>
      </Drawer>
    </>
  );
};
