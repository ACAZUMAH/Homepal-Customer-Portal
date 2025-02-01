import { routes } from "./routes";
import { useForceUpdate } from "@mantine/hooks";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

export const AppRouter = () => {
    //const forceUpdate = useForceUpdate()

    const getRouter = () => {
        return createBrowserRouter([
            {
                element: <Outlet />,
                children: [ ...routes],
            },
        ])
    }

    return <RouterProvider router={getRouter()} />;
}