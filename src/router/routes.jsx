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
import { Favorite } from "../favorite";
import { List } from "../list";

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
        path: routesEndPoints.FAVORITE,
        element: <Favorite />
      },
      {
        path: routesEndPoints.LIST,
        element: <List />
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
    path: routesEndPoints.LOGIN,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={routesEndPoints.HOME} />,
  },
];