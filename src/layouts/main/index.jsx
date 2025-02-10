import { AppShell } from "@mantine/core";
import { MainHeader } from "./components/mainHeader";
import { Outlet } from "react-router-dom";
import { MainFooter } from "./components/mainFooter";

export const MainLayout = () => {
  return (
    <>
      <AppShell header={{ height: 70 }}>
        <AppShell.Header>
            <MainHeader />
        </AppShell.Header>
        <AppShell.Main mih="90vh">
            <Outlet />
        </AppShell.Main>
        <AppShell.Footer pos="relative">
            <MainFooter />
        </AppShell.Footer>
      </AppShell>
    </>
  );
};
