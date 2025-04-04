import React, { useState } from "react";
import classes from "../style/style.module.css";
import {
  IconCalendarEvent,
  IconHeartHandshake,
  IconHomeSearch,
  IconList,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import { Box, Burger, Center, Group, NavLink, Text } from "@mantine/core";
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";
import { useLocation } from "react-router-dom";
import { DashboardDrawwer } from "./drawwer";

export const UserNavBar = () => {
  const [opened, setOpened] = useState(false);

  const location = useLocation();

  const { user } = useAppAuthentication();

  const navigateToListings = useAppNavigation(routesEndPoints.USER);

  const navigateToSettings = useAppNavigation(routesEndPoints.SETTINGS);

  const navigateToRequestedTours = useAppNavigation(routesEndPoints.REQUESTED);

  const NavigateToTourRequest = useAppNavigation(routesEndPoints.REQUEST);

  const navigateToOffers = useAppNavigation(routesEndPoints.OFFERS);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <Box hiddenFrom="md">
        <Burger
          size="sm"
          color="#00c898"
          opened={opened}
          onClick={() => setOpened(!opened)}
        />
      </Box>
      <Box visibleFrom="md">
        <div style={{ width: "220px" }}>
          <nav className={classes.navbar}>
            <div className={classes.section}>
              <Group justify="flex-start" ml="xs" mb="xs">
                <IconUserCircle stroke={1.5} size={35} />
                <Text>{user?.firstName || user?.phoneNumber || ""}</Text>
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
                active={isActive(routesEndPoints.REQUESTED)}
                onClick={navigateToRequestedTours}
                leftSection={<IconCalendarEvent />}
                color="#00c898"
              />
              <NavLink
                label="Tour Requests"
                p={10}
                active={isActive(routesEndPoints.REQUEST)}
                onClick={NavigateToTourRequest}
                leftSection={<IconHomeSearch />}
                color="#00c898"
              />
              <NavLink
                label="Received Offers"
                p={10}
                active={isActive(routesEndPoints.OFFERS)}
                onClick={navigateToOffers}
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
          </nav>
        </div>
      </Box>
      <DashboardDrawwer opened={opened} onClose={() => setOpened(!opened)} />
    </>
  );
};
