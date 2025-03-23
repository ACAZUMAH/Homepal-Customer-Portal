import { Text, Menu, Button, ThemeIcon } from "@mantine/core";
import {
  IconLogout,
  IconLayoutDashboard,
  IconUserCircle,
} from "@tabler/icons-react";

import classes from "../CSS/index.module.css";
import useAppAuthentication from "../../../hooks/useAppAuthentication";
import { useAppNavigation } from "../../../hooks";
import { useLocation } from "react-router-dom";
import { routesEndPoints } from "../../../constants";

export const DropDownMenu = () => {

  const { logoutUser, user } = useAppAuthentication();

  const NavigateToUser = useAppNavigation(routesEndPoints.USER)
  const navigateToHome = useAppNavigation(routesEndPoints.HOME)

  const firstName = user?.firstName ?? ""

  return (
    <>
      <Menu
        position="bottom-start"
        trigger="hover"
        openDelay={100}
        closeDelay={400}
        shadow="md"
        width={175}
      >
        <Menu.Target>
          <Button
            c="#00c898"
            variant="transparent"
            classNames={{
              label: classes.button,
            }}
            leftSection={<IconUserCircle stroke={1.5} size={30}/>}
          >
            {firstName}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <ThemeIcon c="#00c898" bg="transparent">
                <IconLayoutDashboard stroke={1.5} />
              </ThemeIcon>
            }
            onClick={() => NavigateToUser()}
          >
            <Text size="md">Dashboard</Text>
          </Menu.Item>

          <Menu.Item
            c="red"
            leftSection={<IconLogout stroke={1.5} />}
            onClick={() => {
              logoutUser()
              navigateToHome()
            }}
          >
            <Text size="md">Logout</Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
