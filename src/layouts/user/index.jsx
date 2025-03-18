import { Outlet } from "react-router-dom";
import { UserNavBar } from "./components/navBar";
import { Flex, Group } from "@mantine/core";

export const UserLayout = () => {
  return (
    <>
      <Flex>
        <div style={{ width: "220px" }}>
          <UserNavBar />
        </div>
        <div style={{ flex: 1, padding: "16px" }}>
          <Outlet />
        </div>
      </Flex>
    </>
  );
};
