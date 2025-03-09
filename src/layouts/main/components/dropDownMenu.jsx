import { Text, Menu, Button, ThemeIcon } from "@mantine/core";
import {
  IconLogout,
  IconLayoutDashboard,
  IconUserCircle,
} from "@tabler/icons-react";

import classes from "../CSS/index.module.css";
import useAppAuthentication from "../../../hooks/useAppAuthentication";

export const DropDownMenu = () => {

  const { logoutUser, user } = useAppAuthentication();

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
          >
            <Text size="md">Dashboard</Text>
          </Menu.Item>

          <Menu.Item
            c="red"
            leftSection={<IconLogout stroke={1.5} />}
            onClick={logoutUser}
          >
            <Text size="md">Logout</Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
