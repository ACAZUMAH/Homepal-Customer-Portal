import { Outlet } from "react-router-dom";
import { UserNavBar } from "./components/navBar";
import { Flex, Group } from "@mantine/core";

export const UserLayout = () => {
  return (
    <>
      <Flex>
          <UserNavBar />
        <div style={{ flex: 1, padding: "16px" }}>
          <Outlet />
        </div>
      </Flex>
    </>
  );
};
