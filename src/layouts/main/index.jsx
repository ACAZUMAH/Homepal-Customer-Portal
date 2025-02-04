import { AppShell } from "@mantine/core";
import { MainHeader } from "./components/mainHeader";
import { Outlet } from "react-router-dom";
import { MainFooter } from "./components/mainFooter";

export const MainLayout = () => {
  return (
    <>
      <AppShell header={{ height: 85 }}>
        <AppShell.Header>
            <MainHeader />
        </AppShell.Header>
        <AppShell.Main>
            <Outlet />
        </AppShell.Main>
        <AppShell.Footer pos="relative">
            <MainFooter />
        </AppShell.Footer>
      </AppShell>
    </>
  );
};
