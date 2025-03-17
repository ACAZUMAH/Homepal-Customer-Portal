import React from "react";
import classes from "../style/style.module.css";
import {
  IconBrandTelegram,
  IconCalendarEvent,
  IconFileInvoice,
  IconHeartHandshake,
  IconHomeSearch,
  IconList,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import { Group, NavLink, Text } from "@mantine/core";
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";
import { useLocation } from "react-router-dom";

export const UserNavBar = () => {

  const location = useLocation()

  const { user } = useAppAuthentication();

  const navigateToListings = useAppNavigation(routesEndPoints.USER);

  const navigateToSettings = useAppNavigation(routesEndPoints.SETTINGS);

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
        <Group justify="flex-start" ml="xs" mb="xs">
          <IconUserCircle stroke={1.5} size={35} />
          <Text>{user.firstName || user.phoneNumber}</Text>
        </Group>
      </div>
      <div className={classes.links}>
        <NavLink
          label="My Listing"
          p={10}
          leftSection={<IconList />}
          active={isActive(routesEndPoints.USER)}
          onClick={navigateToListings}
          color="#00c898"
        />
        <NavLink
          label="Requested Tours"
          p={10}
          leftSection={<IconCalendarEvent />}
          color="#00c898"
        />
        <NavLink
          label="Tour Requests"
          p={10}
          leftSection={<IconHomeSearch />}
          color="#00c898"
        />
        <NavLink
          label="Made Offers"
          p={10}
          leftSection={<IconBrandTelegram />}
          color="#00c898"
        />
        <NavLink
          label="Received Offers"
          p={10}
          leftSection={<IconHeartHandshake />}
          color="#00c898"
        />
        <NavLink
          label="Setting"
          p={10}
          leftSection={<IconSettings />}
          active={isActive(routesEndPoints.SETTINGS)}
          onClick={navigateToSettings}
          color="#00c898"
        />
      </div>
      <div></div>
    </nav>
  );
};
