import { Text, Menu, Button, ThemeIcon } from "@mantine/core";
import {
  IconLogout,
  IconLayoutDashboard,
  IconUserCircle,
} from "@tabler/icons-react";
import classes from "../CSS/index.module.css";

export const DropDownMenu = () => {
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
          >
            <IconUserCircle size="2rem" stroke={1.5} />
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
            <Text size="xl">Dash board</Text>
          </Menu.Item>

          <Menu.Item c="red" leftSection={<IconLogout stroke={1.5} />}>
            <Text size="xl">Logout</Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
