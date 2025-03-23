import { Box, Drawer, NavLink } from "@mantine/core";
import {
  IconCalendarEvent,
  IconHeartHandshake,
  IconHomeSearch,
  IconList,
  IconSettings,
} from "@tabler/icons-react";
import React from "react";
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";

export const DashboardDrawwer = ({ opened, onClose }) => {
  const navigateToListings = useAppNavigation(routesEndPoints.USER);

  const navigateToSettings = useAppNavigation(routesEndPoints.SETTINGS);

  const navigateToRequestedTours = useAppNavigation(routesEndPoints.REQUESTED);

  const NavigateToTourRequest = useAppNavigation(routesEndPoints.REQUEST);

  const navigateToOffers = useAppNavigation(routesEndPoints.OFFERS);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        size="sm"
        padding="md"
        title="Dashboard"
      >
        <NavLink
          label="My Listing"
          p={10}
          leftSection={<IconList />}
          onClick={() => {
            navigateToListings();
            onClose();
          }}
          color="#00c898"
        />
        <NavLink
          label="Requested Tours"
          p={10}
          onClick={() => {
            navigateToRequestedTours();
            onClose();
          }}
          leftSection={<IconCalendarEvent />}
          color="#00c898"
        />
        <NavLink
          label="Tour Requests"
          p={10}
          onClick={() => {
            NavigateToTourRequest();
            onClose();
          }}
          leftSection={<IconHomeSearch />}
          color="#00c898"
        />
        <NavLink
          label="Received Offers"
          p={10}
          onClick={() => {
            navigateToOffers();
            onClose();
          }}
          leftSection={<IconHeartHandshake />}
          color="#00c898"
        />
        <NavLink
          label="Setting"
          p={10}
          leftSection={<IconSettings />}
          onClick={() => {
            navigateToSettings();
            onClose();
          }}
          color="#00c898"
        />
      </Drawer>
    </>
  );
};
