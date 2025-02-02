import { About } from "../about/about";
import { Home } from "../Home/home";
import { MainLayout } from "../layouts/main";
import { Navigate } from "react-router-dom";
import { Properties } from "../properties/properties";
import { Property } from "../property/property";
import { Login } from "../Authentication/login";
import { RequestTour } from "../tour";
import { MakeOffer } from "../offer/offer";
import { routesEndPoints } from "../constants";

export const routes = [
  {
    path: routesEndPoints.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routesEndPoints.PROPERTIES,
        children: [
          {
            index: true,
            element: <Properties />,
          },
          {
            path: routesEndPoints.PROPERTY,
            element: <Property />,
            children: [
              {
                path: routesEndPoints.PROPERTY_TOUR,
                element: <RequestTour />,
              },
              {
                path: routesEndPoints.PROPERTY_OFFER,
                element: <MakeOffer />,
              },
            ],
          },
        ],
      },
      {
        path: routesEndPoints.ABOUT,
        element: <About />,
      },
    ],
  },
  {
    paht: routesEndPoints.LOGIN,
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