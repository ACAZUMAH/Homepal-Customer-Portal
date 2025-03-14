import React from "react";
import classes from "../style/style.module.css";
import { IconList, IconSettings, IconUserCircle } from "@tabler/icons-react";
import { Group, NavLink, Stack, Text } from "@mantine/core";

export const UserNavBar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
        <Group justify="flex-start" ml="xs" mb="xs">
          <IconUserCircle stroke={1.5} size={35} />
          <Text> User </Text>
        </Group>
      </div>
      <div className={classes.links}>
          <NavLink label="My Listing" leftSection={<IconList />} />
          <NavLink label="setting" leftSection={<IconSettings />} />
      </div>
      <div></div>
    </nav>
  );
};
