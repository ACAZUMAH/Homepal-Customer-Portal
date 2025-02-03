import { routes } from "./routes";
import { useForceUpdate } from "@mantine/hooks";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import useAppAuthentication from "../hooks/useAppAuthentication";
import { useEffect } from "react";

export const AppRouter = () => {
    const forceUpdate = useForceUpdate()
    const { isAuthenticated } = useAppAuthentication()
    const getRouter = () => {
        return createBrowserRouter([
            {
                element: <Outlet />,
                children: [ ...routes],
            },
        ])
    }
    useEffect(() => {
        forceUpdate()
    }, [isAuthenticated])
    return <RouterProvider router={getRouter()} />;
}