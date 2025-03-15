import { Outlet } from "react-router-dom";

import React from "react";
import { UserNavBar } from "./components/navBar";

export const UserLayout = () => {
  return (
    <>
      <UserNavBar /> 
      <Outlet />
    </>
  );
};
