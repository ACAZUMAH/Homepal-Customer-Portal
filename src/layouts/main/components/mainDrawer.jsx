import { Drawer, NavLink } from "@mantine/core";
import { IconHome, IconHeart, IconList, IconLogin, IconLogout, IconBuilding } from "@tabler/icons-react";
import { Conditional } from "../../../components/conditional";
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";

export const MainDrawer = (props) => {
  const navigateToLogin = useAppNavigation(routesEndPoints.LOGIN);
  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES)
  const navigateToFavorite = useAppNavigation(routesEndPoints.FAVORITE)
  const navigateToSavedList = useAppNavigation(routesEndPoints.LIST)
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
            leftSection={<IconLogin stroke={1.5} />}
          />
        </Conditional>

        <NavLink
          component="a"
          href={routesEndPoints.HOME}
          label="Home"
          leftSection={<IconHome stroke={1.5}></IconHome>}
        />

        <NavLink
          component="a"
          label="Properties"
          href={routesEndPoints.PROPERTIES}
          onClick={() => {
            navigateToProperties()
            props.onClose()
          }}
          leftSection={<IconBuilding stroke={1.5} />}
        />

        <Conditional condition={isAuthenticated}>
          <NavLink
          component="a"
            label="My list"
            href={routesEndPoints.LIST}
            onClick={() => {
              navigateToSavedList()
              props.onClose()
            }}
            leftSection={<IconList  stroke={1.5} />}
          />
          <NavLink
          component="a"
            label="favorite"
            href={routesEndPoints.FAVORITE}
            onClick={() => {
              navigateToFavorite()
              props.onClose()
            }}
            leftSection={<IconHeart stroke={1.5} />}
          />
          <NavLink
            component="a"
            c="red"
            label="Logout"
            onClick={() => {
              props.onClose();
            }}
            leftSection={<IconLogout stroke={1.5} />}
          />
        </Conditional>
      </Drawer>
    </>
  );
};
