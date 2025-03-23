import { Drawer, NavLink } from "@mantine/core";
import { IconHome, IconHeart, IconList, IconLogin, IconLogout, IconBuilding, IconHomeDollar, IconUsers, IconNews, IconUserCircle } from "@tabler/icons-react";
import { Conditional } from "../../../components/conditional";
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";

export const MainDrawer = (props) => {
  const navigateToLogin = useAppNavigation(routesEndPoints.LOGIN);
  const navigateToRent = useAppNavigation(routesEndPoints.RENT)
  const navigateToFavorite = useAppNavigation(routesEndPoints.FAVORITE)
  const navigateToBuy = useAppNavigation(routesEndPoints.BUY)
  const navigateToFindAgent = useAppNavigation(routesEndPoints.FIND_AGENT);
  const navigateToBlog = useAppNavigation(routesEndPoints.BLOG)
  const navigateToUser = useAppNavigation(routesEndPoints.USER)
  const { isAuthenticated, logoutUser } = useAppAuthentication();

  return (
    <>
      <Drawer
        size="md"
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
          label="Buy"
          href={routesEndPoints.BUY}
          onClick={() => {
            navigateToBuy();
            props.onClose();
          }}
          leftSection={<IconHomeDollar stroke={1.5} />}
        />

        <NavLink
          component="a"
          label="Rent"
          href={routesEndPoints.RENT}
          onClick={() => {
            navigateToRent();
            props.onClose();
          }}
          leftSection={<IconBuilding stroke={1.5} />}
        />
        <NavLink
          component="a"
          label="Find Agent"
          href={routesEndPoints.FIND_AGENT}
          onClick={() => {
            navigateToFindAgent();
            props.onClose();
          }}
          leftSection={<IconUsers stroke={1.5} />}
        />
        <NavLink
          component="a"
          label="Blog"
          href={routesEndPoints.BLOG}
          onClick={() => {
            navigateToBlog();
            props.onClose();
          }}
          leftSection={<IconNews stroke={1.5} />}
        />
        <Conditional condition={isAuthenticated}>
          <NavLink
            component="a"
            label="favorite"
            href={routesEndPoints.FAVORITE}
            onClick={() => {
              navigateToFavorite();
              props.onClose();
            }}
            leftSection={<IconHeart stroke={1.5} />}
          />
          <NavLink
            component="a"
            label="User"
            onClick={() => {
              navigateToUser()
              props.onClose();
            }}
            leftSection={<IconUserCircle stroke={1.5} />}
          />
          <NavLink
            component="a"
            c="red"
            label="Logout"
            onClick={() => {
              logoutUser()
              props.onClose();
            }}
            leftSection={<IconLogout stroke={1.5} />}
          />
        </Conditional>
      </Drawer>
    </>
  );
};
