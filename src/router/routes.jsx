import { About } from "../about/about";
import { Home } from "../Home/home";
import { MainLayout } from "../layouts/main";
import { Navigate } from "react-router-dom";
import { Properties } from "../properties/properties";
import { Property } from "../property/property";
import { Login } from "../Authentication/login";
import { RequestTour } from "../tour";
import { MakeOffer } from "../offer/offer";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/rent",
        children: [
          {
            index: true,
            element: <Properties />,
          },
          {
            path: "/rent/property/:id",
            element: <Property />,
            children: [
              {
                path: "/rent/property/:id/tour",
                element: <RequestTour />,
              },
              {
                path: "/rent/property/:id/offer",
                element: <MakeOffer />,
              },
            ],
          },
        ],
      },
      {
        path: "/buy",
        children: [
          {
            index: true,
            element: <Properties />,
          },
          {
            path: "/buy/property/:id",
            element: <Property />,
            children: [
              {
                path: "/buy/property/:id/tour",
                element: <RequestTour />,
              },
              {
                path: "/buy/property/:id/offer",
                element: <MakeOffer />,
              },
            ],
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    paht: "/login",
    element: <MainLayout />,
    children: [
      {
        poath: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];